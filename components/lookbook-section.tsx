"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useCallback, useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const lookbookImages = [
  { src: "/images/model3.png", caption: "Model 3" },
  { src: "/images/model2.png", caption: "Model 2" },
  { src: "/images/model1.png", caption: "Model 1" },
  { src: "/images/model4.png", caption: "Model 4" },
  { src: "/images/model5.png", caption: "Model 5" },
];

export function LookbookSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!emblaApi) return;

    const autoplayInterval = window.setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);

    return () => {
      window.clearInterval(autoplayInterval);
    };
  }, [emblaApi]);

  return (
    <section id="lookbook" ref={ref} className="relative py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center space-y-4"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground font-mono">
            SS26 Lookbook
          </p>
          <h2 className="text-4xl md:text-6xl font-mono font-bold tracking-tight text-foreground">
            Worn Your Way
          </h2>
        </motion.div>
      </div>

      {/* Carousel */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {lookbookImages.map((image, index) => (
              <div
                key={index}
                className="flex-[0_0_55%] md:flex-[0_0_44%] lg:flex-[0_0_33%] min-w-0 pl-4 first:pl-0"
              >
                <motion.div
                  className={`relative aspect-[3/4] transition-all duration-500 ${
                    selectedIndex === index ? "scale-100" : "scale-90 opacity-50"
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.caption}
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-base uppercase tracking-widest text-foreground/80">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="container mx-auto px-6 mt-12">
          <div className="flex items-center justify-center gap-6">
            <Button
              variant="outline"
              size="icon"
              onClick={scrollPrev}
              className="size-14 border-foreground/20 hover:bg-foreground"
            >
              <ArrowLeft className="size-5" />
            </Button>
            
            <div className="flex items-center gap-2">
              {lookbookImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => emblaApi?.scrollTo(index)}
                  className={`h-1 transition-all duration-300 ${
                    selectedIndex === index
                      ? "w-8 bg-foreground"
                      : "w-2 bg-foreground/30"
                  }`}
                />
              ))}
            </div>
            
            <Button
              variant="outline"
              size="icon"
              onClick={scrollNext}
              className="size-14 border-foreground/20 hover:bg-foreground"
            >
              <ArrowRight className="size-5" />
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
