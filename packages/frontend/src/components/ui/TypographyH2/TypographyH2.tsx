import { cn } from "@/utils";

export function TypographyH2({ children, className = "" }: { children: string, className?: string }) {
  return (
    <h2 className={cn(["mt-10 scroll-m-20 text-3xl font-semibold tracking-tight transition-colors first:mt-0 dark:border-b-slate-700", className])}>
      {children}
    </h2>
  )
}
