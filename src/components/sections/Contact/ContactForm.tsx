"use client";

import { Button, TextAreaField, TextField } from "@/components/ui";
import { cn } from "@/lib/cn";
import { ContactSuccess } from "./ContactSuccess";
import { useContactForm } from "./useContactForm";

export function ContactForm({ className }: { className?: string }) {
  const {
    titleId,
    title,
    description,
    fields,
    isSuccess,
    isSubmitting,
    submitLabel,
    errorMessage,
    success,
    successHeadingRef,
    handleChange,
    handleBlur,
    handleSubmit,
    reset,
  } = useContactForm();

  return (
    <div className={cn("grid rounded-2xl border border-line bg-white px-5 py-6 shadow-form lg:p-10", className)}>
      <div aria-live="polite" className="col-start-1 row-start-1 self-center">
        {isSuccess && <ContactSuccess {...success} headingRef={successHeadingRef} onReset={reset} />}
      </div>

      <form
        noValidate
        onSubmit={handleSubmit}
        aria-labelledby={titleId}
        inert={isSuccess}
        className={cn("col-start-1 row-start-1 flex flex-col gap-6", isSuccess && "invisible")}
      >
        <div className="flex flex-col gap-2">
          <h3 id={titleId} className="font-display text-h5 font-bold text-ink">
            {title}
          </h3>
          <p className="text-body text-muted">{description}</p>
        </div>

        <div className="flex flex-col gap-5">
          {fields.map(({ type, name, ...field }) =>
            type === "textarea" ? (
              <TextAreaField key={name} name={name} {...field} onChange={handleChange} onBlur={handleBlur} required />
            ) : (
              <TextField
                key={name}
                name={name}
                type={type}
                {...field}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
            ),
          )}
        </div>

        {errorMessage && (
          <p role="alert" className="rounded-lg bg-error/10 px-4 py-3 text-body text-error">
            {errorMessage}
          </p>
        )}

        <Button type="submit" size="lg" fullWidth disabled={isSubmitting}>
          {isSubmitting && (
            <span
              aria-hidden
              className="mr-2 size-4 rounded-full border-2 border-white/40 border-t-white motion-safe:animate-spin"
            />
          )}
          {submitLabel}
        </Button>
      </form>
    </div>
  );
}
