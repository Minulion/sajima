"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-muted/40 via-background to-background" />

      <div className="relative z-10 container mx-auto px-6 pt-24 pb-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-6 items-center min-h-[80vh]">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-sm uppercase tracking-[0.3em] text-muted-foreground font-mono"
              >
                SS26 Collection
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-mono font-bold tracking-tighter leading-none text-foreground"
              >
                SAJIMA
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="text-lg md:text-xl text-muted-foreground max-w-md leading-relaxed"
              >
                Modern Korean-American streetwear bridging the cultural divide.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a href="https://undergroundshirts.com/groups/mhr-2026-spring-group-212" target="_blank">
                <Button
                  size="lg"
                  className="h-14 px-10 text-sm uppercase tracking-widest font-medium bg-foreground text-background hover:bg-foreground/90"
                >
                  Shop Now — $15/₩22,500
                </Button>
              </a>
              <a href="#product">
                <Button
                  variant="outline"
                  size="lg"
                  className="h-14 px-10 text-sm uppercase tracking-widest font-medium border-foreground/20 hover:bg-foreground/5"
                >
                  View Details
                </Button>
              </a>
            </motion.div>
          </motion.div>

          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 60 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Decorative ring */}
              <div className="absolute inset-0 border border-border/30 rounded-full scale-110" />
              <div className="absolute inset-0 border border-border/20 rounded-full scale-125" />
              
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 w-full h-full"
              >
                <Image
                  src="/images/hero-tshirt2.png"
                  alt="SAJIMA HAJIMA Tee"
                  fill
                  className="object-contain"
                  priority
                />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="relative z-20 mt-10 flex justify-center lg:absolute lg:bottom-8 lg:left-1/2 lg:mt-0 lg:-translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-muted-foreground"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ArrowDown className="size-4" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
