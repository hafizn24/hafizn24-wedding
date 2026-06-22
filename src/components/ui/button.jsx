import * as React from "react"
import { cn } from "../../lib/utils"

const Button = React.forwardRef(
  (
    {
      className,
      variant = "default",
      size = "md",
      ...props
    },
    ref
  ) => {
    const baseStyles = "inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
    
    const variants = {
      default: "bg-slate-900 text-white hover:bg-slate-800",
      outline: "border border-slate-200 bg-white hover:bg-slate-100 text-slate-900",
      ghost: "hover:bg-slate-100 text-slate-900",
      primary: "bg-blue-600 text-white hover:bg-blue-700",
    }
    
    const sizes = {
      sm: "h-9 px-3 text-sm",
      md: "h-10 px-4 py-2",
      lg: "h-11 px-8 text-lg",
    }

    return (
      <button
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
