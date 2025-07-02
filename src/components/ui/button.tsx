import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "ghost" | "default";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant = "default", ...props }, ref) => {
    const variantClasses = {
      ghost: "bg-transparent hover:bg-gray-100",
      default: "bg-gray-800 text-white hover:bg-gray-700",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "px-4 py-2 rounded-md text-sm font-medium transition-colors",
          "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300",
          variantClasses[variant],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
