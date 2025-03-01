"use client";

import * as React from "react";

import { Progress } from "@/components/ui/progress";

export function AnimatedProgressBar() {
  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const handleIncrement = (prev: number) => {
      if (prev === 100) {
        return 0;
      }
      return prev + 12;
    };
    setProgress(handleIncrement);
    const interval = setInterval(() => setProgress(handleIncrement), 150);
    return () => clearInterval(interval);
  }, []);

  return <Progress value={progress} className="w-[60%]" />;
}
