import clsx from "clsx"; 

export default function Container({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={clsx("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10", className)}>
      {children}
    </div>
  );
}