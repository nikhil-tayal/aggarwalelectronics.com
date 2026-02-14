"use client";

import { motion } from "framer-motion";

type AnimateInProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  once?: boolean;
};

const variants = {
  up: { opacity: 0, y: 24 },
  down: { opacity: 0, y: -24 },
  left: { opacity: 0, x: 24 },
  right: { opacity: 0, x: -24 },
};

const inViewVariants = {
  up: { opacity: 1, y: 0 },
  down: { opacity: 1, y: 0 },
  left: { opacity: 1, x: 0 },
  right: { opacity: 1, x: 0 },
};

export function AnimateIn({
  children,
  className,
  delay = 0,
  direction = "up",
  once = true,
}: AnimateInProps) {
  return (
    <motion.div
      className={className}
      initial={variants[direction]}
      whileInView={inViewVariants[direction]}
      viewport={{ once, margin: "-50px" }}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.4, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
}
