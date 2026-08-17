'use client';

import * as React from 'react';
import { Dialog as DialogPrimitive } from '@base-ui/react/dialog';
import { cva, type VariantProps } from 'class-variance-authority';
import { XIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

function Dialog({ ...props }: DialogPrimitive.Root.Props) {
  return <DialogPrimitive.Root data-slot="dialog" {...props} />;
}

function DialogTrigger({ ...props }: DialogPrimitive.Trigger.Props) {
  return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />;
}

function DialogPortal({ ...props }: DialogPrimitive.Portal.Props) {
  return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />;
}

function DialogClose({ ...props }: DialogPrimitive.Close.Props) {
  return <DialogPrimitive.Close data-slot="dialog-close" {...props} />;
}

const dialogOverlayVariants = cva(
  'data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 fixed inset-0 z-50',
  {
    variants: {
      variant: {
        default: 'bg-black/50',
        blurred: 'bg-black/40 backdrop-blur-[2px]',
        dark: 'bg-black/60',
        light: 'bg-black/30',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

function DialogOverlay({
  className,
  variant,
  ...props
}: DialogPrimitive.Backdrop.Props &
  VariantProps<typeof dialogOverlayVariants>) {
  return (
    <DialogPrimitive.Backdrop
      data-slot="dialog-overlay"
      className={cn(dialogOverlayVariants({ variant }), className)}
      {...props}
    />
  );
}

const dialogContentVariants = cva(
  'data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full translate-x-[-50%] translate-y-[-50%] gap-4 p-6 shadow-lg duration-200',
  {
    variants: {
      variant: {
        default:
          'bg-background border rounded-lg max-w-[calc(100%-2rem)] sm:max-w-lg',
        appointment:
          'bg-background-tertiary border-none rounded-lg max-w-[calc(100%-2rem)] sm:max-w-[477px] max-h-[90vh] overflow-y-auto',
        large:
          'bg-background border rounded-lg max-w-[calc(100%-2rem)] sm:max-w-2xl',
        fullscreen:
          'bg-background border rounded-lg max-w-[calc(100%-1rem)] max-h-[calc(100%-1rem)] sm:max-w-4xl sm:max-h-[90vh] overflow-y-auto',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

function DialogContent({
  className,
  children,
  showCloseButton = true,
  variant,
  overlayVariant,
  ...props
}: DialogPrimitive.Popup.Props &
  VariantProps<typeof dialogContentVariants> & {
    showCloseButton?: boolean;
    overlayVariant?: VariantProps<typeof dialogOverlayVariants>['variant'];
  }) {
  return (
    <DialogPortal>
      <DialogOverlay variant={overlayVariant} />
      <DialogPrimitive.Popup
        data-slot="dialog-content"
        className={cn(dialogContentVariants({ variant }), className)}
        {...props}
      >
        {children}
        {showCloseButton && (
          <DialogPrimitive.Close
            data-slot="dialog-close"
            render={
              <button className="ring-offset-background focus:ring-ring absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4" />
            }
          >
            <XIcon />
            <span className="sr-only">Close</span>
          </DialogPrimitive.Close>
        )}
      </DialogPrimitive.Popup>
    </DialogPortal>
  );
}

const dialogHeaderVariants = cva('flex flex-col gap-2', {
  variants: {
    align: {
      left: 'text-left',
      center: 'text-center sm:text-left',
      right: 'text-right',
    },
  },
  defaultVariants: {
    align: 'center',
  },
});

function DialogHeader({
  className,
  align,
  ...props
}: React.ComponentProps<'div'> & VariantProps<typeof dialogHeaderVariants>) {
  return (
    <div
      data-slot="dialog-header"
      className={cn(dialogHeaderVariants({ align }), className)}
      {...props}
    />
  );
}

function DialogFooter({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="dialog-footer"
      className={cn(
        'flex flex-col-reverse gap-2 sm:flex-row sm:justify-end',
        className
      )}
      {...props}
    />
  );
}

const dialogTitleVariants = cva('leading-none font-semibold', {
  variants: {
    size: {
      sm: 'text-base',
      default: 'text-lg',
      lg: 'text-xl',
      xl: 'text-2xl',
      modal: 'text-title-modal text-content-primary',
    },
  },
  defaultVariants: {
    size: 'default',
  },
});

function DialogTitle({
  className,
  size,
  ...props
}: DialogPrimitive.Title.Props & VariantProps<typeof dialogTitleVariants>) {
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={cn(dialogTitleVariants({ size }), className)}
      {...props}
    />
  );
}

const dialogDescriptionVariants = cva('text-muted-foreground', {
  variants: {
    size: {
      sm: 'text-xs',
      default: 'text-sm',
      lg: 'text-base',
      modal: 'text-paragraph-medium text-content-secondary',
    },
  },
  defaultVariants: {
    size: 'default',
  },
});

function DialogDescription({
  className,
  size,
  ...props
}: DialogPrimitive.Description.Props &
  VariantProps<typeof dialogDescriptionVariants>) {
  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      className={cn(dialogDescriptionVariants({ size }), className)}
      {...props}
    />
  );
}

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
  dialogContentVariants,
  dialogOverlayVariants,
  dialogHeaderVariants,
  dialogTitleVariants,
  dialogDescriptionVariants,
};
