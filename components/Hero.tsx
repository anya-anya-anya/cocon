"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full h-[70vh] flex items-center justify-center bg-orange-50">
      {/* 背景ロゴ */}
      <Image
        src="/cocon-logo.png"
        alt="Volunteer"
        fill
        className="object-contain opacity-90"
      />

      {/* 下部カード */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="
          absolute bottom-6 
          mx-auto 
          bg-white/90 
          backdrop-blur-sm 
          shadow-lg 
          p-6 
          rounded-xl 
          text-center 
          max-w-[90%] 
          md:max-w-xl
        "
      >
        <h1 className="text-3xl md:text-4xl font-bold text-orange-700">
          地域を笑顔に
        </h1>
        <p className="mt-3 text-orange-900 font-medium">
          困っている方へ、あたたかい手を。
        </p>
      </motion.div>
    </section>
  );
}
