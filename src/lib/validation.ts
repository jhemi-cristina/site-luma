import type { ContactFieldName } from "@/data/contact";

export type ContactFormValues = Record<ContactFieldName, string>;
export type ContactFormErrors = Partial<Record<ContactFieldName, string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const MIN_NAME_LENGTH = 2;
const MIN_MESSAGE_LENGTH = 10;
export const MAX_MESSAGE_LENGTH = 1000;

export function validateContactField(field: ContactFieldName, rawValue: string): string | undefined {
  const value = rawValue.trim();

  switch (field) {
    case "name":
      if (!value) return "Please enter your name.";
      if (value.length < MIN_NAME_LENGTH) return `Your name must have at least ${MIN_NAME_LENGTH} characters.`;
      return undefined;
    case "email":
      if (!value) return "Please enter your email.";
      if (!EMAIL_PATTERN.test(value)) return "Please enter a valid email, like name@example.com.";
      return undefined;
    case "message":
      if (!value) return "Please tell us how we can help.";
      if (value.length < MIN_MESSAGE_LENGTH) return `Your question must have at least ${MIN_MESSAGE_LENGTH} characters.`;
      if (value.length > MAX_MESSAGE_LENGTH) return `Your question must have at most ${MAX_MESSAGE_LENGTH} characters.`;
      return undefined;
  }
}

export function validateContactForm(values: ContactFormValues): ContactFormErrors {
  const errors: ContactFormErrors = {};

  for (const field of Object.keys(values) as ContactFieldName[]) {
    const error = validateContactField(field, values[field]);
    if (error) errors[field] = error;
  }

  return errors;
}
