'use client';

import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Award, Eye, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Certificates() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);


  const certificates = [
    {
      id: 1,
      src: '/Certificate_What_is_Business_analyst.jpeg',
      alt: 'What is Business Analysis certificate',
      credentialUrl: 'https://www.linkedin.com/learning/certificates/22d7f1fa3235aadd9b46dc4aca0e526198e9c70098ebee219efbe5656641f088?trk=share_certificate',
    },
    {
      id: 2,
      src: '/Certificate_Business_Analyst_and_Project_Manager Collaboration.jpeg',
      alt: 'Business Analyst and Project Manager Collaboration certificate',
      credentialUrl: 'https://www.linkedin.com/learning/certificates/be1bbc7ee2a4458cc56f38ccc56119c7c98e7e50401b9aa47bf59330d97f59fd?trk=share_certificate',
    },
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
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
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

          <p className="text-sm text-subtext max-w-2xl mx-auto font-light">
            Validated learning milestones for my Business Analyst path.
          </p>
        </motion.div>

        {/* Certificate Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto gap-4 md:gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Hover glow */}
              <div className="pointer-events-none absolute -inset-2 bg-gradient-to-r from-primary to-primary-light rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500" />
              
              {/* Certificate card */}
              <div className="relative rounded-2xl overflow-hidden bg-card/80 backdrop-blur-sm border border-border/50 hover:border-primary-light/50 transition-colors duration-300">
                <div className="relative aspect-[1280/989]">
                  <Image
                    src={cert.src}
                    alt={cert.alt}
                    fill
                    sizes="(min-width: 768px) 576px, calc(100vw - 32px)"
                    className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                  />
                  
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500" />

                  <div className="absolute right-3 top-3 flex items-center gap-2">
                    <button
                      type="button"
                      onClick={(event) => {
                        event.stopPropagation();
                        setSelectedImage(index);
                      }}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-card/70 text-primary shadow-md shadow-slate-300/30 ring-1 ring-border/70 backdrop-blur-sm transition-colors hover:bg-card hover:text-primary-dark"
                      aria-label="View certificate"
                    >
                      <Eye className="h-4 w-4" />
                    </button>
                  </div>
                </div>

              </div>
              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(event) => event.stopPropagation()}
                className="relative z-20 mx-auto mt-4 flex w-[68%] min-w-56 items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/20 transition-colors hover:bg-primary-dark"
              >
                View Credential
                <ExternalLink className="h-4 w-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal Popup */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedImage(null)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />
          
          {/* Modal content */}
          <div 
            className="relative flex max-h-[calc(100vh-2rem)] w-full max-w-5xl flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-3 flex items-center justify-between gap-3">
              <div className="rounded-full bg-white px-3 py-1.5 text-xs font-medium text-slate-700 shadow-lg shadow-black/20">
                {selectedImage + 1} / {certificates.length}
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={certificates[selectedImage].credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 items-center gap-2 rounded-full bg-primary px-4 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/30 transition-colors hover:bg-primary-dark"
                >
                  Verify
                  <ExternalLink className="h-4 w-4" />
                </a>

                <button
                  onClick={() => setSelectedImage(null)}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-700 shadow-lg shadow-black/20 transition-colors hover:bg-red-50 hover:text-red-600"
                  aria-label="Close certificate preview"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Top gradient bar */}
            <div className="h-0.5 rounded-t-2xl bg-gradient-to-r from-primary via-primary-light to-primary" />

            {/* Certificate image */}
            <div className="relative aspect-[1280/989] max-h-[calc(100vh-7.5rem)] min-h-0 overflow-hidden rounded-b-2xl bg-card border border-border/50">
              <Image
                src={certificates[selectedImage].src}
                alt={certificates[selectedImage].alt}
                fill
                sizes="(min-width: 1024px) 1024px, calc(100vw - 32px)"
                className="object-contain object-center"
                priority
              />
            </div>

            {/* Navigation buttons */}
            {certificates.length > 1 && (
              <>
                <button
                  onClick={handlePrevious}
                  className="absolute -left-12 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-primary shadow-lg shadow-black/20 transition-colors hover:bg-primary hover:text-primary-foreground lg:flex"
                  aria-label="Previous certificate"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                
                <button
                  onClick={handleNext}
                  className="absolute -right-12 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-primary shadow-lg shadow-black/20 transition-colors hover:bg-primary hover:text-primary-foreground lg:flex"
                  aria-label="Next certificate"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </>
            )}

            {certificates.length > 1 && (
              <div className="mt-3 flex justify-center gap-2 lg:hidden">
                <button
                  onClick={handlePrevious}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-primary shadow-lg shadow-black/20 transition-colors hover:bg-primary hover:text-primary-foreground"
                  aria-label="Previous certificate"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-primary shadow-lg shadow-black/20 transition-colors hover:bg-primary hover:text-primary-foreground"
                  aria-label="Next certificate"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            )}
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
