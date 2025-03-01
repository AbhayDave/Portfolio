"use client";
import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { TerminalDemo } from "./Terminal";
import { OrbitingCirclesDemo } from "./OrbitingCircles";
import { AnimatedProgressBar } from "./AnimatedProgressBar";

const Preloader = () => {
  const [isFirstComponentVisible, setIsFirstComponentVisible] = useState(true);
  const [isSecondComponentVisible, setIsSecondComponentVisible] = useState(false);

  useEffect(() => {
    const secondComponentTimer = setTimeout(() => {
      setIsFirstComponentVisible(false);
      setIsSecondComponentVisible(true);
    }, 2000);

    return () => {
      clearTimeout(secondComponentTimer);
    };
  }, []);

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

export default Preloader;
