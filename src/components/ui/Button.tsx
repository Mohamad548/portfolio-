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
    "bg-accent text-white shadow-[0_0_0_1px_rgba(59,130,246,0.4),0_12px_40px_rgba(59,130,246,0.25)] hover:bg-[#2563eb]",
  ghost: "bg-transparent text-text-muted hover:text-text hover:bg-white/5",
  outline:
    "bg-transparent border border-border text-text hover:border-border-strong hover:bg-accent-soft",
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
    "focus-ring inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-200",
    variants[variant],
    className,
  );

  if (href) {
    if (external) {
      return (
        <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
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
