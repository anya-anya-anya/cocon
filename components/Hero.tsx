"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full h-[60vh] flex items-center justify-center bg-orange-100">
      <Image
        src="/cocon-logo.png"
        alt="Volunteer"
        fill
        className="object-cover brightness-95"
      />
      <div className="absolute inset-0 bg-white/40" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative text-center"
      >
        <h1 className="text-4xl font-bold text-orange-700 drop-shadow">
          地域を笑顔に
        </h1>
        <p className="mt-4 text-lg text-orange-900 font-medium">
          困っている方へ、あたたかい手を。
        </p>
      </motion.div>
    </section>
  );
}
