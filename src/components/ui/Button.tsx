import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost" | "outline";
  className?: string;
  external?: boolean;
  type?: "button" | "submit";
  onClick?: () => void;
};

const variants = {
  primary:
    "border border-transparent bg-accent text-white shadow-[0_6px_18px_rgba(37,99,235,0.2),inset_0_1px_0_rgba(255,255,255,0.18)] hover:bg-[#1d4ed8] hover:shadow-[0_8px_24px_rgba(37,99,235,0.28)]",
  ghost: "border border-transparent bg-transparent text-text-muted hover:text-accent hover:bg-blue-50",
  outline:
    "border border-blue-200/70 bg-white/65 text-text shadow-[0_2px_5px_rgba(45,88,145,0.03)] hover:border-blue-300 hover:bg-white",
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  external,
  type = "button",
  onClick,
}: ButtonProps) {
  const classes = cn(
    "focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-2xl px-5 py-2.5 text-sm font-medium transition-[background-color,box-shadow,border-color,color,transform] duration-200 motion-safe:hover:-translate-y-0.5",
    variants[variant],
    className,
  );

  if (href) {
    if (external) {
      return (
        <a href={href} className={classes} target="_blank" rel="noopener noreferrer" onClick={onClick}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
