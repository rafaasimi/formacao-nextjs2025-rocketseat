import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center text-center transition-colors duration-200",
  {
    variants: {
      variant: {
        primary: "text-body-md bg-surface border border-stroke hover:bg-surface-hover hover:border-text py-4 px-6 rounded-lg",
        link: "text-primary underline-offset-4 hover:underline",
        icon: "p-3 rounded-full hover:bg-highlight text-text"
      }
    },
    defaultVariants: {
      variant: "primary",
    },
  }
)

function Button({
  className,
  variant = "primary",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
