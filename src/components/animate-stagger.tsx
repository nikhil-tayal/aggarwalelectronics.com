"use client";

import { motion } from "framer-motion";

type AnimateStaggerProps = {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
};

export function AnimateStagger({
  children,
  className,
  staggerDelay = 0.05,
}: AnimateStaggerProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        visible: {
          transition: { staggerChildren: staggerDelay },
        },
        hidden: {},
      }}
    >
      {children}
    </motion.div>
  );
}

export function AnimateStaggerItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 20 },
      }}
      transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
}
