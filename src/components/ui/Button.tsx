import type { ComponentPropsWithoutRef } from "react";
import { buttonStyles, type ButtonStyleOptions } from "./buttonStyles";

type ButtonProps = ComponentPropsWithoutRef<"button"> & ButtonStyleOptions;

export function Button({ variant, size, fullWidth, className, type = "button", ...props }: ButtonProps) {
  return <button type={type} className={buttonStyles({ variant, size, fullWidth, className })} {...props} />;
}
