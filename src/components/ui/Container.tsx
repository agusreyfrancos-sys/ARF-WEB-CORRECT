import { cn } from "@/lib/utils";

export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[1800px] px-6 sm:px-10 lg:px-16 xl:px-24",
        className
      )}
    >
      {children}
    </div>
  );
}
