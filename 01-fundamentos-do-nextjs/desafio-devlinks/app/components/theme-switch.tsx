"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { Switch } from "@/components/ui/switch";
import { MoonIcon } from "./icons/moon-icon";
import { SunIcon } from "./icons/sun-icon";

const emptySubscribe = () => () => { };

export function ThemeSwitch() {
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
  const { resolvedTheme, setTheme } = useTheme();

  if (!mounted) return null;

  const isLight = resolvedTheme === "light";

  return (
    <Switch
      checked={isLight}
      onCheckedChange={(checked) => setTheme(checked ? "light" : "dark")}
      aria-label="Alternar tema"
    >
      {isLight ? <SunIcon size={12} /> : <MoonIcon size={12} />}
    </Switch>
  );
}
