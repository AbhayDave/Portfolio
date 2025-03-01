import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { PageTransitionLoader } from "@/components/PageTransitionLoader";
import RouteChangeHandler from "@/components/RouteChangeHandler";
import { GlobalProvider } from "@/components/Provider/GlobalProvider";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          `${inter.variable} min-h-screen bg-background font-sans select-none antialiased max-w-5xl mx-auto py-12 sm:py-24 px-6`
        )}
      >
        <GlobalProvider>
          {/* <RouteChangeHandler /> */}
          {children}
          {/* <PageTransitionLoader /> */}
        </GlobalProvider>
      </body>
    </html>
  );
}
