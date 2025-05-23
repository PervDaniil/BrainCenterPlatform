"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { Menu, X, BrainIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "@/components/theme-toggle";
import SwitchLanguageButton from "./switch-language";
import { Button } from "@/components/ui/button";
import { useUser } from "@/hooks/useUser";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Courses", href: "/courses" },
  { name: "About", href: "/#about" },
  { name: "FAQ", href: "/#faq" },
  { name: "Quizes", href: "quiz/" },
];

export default function Navbar() {
  const user = useUser();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/95 backdrop-blur-sm border-b shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-2"
          >
            <Link href="/" className="flex items-center space-x-2">
              <BrainIcon className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">Brain Center</span>
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-8 lg:space-x-28">
            {navItems.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
              >
                <Link
                  href={item.href}
                  className="text-sm font-medium transition-colors hover:text-primary"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <ThemeToggle />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="hidden md:block"
            >
              <SwitchLanguageButton />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="hidden md:block"
            >
              <Link href="/dashboard">
                <Button>{user ? 'Dashboard' : 'Sign in'}</Button>
              </Link>
            </motion.div>

            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t"
          >
            <div className="bg-background/95 backdrop-blur-sm px-4 py-5 space-y-4">
              <div className="w-full flex items-center justify-end">
                <SwitchLanguageButton />
              </div>
              {navItems.map((item, i) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block py-2 text-sm font-medium transition-colors hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  <p className="pl-2">{item.name}</p>
                </Link>
              ))}
              <Link href="/dashboard" onClick={() => setIsOpen(false)}>
                <Button className="my-4 w-full"><p>{user ? 'Dashboard' : 'Login'}</p></Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}