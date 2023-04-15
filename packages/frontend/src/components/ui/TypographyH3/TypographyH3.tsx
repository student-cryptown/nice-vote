import { cn } from "@/utils";

export function TypographyH3({ children, className = "" }: { children: string, className?: string }) {
  return (
    <h3 className={cn(["scroll-m-20 text-2xl font-semibold tracking-tight", className])}>
      {children}
    </h3>
  )
}
