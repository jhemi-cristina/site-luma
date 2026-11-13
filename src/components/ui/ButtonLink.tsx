import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import { buttonStyles, type ButtonStyleOptions } from "./buttonStyles";

type ButtonLinkProps = ComponentPropsWithoutRef<typeof Link> & ButtonStyleOptions;

export function ButtonLink({ variant, size, fullWidth, className, ...props }: ButtonLinkProps) {
  return <Link className={buttonStyles({ variant, size, fullWidth, className })} {...props} />;
}
