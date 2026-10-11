"use client";

import { motion } from "@/components/ui/motion";

export default function HeroBackground() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 overflow-hidden"
    >
      {/* Blue Glow */}
      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, -40, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 18,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-[-8rem]
          top-[-6rem]
          h-[28rem]
          w-[28rem]
          rounded-full
          bg-blue-600/20
          blur-[120px]
        "
      />

      {/* Cyan Glow */}
      <motion.div
        animate={{
          x: [0, -70, 0],
          y: [0, 60, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 22,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="
          absolute
          right-[-10rem]
          bottom-[-10rem]
          h-[32rem]
          w-[32rem]
          rounded-full
          bg-cyan-500/20
          blur-[150px]
        "
      />

      {/* Grid */}
      <div
        className="
          absolute
          inset-0
          bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)]
          bg-[size:40px_40px]
          [mask-image:radial-gradient(circle_at_center,black,transparent_90%)]
        "
      />
    </div>
  );
}
