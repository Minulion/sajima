"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer ref={ref} className="bg-background border-t border-border">
      {/* Newsletter Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="container mx-auto px-6 py-20 border-b border-border"
      >
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h3 className="text-3xl md:text-4xl font-mono font-bold tracking-tight text-foreground">
            Stay Connected
          </h3>
          <p className="text-muted-foreground">
            Be the first to know about new drops and exclusive offers.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 h-14 px-6 bg-muted border-0 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground"
            />
            <Button
              size="lg"
              className="h-14 px-8 text-sm uppercase tracking-widest font-medium bg-foreground text-background hover:bg-foreground/90"
            >
              Subscribe
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Footer Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="text-3xl font-mono font-bold tracking-tighter text-foreground">
              HEUN
            </Link>
            <p className="text-muted-foreground max-w-sm">
              Premium Korean streetwear. Minimal design. Maximum impact.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Instagram className="size-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Twitter className="size-5" />
              </Link>
            </div>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-widest text-foreground font-medium">
              Shop
            </p>
            <nav className="flex flex-col gap-3">
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Essential Tee
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Size Guide
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Care Instructions
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <p className="text-sm uppercase tracking-widest text-foreground font-medium">
              Support
            </p>
            <nav className="flex flex-col gap-3">
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Shipping & Returns
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact Us
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                FAQ
              </Link>
            </nav>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 HEUN. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link href="#" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
