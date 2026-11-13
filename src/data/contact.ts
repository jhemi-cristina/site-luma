export type ContactFieldName = "name" | "email" | "message";

export interface ContactFieldConfig {
  name: ContactFieldName;
  label: string;
  placeholder: string;
  type: "text" | "email" | "textarea";
  autoComplete?: string;
}

export interface ContactChannel {
  icon: { src: string; width: number; height: number };
  title: string;
  value: string;
  href?: string;
}

export interface ContactData {
  eyebrow: string;
  title: string;
  description: string;
  channels: ContactChannel[];
  form: {
    title: string;
    description: string;
    submitLabel: string;
    submittingLabel: string;
    fields: ContactFieldConfig[];
    success: { title: string; description: string; resetLabel: string };
    errorMessage: string;
  };
}

export const contactData: ContactData = {
  eyebrow: "Contact",
  title: "Get in touch",
  description:
    "Have a question? We’re here to help. Whether you’re looking for the right course, learning with your team or interested in teaching with Luma, we’d love to hear from you.",
  channels: [
    {
      icon: { src: "/icons/chat.svg", width: 24, height: 24 },
      title: "Email",
      value: "contact@luma.com",
      href: "mailto:contact@luma.com",
    },
    {
      icon: { src: "/icons/clock.svg", width: 20, height: 20 },
      title: "Response Time",
      value: "Up to 24 hours on business days",
    },
  ],
  form: {
    title: "Contact us",
    description: "Fill out the fields and we will get in touch.",
    submitLabel: "Send message",
    submittingLabel: "Sending…",
    fields: [
      { name: "name", label: "Full name", placeholder: "Your name", type: "text", autoComplete: "name" },
      { name: "email", label: "Email", placeholder: "youremail@example.com", type: "email", autoComplete: "email" },
      { name: "message", label: "Your question", placeholder: "Tell us how we can help...", type: "textarea" },
    ],
    success: {
      title: "Message sent!",
      description: "Thanks for reaching out. We’ll reply to your email within 24 hours on business days.",
      resetLabel: "Send another message",
    },
    errorMessage: "Something went wrong while sending your message. Please try again.",
  },
};
