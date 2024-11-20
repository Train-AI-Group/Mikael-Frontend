import { ButtonHTMLAttributes } from "react"
import classNames from "classnames"

const baseStyles = "px-8 py-2.5 rounded-full font-medium transition-colors"

const variantStyles = {
  primary: "bg-primary text-white hover:bg-primary/80 active:bg-primary/90",
  secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200 active:bg-gray-300"
} as const

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof variantStyles
  fullWidth?: boolean
  children: React.ReactNode
}

export const Button = ({
  variant = "primary",
  fullWidth = false,
  children,
  className = "",
  ...props
}: ButtonProps) => {
  return (
    <button
      className={classNames(
        baseStyles,
        variantStyles[variant],
        {
          "w-full": fullWidth
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
