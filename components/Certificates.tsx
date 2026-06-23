"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Maximize2 } from "lucide-react";
import { certificates } from "@/lib/data";

export const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<typeof certificates[0] | null>(null);

  return (
    <section id="certificates" className="border-t border-[#E8E6E1] bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="space-y-4 mb-16">
          <span className="font-mono text-xs text-[#6B6661]">
            08 / Professional Certifications
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1C1A17]">
            Certificates & Achievements
          </h2>
          <p className="text-[#6B6661] text-sm leading-relaxed font-sans max-w-sm">
            Validation of my skills and professional growth through internships and specialized training.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-[#FAF9F6] border border-[#E8E6E1] overflow-hidden flex flex-col"
            >
              <div className="aspect-[4/3] w-full relative overflow-hidden bg-[#E8E6E1]">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                />
                <div className="absolute top-4 left-4">
                  <span className="font-mono text-[9px] bg-[#1C1A17] text-[#FAF9F6] px-2.5 py-1">
                    {cert.field}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedCertificate(cert)}
                  className="absolute bottom-4 right-4 p-2 bg-[#FAF9F6]/90 backdrop-blur-sm border border-[#E8E6E1] text-[#1C1A17] opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[#1C1A17] hover:text-[#FAF9F6] cursor-pointer"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>

              <div className="p-6 space-y-3">
                <span className="font-mono text-[10px] text-[#6B6661]">
                  {cert.period}
                </span>
                <h3 className="font-serif text-xl text-[#1C1A17] group-hover:text-[#6B6661] transition-colors">
                  {cert.title}
                </h3>
                <p className="font-mono text-[11px] text-[#1C1A17]">
                  {cert.organization}
                </p>
                <p className="text-xs text-[#6B6661] leading-relaxed font-sans line-clamp-2">
                  {cert.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCertificate(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1C1A17]/90 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 30 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#FAF9F6] max-w-4xl w-full border border-[#E8E6E1] overflow-hidden relative"
            >
              <button
                onClick={() => setSelectedCertificate(null)}
                className="absolute top-4 right-4 z-10 p-2.5 bg-[#1C1A17] text-[#FAF9F6] hover:bg-stone-800 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex flex-col md:flex-row">
                <div className="md:w-3/5 bg-stone-50 p-6 flex items-center justify-center border-b md:border-b-0 md:border-r border-[#E8E6E1]">
                  <Image
                    src={selectedCertificate.image}
                    alt={selectedCertificate.title}
                    width={800}
                    height={600}
                    className="max-w-full max-h-[70vh] object-contain shadow-lg"
                  />
                </div>
                <div className="md:w-2/5 p-8 md:p-10 flex flex-col justify-center space-y-6">
                  <div>
                    <span className="font-mono text-xs text-[#6B6661] block mb-1">
                      {selectedCertificate.period}
                    </span>
                    <h3 className="font-serif text-2xl text-[#1C1A17]">
                      {selectedCertificate.title}
                    </h3>
                  </div>
                  <div className="space-y-2">
                    <p className="font-mono text-xs font-bold text-[#1C1A17]">
                      {selectedCertificate.organization}
                    </p>
                    <p className="font-mono text-[10px] text-[#6B6661]">
                      Field: {selectedCertificate.field}
                    </p>
                  </div>
                  <p className="text-sm text-[#6B6661] leading-relaxed font-sans">
                    {selectedCertificate.description}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
