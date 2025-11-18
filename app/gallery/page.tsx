"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  "/gallery/photo1.png",
  "/gallery/photo2.png",
  "/gallery/photo3.png",
  "/gallery/photo4.png",
  "/gallery/phptp5.png",
];

export default function GalleryPage() {
  return (
    <div className="max-w-5xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold mb-8 text-center">ギャラリー</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {images.map((src, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="rounded-lg overflow-hidden shadow"
          >
            <Image
              src={src}
              width={1000}
              height={700}
              alt={`gallery-${i}`}
              className="w-full h-auto"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
