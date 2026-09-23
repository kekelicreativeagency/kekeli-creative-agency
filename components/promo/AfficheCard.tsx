"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AfficheCard({ src, alt }: { src: string; alt: string }) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-border cursor-pointer"
      style={{ boxShadow: "var(--shadow-md)" }}
    >
      <motion.div
        className="absolute inset-0"
        whileHover={{ scale: 1.06 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <Image src={src} alt={alt} fill sizes="(max-width: 640px) 100vw, 400px" className="object-cover" />
      </motion.div>
    </motion.div>
  );
}
