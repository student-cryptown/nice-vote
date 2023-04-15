import { cn } from "@/utils";
import { ReactElement } from "react";

export function TypographyH4({ children, className = "" }: { children: ReactElement, className?: string }) {
  return (
    <h4 className={cn(["scroll-m-20 text-xl font-semibold tracking-tight", className])}>
      {children}
    </h4>
  )
}
