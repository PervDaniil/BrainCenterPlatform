"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const AnimatedPrompt = ({ prompts }: { prompts: string[] }) => {
  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    setDisplayedText("");

    const prompt = prompts[index];
    let localCharIndex = -1;

    const typeInterval = setInterval(() => {
      setDisplayedText((prev) => prev + prompt[localCharIndex]);
      localCharIndex++;

      if (localCharIndex >= prompt.length) {
        clearInterval(typeInterval);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [index, prompts]);


  useEffect(() => {
    const cycleInterval = setInterval(() => {
      setIndex((i) => (i + 1) % prompts.length);
    }, 3000);

    return () => clearInterval(cycleInterval);
  }, [prompts]);

  return (
    <div className="h-6 text-muted-foreground overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -10 }}
          transition={{ duration: 0.4 }}
          className="text-base italic whitespace-nowrap"
        >
          {displayedText}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
