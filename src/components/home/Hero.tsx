"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { getImageDimensions } from "@/lib/image-dimensions";

const HERO_IMAGE = "/proyectos/this-is-the-way-i-want-to-remember-my-life/12.jpg";

export function Hero() {
  const { width, height } = getImageDimensions(HERO_IMAGE);

  return (
    <section className="relative h-[100svh] w-full overflow-hidden bg-foreground">
      <Image
        src={HERO_IMAGE}
        alt=""
        width={width}
        height={height}
        priority
        quality={90}
        sizes="100vw"
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-black/45 to-transparent" />

      <div className="absolute inset-x-0 top-0 pt-24 sm:pt-28">
        <div className="px-6 sm:px-10 lg:px-16 xl:px-24">
          <motion.h1
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-[240px] text-[11px] uppercase leading-relaxed tracking-[0.18em] text-white/80 sm:max-w-xs"
          >
            Estilismo — Dirección de Imagen — Consultoría Creativa
          </motion.h1>
        </div>
      </div>
    </section>
  );
}
