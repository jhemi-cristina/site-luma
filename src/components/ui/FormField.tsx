import type { ComponentPropsWithoutRef, ReactNode, Ref } from "react";
import { cn } from "@/lib/cn";

interface FieldShellProps {
  id: string;
  label: string;
  error?: string;
  className?: string;
  children: ReactNode;
}

interface FieldBaseProps {
  id: string;
  label: string;
  error?: string;
  className?: string;
}

type TextFieldProps = FieldBaseProps &
  Omit<ComponentPropsWithoutRef<"input">, "id" | "className"> & { ref?: Ref<HTMLInputElement> };

type TextAreaFieldProps = FieldBaseProps &
  Omit<ComponentPropsWithoutRef<"textarea">, "id" | "className"> & { ref?: Ref<HTMLTextAreaElement> };

function errorIdFor(id: string) {
  return `${id}-error`;
}

function controlStyles(hasError: boolean, extra: string) {
  return cn(
    "w-full rounded-lg border bg-surface px-4 text-body text-ink placeholder:text-subtle",
    "transition-[border-color,box-shadow] duration-200",
    "focus:border-primary focus:ring-3 focus:ring-primary/20 focus:outline-none",
    hasError ? "border-error" : "border-line",
    extra,
  );
}

function a11yProps(id: string, error?: string) {
  return {
    id,
    "aria-invalid": error ? true : undefined,
    "aria-describedby": error ? errorIdFor(id) : undefined,
  };
}

function FieldShell({ id, label, error, className, children }: FieldShellProps) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <label htmlFor={id} className="text-body font-bold text-ink">
        {label}
      </label>
      {children}
      {error && (
        <p id={errorIdFor(id)} className="text-body text-error">
          {error}
        </p>
      )}
    </div>
  );
}

export function TextField({ id, label, error, className, ...inputProps }: TextFieldProps) {
  return (
    <FieldShell id={id} label={label} error={error} className={className}>
      <input {...inputProps} {...a11yProps(id, error)} className={controlStyles(Boolean(error), "py-3")} />
    </FieldShell>
  );
}

export function TextAreaField({ id, label, error, className, ...textareaProps }: TextAreaFieldProps) {
  return (
    <FieldShell id={id} label={label} error={error} className={className}>
      <textarea
        {...textareaProps}
        {...a11yProps(id, error)}
        className={controlStyles(Boolean(error), "h-[100px] resize-none py-3.5 lg:h-[120px]")}
      />
    </FieldShell>
  );
}
