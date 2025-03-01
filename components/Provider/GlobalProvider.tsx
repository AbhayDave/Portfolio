"use client";

import * as React from "react";
import { ThemeProvider } from "../theme-provider";
import { LoadingProvider } from "@/context/LoadingContext";

export function GlobalProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      disableTransitionOnChange
    >
      <LoadingProvider>{children}</LoadingProvider>
    </ThemeProvider>
  );
}
