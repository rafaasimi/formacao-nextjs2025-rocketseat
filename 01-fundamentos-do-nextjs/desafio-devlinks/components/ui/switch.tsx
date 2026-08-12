import { Switch as SwitchPrimitive } from "@base-ui/react/switch"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const switchVariants = cva(
  "inline-flex items-center rounded-full transition-colors border border-stroke bg-surface",
  {
    variants: {
      size: {
        default: "h-6 w-16",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
)

const switchThumbVariants = cva(
  "flex items-center justify-center rounded-full bg-white text-black transition-transform duration-200 ease-out data-checked:translate-x-8 data-unchecked:translate-x-0 hover:ring-8 hover:ring-highlight",
  {
    variants: {
      size: { 
        default: "size-8",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
)

function Switch({
  className,
  size = "default",
  children,
  ...props
}: SwitchPrimitive.Root.Props & VariantProps<typeof switchVariants>) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(switchVariants({ size, className }))}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(switchThumbVariants({ size }))}
      >
        {children}
      </SwitchPrimitive.Thumb>
    </SwitchPrimitive.Root>
  )
}

export { Switch, switchVariants, switchThumbVariants }
