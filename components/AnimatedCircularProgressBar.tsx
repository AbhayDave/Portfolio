"use client";

import { useEffect, useState } from "react";

import { AnimatedCircularProgressCircle } from "./magicui/animated-circular-progress-bar";

interface AnimatedCircularProgressBarProps {
  className?: string;
}

export function AnimatedCircularProgressBar({
  className,
}: AnimatedCircularProgressBarProps) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const handleIncrement = (prev: number) => {
      if (prev === 100) {
        return 0;
      }
      return prev + 1;
    };
    setValue(handleIncrement);
    const interval = setInterval(() => setValue(handleIncrement), 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatedCircularProgressCircle
      max={100}
      min={0}
      value={value}
      gaugePrimaryColor="rgb(79 70 229)"
      className={className}
      gaugeSecondaryColor="rgba(0, 0, 0, 0.1)"
    />
  );
}
