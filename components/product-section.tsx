"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const sizes = ["S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"];

const features = [
  "100% Preshrunk Cotton",
  "Taped Neck and Shoulders",
  "Classic Fit",
  "Double-Stitched Seams",
  "Tearaway Label for Comfort",
  "Made in Madison, WI",
];

export function ProductSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedSize, setSelectedSize] = useState("M");

  return (
    <section id="product" ref={ref} className="relative py-32 bg-card">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative aspect-[4/5] bg-muted/30">
              <Image
                src="/images/product.png"
                alt="SAJIMA HAJIMA Tee"
                fill
                className="object-cover grayscale"
              />
            </div>
            
            {/* Price tag overlay */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute -bottom-6 -right-6 bg-foreground text-background p-6"
            >
              <p className="text-xs uppercase tracking-widest text-background/60">Price</p>
              <p className="text-3xl font-mono font-bold">$15.00</p>
            </motion.div>
          </motion.div>

          {/* Product Details */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground font-mono">
                SS26 Collection
              </p>
              <h2 className="text-4xl md:text-5xl font-mono font-bold tracking-tight text-foreground">
                The HAJIMA Tee
              </h2>
              <p className="text-muted-foreground leading-relaxed max-w-md">
                Inspired by Korea, designed in the USA. Crafted for the youth worldwide. Our signature tee 
                combines cultural trends with premium materials and an affordable price.
              </p>
            </div>

            {/* Size Selector */}
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-widest text-foreground">Offered In</p>
              <div className="flex flex-wrap gap-3">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-14 h-14 border text-sm font-medium transition-all ${
                      selectedSize === size
                        ? "bg-foreground text-background border-foreground"
                        : "border-border hover:border-foreground text-foreground"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-3">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <Check className="size-4 text-foreground" />
                  {feature}
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="https://undergroundshirts.com/groups/mhr-2026-spring-group-212/gildan-heavy-cotton-basic-t-shirt-white" target="_blank">
                <Button
                  size="lg"
                  className="h-14 px-10 text-sm uppercase tracking-widest font-medium bg-foreground text-background hover:bg-foreground/90 flex-1"
                >
                  Add to Cart
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
