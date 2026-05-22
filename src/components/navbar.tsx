"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X, Heart } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { AnimatedButton } from "./ui/animated-button";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Internships", href: "/internships" },
  { name: "Gallery", href: "/gallery" },
  { name: "Dashboard", href: "/dashboard" },
  { name: "Volunteer", href: "/volunteer" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "glass border-b border-border shadow-sm py-3" : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-secondary flex items-center justify-center text-white shadow-lg group-hover:shadow-[0_0_20px_rgba(16,185,129,0.5)] transition-all">
              <span className="font-bold font-heading text-lg">IA</span>
            </div>
            <span className="font-heading font-bold text-xl tracking-tight">
              InAmigos
              <span className="text-primary"> Foundation</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative px-4 py-2 rounded-full text-sm font-medium transition-colors hover:text-primary"
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-nav"
                      className="absolute inset-0 bg-primary/10 rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <ThemeToggle />
            <AnimatedButton size="sm" icon={Heart} href="/donate" className="bg-amber-500 hover:bg-amber-600 text-white border-none shadow-[0_0_15px_rgba(245,158,11,0.4)]">
              Donate Now
            </AnimatedButton>
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center space-x-4 lg:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-foreground focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-full left-0 w-full glass border-b border-border shadow-lg lg:hidden"
        >
          <div className="flex flex-col p-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "px-4 py-3 rounded-xl font-medium transition-colors",
                  pathname === link.href
                    ? "bg-primary/10 text-primary"
                    : "hover:bg-card/80 text-foreground"
                )}
              >
                {link.name}
              </Link>
            ))}
            <AnimatedButton className="w-full mt-4 justify-center" icon={Heart} href="/donate">
              Donate Now
            </AnimatedButton>
          </div>
        </motion.div>
      )}
    </header>
  );
}
