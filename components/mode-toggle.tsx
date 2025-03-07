"use client";

import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      type="button"
      size="icon"
      className="px-1"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <Sun className="text-neutral-800 dark:hidden dark:text-neutral-200 size-7" />
      <Moon className="hidden text-neutral-800 dark:block dark:text-neutral-200 size-7" />
    </Button>
  );
}
