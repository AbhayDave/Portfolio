import { NavigationDock } from "@/components/NavigationDock";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <NavigationDock />
    </>
  );
}
