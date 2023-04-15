import { cn } from "@/utils";

export function TypographyP({ children, className = "" }: { children: string, className?: string }) {
  return (
    <p className={cn(["leading-7", className])}>
      {children}
    </p>
  )
}
