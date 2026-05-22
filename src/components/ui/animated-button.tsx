"use client";

import { HTMLMotionProps, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import Link from "next/link";
import * as React from "react";

// Create a motion component from Next.js Link
const MotionLink = motion.create(Link);

interface AnimatedButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
  size?: "sm" | "md" | "lg";
  href?: string;
  target?: string;
  rel?: string;
}

export function AnimatedButton({
  children,
  className,
  variant = "primary",
  icon: Icon,
  iconPosition = "right",
  size = "md",
  href,
  ...props
}: AnimatedButtonProps) {
  const baseStyles = "relative inline-flex items-center justify-center font-medium transition-colors overflow-hidden rounded-full z-10 cursor-pointer";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-primary/90 shadow-[0_0_15px_rgba(16,185,129,0.4)] dark:shadow-[0_0_15px_rgba(6,182,212,0.4)]",
    secondary: "bg-secondary text-white hover:bg-secondary/90 shadow-[0_0_15px_rgba(14,165,233,0.4)]",
    outline: "border-2 border-primary text-primary hover:bg-primary/10",
    ghost: "text-foreground hover:bg-foreground/5",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const content = (
    <>
      {(variant === "primary" || variant === "secondary") && (
        <span className="absolute inset-0 -z-10 bg-white/20 opacity-0 transition-opacity hover:opacity-100" />
      )}
      
      {Icon && iconPosition === "left" && (
        <Icon className="mr-2 h-5 w-5" />
      )}
      <span>{children}</span>
      {Icon && iconPosition === "right" && (
        <Icon className="ml-2 h-5 w-5" />
      )}
    </>
  );

  const combinedClasses = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    // For external links, use a standard motion.a tag
    if (href.startsWith("http") || href.startsWith("mailto") || href.startsWith("tel")) {
      return (
        <motion.a
          href={href}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={combinedClasses}
          {...(props as any)}
        >
          {content}
        </motion.a>
      );
    }

    return (
      <MotionLink
        href={href}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={combinedClasses}
        {...(props as any)}
      >
        {content}
      </MotionLink>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={combinedClasses}
      {...props}
    >
      {content}
    </motion.button>
  );
}
