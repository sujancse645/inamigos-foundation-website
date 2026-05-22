"use client";

import { HTMLMotionProps, motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  glowColor?: "primary" | "secondary" | "accent" | "none";
}

export function GlassCard({
  children,
  className,
  glowColor = "none",
  ...props
}: GlassCardProps) {
  const glowClasses = {
    primary: "hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] dark:hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]",
    secondary: "hover:shadow-[0_0_30px_rgba(14,165,233,0.3)] dark:hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]",
    accent: "hover:shadow-[0_0_30px_rgba(245,158,11,0.3)]",
    none: "",
  };

  return (
    <motion.div
      className={cn(
        "glass rounded-2xl p-6 transition-all duration-300",
        glowClasses[glowColor],
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}
