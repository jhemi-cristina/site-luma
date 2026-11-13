"use client";

import { useCallback, useId, useRef, useState, type ChangeEvent, type FocusEvent, type FormEvent } from "react";
import { contactData, type ContactFieldName } from "@/data/contact";
import {
  MAX_MESSAGE_LENGTH,
  validateContactField,
  validateContactForm,
  type ContactFormErrors,
  type ContactFormValues,
} from "@/lib/validation";
import { sendContactMessage } from "@/services/contactService";

type FormStatus = "idle" | "submitting" | "success" | "error";
type FieldElement = HTMLInputElement | HTMLTextAreaElement;

const INITIAL_VALUES: ContactFormValues = { name: "", email: "", message: "" };

export function useContactForm() {
  const { form } = contactData;
  const formId = useId();

  const [values, setValues] = useState<ContactFormValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<ContactFieldName, boolean>>>({});
  const [status, setStatus] = useState<FormStatus>("idle");

  const fieldRefs = useRef<Partial<Record<ContactFieldName, FieldElement | null>>>({});
  const successHeadingRef = useRef<HTMLHeadingElement>(null);

  const registerField = useCallback(
    (name: ContactFieldName) => (element: FieldElement | null) => {
      fieldRefs.current[name] = element;
    },
    [],
  );

  const handleChange = useCallback(
    (event: ChangeEvent<FieldElement>) => {
      const name = event.target.name as ContactFieldName;
      const { value } = event.target;

      setValues((current) => ({ ...current, [name]: value }));

      if (touched[name]) {
        setErrors((current) => ({ ...current, [name]: validateContactField(name, value) }));
      }
      if (status === "error") setStatus("idle");
    },
    [touched, status],
  );

  const handleBlur = useCallback((event: FocusEvent<FieldElement>) => {
    const name = event.target.name as ContactFieldName;
    const { value } = event.target;

    setTouched((current) => ({ ...current, [name]: true }));
    setErrors((current) => ({ ...current, [name]: validateContactField(name, value) }));
  }, []);

  const handleSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (status === "submitting") return;

      const validationErrors = validateContactForm(values);
      setErrors(validationErrors);
      setTouched({ name: true, email: true, message: true });

      const firstInvalidField = form.fields.find((field) => validationErrors[field.name]);
      if (firstInvalidField) {
        fieldRefs.current[firstInvalidField.name]?.focus();
        return;
      }

      setStatus("submitting");
      try {
        await sendContactMessage(values);
        setStatus("success");
        setValues(INITIAL_VALUES);
        setTouched({});
        requestAnimationFrame(() => successHeadingRef.current?.focus());
      } catch {
        setStatus("error");
      }
    },
    [form.fields, status, values],
  );

  const reset = useCallback(() => {
    setStatus("idle");
    setErrors({});
    requestAnimationFrame(() => fieldRefs.current[form.fields[0].name]?.focus());
  }, [form.fields]);

  const fields = form.fields.map((field) => ({
    ...field,
    id: `${formId}-${field.name}`,
    value: values[field.name],
    error: touched[field.name] ? errors[field.name] : undefined,
    maxLength: field.type === "textarea" ? MAX_MESSAGE_LENGTH : undefined,
    ref: registerField(field.name),
  }));

  return {
    titleId: `${formId}-title`,
    title: form.title,
    description: form.description,
    fields,
    isSuccess: status === "success",
    isSubmitting: status === "submitting",
    submitLabel: status === "submitting" ? form.submittingLabel : form.submitLabel,
    errorMessage: status === "error" ? form.errorMessage : undefined,
    success: form.success,
    successHeadingRef,
    handleChange,
    handleBlur,
    handleSubmit,
    reset,
  };
}

export type ContactFormViewModel = ReturnType<typeof useContactForm>;
