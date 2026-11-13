import type { ContactFormValues } from "@/lib/validation";

const MOCK_LATENCY_MS = 1200;

export interface ContactResponse {
  id: string;
  receivedAt: string;
}

export async function sendContactMessage(values: ContactFormValues): Promise<ContactResponse> {
  await new Promise((resolve) => setTimeout(resolve, MOCK_LATENCY_MS));

  if (values.email.trim().toLowerCase().endsWith("@fail.test")) {
    throw new Error("Mock delivery failure");
  }

  return {
    id: crypto.randomUUID(),
    receivedAt: new Date().toISOString(),
  };
}
