import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        primary: 'bg-blue-200 text-white hover:bg-blue-300 rounded-full',
        secondary:
          'bg-gray-100 text-gray-800 hover:bg-blue-100 rounded-full',
        outline:
          'text-gray-200 border border-gray-400 transition-colors duration-200 hover:text-blue-200 hover:border-blue-200 rounded-md',
      },
      size: {
        md:
          "text-action-md px-5 py-[12.5px]",
        sm: "text-action-sm px-4 py-[9.5px]",
        icon: "h-10 w-10 p-3",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

function Button({
  className,
  variant = "primary",
  size = "md",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
