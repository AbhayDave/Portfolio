"use client";
import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { TerminalDemo } from "./Terminal";
import { OrbitingCirclesDemo } from "./OrbitingCircles";
import { AnimatedProgressBar } from "./AnimatedProgressBar";
import { useLoading } from "@/context/LoadingContext";

const FirstTimePreloader = () => {
  const { isFirstVisit, markFirstVisitComplete } = useLoading();

  const [isFirstComponentVisible, setIsFirstComponentVisible] = useState(true);
  const [isSecondComponentVisible, setIsSecondComponentVisible] =
    useState(false);

  useEffect(() => {
    if (isFirstVisit) {
      // Timer to hide the first component after 8 seconds
      const hideFirstComponentTimer = setTimeout(() => {
        setIsFirstComponentVisible(false);
      }, 7500);

      // Timer to show the second component after a small delay
      const showSecondComponentTimer = setTimeout(() => {
        setIsSecondComponentVisible(true);
      }, 8000);

      // Timer to mark the first visit as complete after the second component's animation is done
      const markVisitCompleteTimer = setTimeout(() => {
        markFirstVisitComplete();
      }, 9000);

      // Cleanup timers
      return () => {
        clearTimeout(hideFirstComponentTimer);
        clearTimeout(showSecondComponentTimer);
        clearTimeout(markVisitCompleteTimer);
      };
    }
  }, [isFirstVisit, markFirstVisitComplete]);

  if (!isFirstVisit) return null;

  return (
    <div className="fixed inset-0 h-full flex items-center justify-center z-50 cursor-none">
      {isFirstComponentVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute w-1/3 h-auto"
        >
          <TerminalDemo />
        </motion.div>
      )}

      {isSecondComponentVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute w-11/12 max-w-2/3 h-auto flex flex-col items-center gap-10 p-5"
        >
          <OrbitingCirclesDemo />
          <AnimatedProgressBar />
        </motion.div>
      )}
    </div>
  );
};

export default FirstTimePreloader;
