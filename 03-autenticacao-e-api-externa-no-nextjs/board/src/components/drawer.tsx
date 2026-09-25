"use client";

import { useRouter } from "next/navigation";
import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

import { DrawerContent, Drawer as DrawerRoot } from "@/components/ui/drawer";

type DrawerProps = Omit<ComponentProps<typeof DrawerContent>, "className"> & {
  className?: string;
};

export function Drawer({ children, className, ...props }: DrawerProps) {
  const router = useRouter();

  function handleOpenChange(open: boolean) {
    if (!open) {
      router.back();
    }
  }

  return (
    <DrawerRoot
      defaultOpen
      onOpenChange={handleOpenChange}
      swipeDirection="right"
    >
      <DrawerContent
        className={twMerge(
          "fixed right-0 top-0 z-60 h-full w-full max-w-135 overflow-y-auto border-l border-navy-700 bg-navy-950 text-navy-50",
          className,
        )}
        {...props}
      >
        {children}
      </DrawerContent>
    </DrawerRoot>
  );
}
