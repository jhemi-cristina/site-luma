import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { sendContactMessage } from "@/services/contactService";
import { ContactForm } from "./ContactForm";

vi.mock("@/services/contactService", () => ({
  sendContactMessage: vi.fn(),
}));

const sendMock = vi.mocked(sendContactMessage);

async function fillValidForm(user: ReturnType<typeof userEvent.setup>) {
  await user.type(screen.getByLabelText("Full name"), "Ana Souza");
  await user.type(screen.getByLabelText("Email"), "ana@example.com");
  await user.type(screen.getByLabelText("Your question"), "Do you offer team plans?");
}

describe("ContactForm", () => {
  beforeEach(() => {
    sendMock.mockReset();
  });

  it("shows every error and focuses the first invalid field when submitted empty", async () => {
    const user = userEvent.setup();
    render(<ContactForm />);

    await user.click(screen.getByRole("button", { name: "Send message" }));

    const name = screen.getByLabelText("Full name");
    expect(name).toHaveFocus();
    expect(name).toHaveAttribute("aria-invalid", "true");
    expect(name).toHaveAccessibleDescription("Please enter your name.");
    expect(screen.getByLabelText("Email")).toHaveAccessibleDescription("Please enter your email.");
    expect(screen.getByLabelText("Your question")).toHaveAccessibleDescription("Please tell us how we can help.");
    expect(sendMock).not.toHaveBeenCalled();
  });

  it("validates a field when it loses focus and clears the error once fixed", async () => {
    const user = userEvent.setup();
    render(<ContactForm />);

    const email = screen.getByLabelText("Email");
    await user.type(email, "ana@");
    await user.tab();
    expect(email).toHaveAccessibleDescription("Please enter a valid email, like name@example.com.");

    await user.type(email, "example.com");
    expect(email).not.toHaveAttribute("aria-invalid");
  });

  it("submits valid data, shows the sending state and then the success message", async () => {
    let resolveRequest: (value: { id: string; receivedAt: string }) => void = () => {};
    sendMock.mockReturnValue(new Promise((resolve) => (resolveRequest = resolve)));

    const user = userEvent.setup();
    render(<ContactForm />);

    await fillValidForm(user);
    await user.click(screen.getByRole("button", { name: "Send message" }));

    expect(sendMock).toHaveBeenCalledWith({
      name: "Ana Souza",
      email: "ana@example.com",
      message: "Do you offer team plans?",
    });
    expect(screen.getByRole("button", { name: /Sending/ })).toBeDisabled();

    resolveRequest({ id: "1", receivedAt: new Date().toISOString() });

    const heading = await screen.findByRole("heading", { name: "Message sent!" });
    await waitFor(() => expect(heading).toHaveFocus());
  });

  it("lets the user send another message with an empty form", async () => {
    sendMock.mockResolvedValue({ id: "1", receivedAt: new Date().toISOString() });
    const user = userEvent.setup();
    render(<ContactForm />);

    await fillValidForm(user);
    await user.click(screen.getByRole("button", { name: "Send message" }));
    await user.click(await screen.findByRole("button", { name: "Send another message" }));

    const name = screen.getByLabelText("Full name");
    expect(name).toHaveValue("");
    await waitFor(() => expect(name).toHaveFocus());
  });

  it("keeps the typed values and shows an alert when sending fails", async () => {
    sendMock.mockRejectedValue(new Error("Network error"));
    const user = userEvent.setup();
    render(<ContactForm />);

    await fillValidForm(user);
    await user.click(screen.getByRole("button", { name: "Send message" }));

    expect(await screen.findByRole("alert")).toHaveTextContent("Something went wrong");
    expect(screen.getByLabelText("Full name")).toHaveValue("Ana Souza");
    expect(screen.getByRole("button", { name: "Send message" })).toBeEnabled();
  });
});
