"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "2026", label: "Founded" },
  { value: "100%", label: "Premium Materials" },
];
const info = [
  { value: "Limited Pieces", label: "No Restocks" },
  { value: "Global Influence", label: "Seoul X Madison" },
];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="relative py-32 bg-foreground text-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Brand Story */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.3em] text-background/60 font-mono">
                Our Story
              </p>
              <h2 className="text-4xl md:text-5xl font-mono font-bold tracking-tight">
                Born in KOR/USA
              </h2>
            </div>
            
            <div className="space-y-6 text-background/80 leading-relaxed">
              <p>
                SAJIMA (사지마) means &quot;do not buy&quot; in Korean. We believe that fashion is not
                just a purchase, but an identity. Everything you wear contains a piece of you that's
                carried wherever you go. Not something you buy, something you are.
              </p>
              <p>
                Founded in the heart of Madison&apos;s teeming multicultural campus, we&apos;ve dedicated 
                ourselves to creating meaningful designs that represent our Korean and American roots. 
                Inspired by the viral blend of language-learning and music, the HAJIMA tee captures the
                moment where cultural exchange becomes expression. It reflects a fusion of identities and
                the confidence to take inspiration while forging your own path.
              </p>
            </div>

            {/* Korean text accent */}
            <div className="pt-4">
              <p className="text-6xl md:text-7xl font-bold opacity-20 tracking-tighter">
                사지마
              </p>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="grid grid-cols-2 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="border border-background/20 p-8"
              >
                <p className="text-4xl md:text-5xl font-mono font-bold mb-2">
                  {stat.value}
                </p>
                <p className="text-sm uppercase tracking-widest text-background/60">
                  {stat.label}
                </p>
              </motion.div>
            ))}
            {info.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="border border-background/20 p-8"
              >
                <p className="text-xl md:text-2xl font-mono font-bold mb-2">
                  {stat.value}
                </p>
                <p className="text-sm uppercase tracking-widest text-background/60">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
