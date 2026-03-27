"use client";

import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";

export function Header() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-6 bg-background/80 backdrop-blur-md border-b border-border/50"
    >
      <Link href="/" className="text-2xl md:text-3xl font-mono font-bold tracking-tighter text-foreground">
        HEUN
      </Link>

      <nav className="hidden md:flex items-center gap-10">
        <Link href="#product" className="text-sm uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors">
          Product
        </Link>
        <Link href="#lookbook" className="text-sm uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors">
          Lookbook
        </Link>
        <Link href="#about" className="text-sm uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors">
          About
        </Link>
      </nav>

      <button className="flex items-center gap-2 text-foreground hover:text-muted-foreground transition-colors">
        <ShoppingBag className="size-5" />
        <span className="text-sm font-medium hidden sm:inline">Cart (0)</span>
      </button>
    </motion.header>
  );
}
