'use client';

import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Award } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Certificates() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);


  const certificates = [
    { id: 1, src: '/img1.jpeg', alt: 'Certificate 1' },
    { id: 2, src: '/img2.jpeg', alt: 'Certificate 2' },
    { id: 3, src: '/img3.jpeg', alt: 'Certificate 3' },
    { id: 4, src: '/img4.png', alt: 'Certificate 4' },
  ];

  const handlePrevious = () => {
    if (selectedImage === null) return;
    setSelectedImage(selectedImage === 0 ? certificates.length - 1 : selectedImage - 1);
  };

  const handleNext = () => {
    if (selectedImage === null) return;
    setSelectedImage(selectedImage === certificates.length - 1 ? 0 : selectedImage + 1);
  };

  return (
    <section 
      id="certificates"
      className="relative py-20 md:py-24 px-4 sm:px-6 overflow-hidden bg-gradient-to-b from-background via-card to-background"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2 animate-pulse" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary-light/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 animate-pulse" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header with quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Award className="w-4 h-4 text-primary/50" />
            <span className="text-xs font-mono tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-light to-primary">
              ACHIEVEMENTS
            </span>
            <Award className="w-4 h-4 text-primary/50" />
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-4 tracking-tight">
            My 
            <span className="relative inline-block ml-4 text-primary-dark">
              Certificates
            </span>
          </h2>

          <p className="text-sm text-subtext max-w-2xl mx-auto font-light italic">
            &quot;Learning never exhausts the mind.&quot;
          </p>
        </motion.div>

        {/* Certificate Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative cursor-pointer"
              onClick={() => setSelectedImage(index)}
            >
              {/* Hover glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-primary to-primary-light rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500" />
              
              {/* Certificate card */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-card/80 backdrop-blur-sm border border-border/50 hover:border-transparent transition-colors duration-300">
                <Image
                  src={cert.src}
                  alt={cert.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* View indicator */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="px-3 py-1.5 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                    <span className="text-xs text-foreground">Click to view</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal Popup */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/90 backdrop-blur-xl" />
          
          {/* Modal content */}
          <div 
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top gradient bar */}
            <div className="absolute -top-0.5 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-primary-light to-primary rounded-t-2xl" />

            {/* Certificate image */}
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-card border border-border/50">
              <Image
                src={certificates[selectedImage].src}
                alt={certificates[selectedImage].alt}
                fill
                className="object-contain"
                priority
              />

              {/* Navigation buttons */}
              <button
                onClick={handlePrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 border border-white/10 flex items-center justify-center hover:bg-primary-light/20 hover:border-primary-light transition-all duration-300"
              >
                <ChevronLeft className="w-5 h-5 text-foreground" />
              </button>
              
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 border border-white/10 flex items-center justify-center hover:bg-primary-light/20 hover:border-primary-light transition-all duration-300"
              >
                <ChevronRight className="w-5 h-5 text-foreground" />
              </button>

              {/* Close button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 border border-white/10 flex items-center justify-center hover:bg-red-500/20 hover:border-red-500 transition-all duration-300"
              >
                <X className="w-5 h-5 text-foreground" />
              </button>

              {/* Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-black/50 backdrop-blur-md rounded-full border border-white/10">
                <span className="text-xs text-foreground">
                  {selectedImage + 1} / {certificates.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
}
