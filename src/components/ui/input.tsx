import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export function Input({ className, ...props }: JSX.InputHTMLAttributes<HTMLInputElement>) {
  return <input className={cn("input", className)} {...props} />;
}
