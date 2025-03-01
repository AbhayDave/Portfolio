"use client";
import { useEffect, useState } from "react";
import FirstTimePreloader from "@/components/FirstTimePreloader";
import HomeSection from "@/components/sections/Home";
import { NavigationDock } from "@/components/NavigationDock";

export default function Home() {
  const [isFirstVisit, setIsFirstVisit] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("visited");
    if (hasVisited) {
      setIsFirstVisit(false);
    } else {
      sessionStorage.setItem("visited", "true");
    }

    setTimeout(() => {
      setIsLoading(false);
    }, 9000); 
  }, []);

  if (isLoading && isFirstVisit) {
    return <FirstTimePreloader />;
  }

  return (
    <>
      <NavigationDock />
      <main className="flex flex-col min-h-[100dvh] space-y-8 py-10">
        <HomeSection />
      </main>
    </>
  );
}