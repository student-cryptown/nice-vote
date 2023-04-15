import { cn } from "@/utils";
import { ReactElement } from "react";

export function TypographyP({ children, className = "" }: { children: string | ReactElement, className?: string }) {
  return (
    <p className={cn(["leading-7", className])}>
      {children}
    </p>
  )
}
