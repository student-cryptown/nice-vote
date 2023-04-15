import { cn } from "@/utils";

export function TypographyH4({ children, className = "" }: { children: string, className?: string }) {
  return (
    <h4 className={cn(["mt-8 scroll-m-20 text-xl font-semibold tracking-tight", className])}>
      {children}
    </h4>
  )
}