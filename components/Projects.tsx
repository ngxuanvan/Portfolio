"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Award, Compass, Shield } from 'lucide-react';

const ProjectsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  const yParallax1 = useTransform(scrollYProgress, [0, 1], [-150, 150]);
  const yParallax2 = useTransform(scrollYProgress, [0, 1], [150, -150]);

  const projects = [
    {
      title: "VeriTrust Pro",
      summary: "Decentralized credential verification platform for issuing, managing, and verifying certificates in a secure, tamper-proof, and privacy-preserving way",
      problem: "Traditional certificates are vulnerable to forgery and lack a transparent verification mechanism",
      approach: "Built with Ethereum blockchain, Solidity smart contracts, and Web3.js for decentralized certificate issuance and verification",
      impact: "Tamper-proof credentials | Instant verification | Privacy-preserving | Transparent blockchain records",
      link: "https://github.com/atuljha-tech/VeriTrust-Pro",
      icon: Award,
      gradient: "from-primary via-primary-light to-primary",
      metrics: [
        { label: "Smart Contracts", value: "3+", color: "blue" },
        { label: "Blockchain", value: "Ethereum", color: "purple" },
        { label: "Security", value: "SHA-256", color: "pink" }
      ],
      tech: ["Solidity", "Web3.js", "Ethereum", "React", "IPFS"]
    },
    {
      title: "ForenChain",
      summary: "Full-stack decentralized web application ensuring integrity and immutability of forensic scan reports using Ethereum Blockchain and SHA-256 hashing",
      problem: "Cybersecurity evidence and forensic reports are vulnerable to tampering, compromising legal and investigative integrity",
      approach: "SHA-256 hashing + Ethereum blockchain storage + React frontend for secure forensic evidence management",
      impact: "Tamper-proof evidence | Verifiable chain of custody | Immutable records | Cybersecurity grade",
      link: "https://github.com/atuljha-tech/ForeChainWeb",
      icon: Shield,
      gradient: "from-primary via-primary to-primary-light",
      metrics: [
        { label: "Hashing", value: "SHA-256", color: "purple" },
        { label: "Network", value: "Ethereum", color: "pink" },
        { label: "Evidence", value: "100%", color: "blue" }
      ],
      tech: ["Solidity", "Ethereum", "SHA-256", "React", "Node.js"]
    },
    {
      title: "Jharkhand Tourism Guide",
      summary: "Smart Travel Assistant with AI chatbot, live weather updates, and interactive maps for exploring Jharkhand's waterfalls and natural wonders",
      problem: "Travelers lack a centralized platform with AI assistance for discovering and planning trips to Jharkhand's remote natural attractions",
      approach: "Next.js + MongoDB + Gemini AI for chatbot, integrated weather API, and interactive maps for seamless exploration",
      impact: "AI-powered travel assistant | Real-time weather | Interactive maps | 100+ attractions mapped",
      link: "https://jharkhandtourism-a3dh60lge-atuljha275-2203s-projects.vercel.app/",
      icon: Compass,
      gradient: "from-primary-light via-primary to-primary-light",
      metrics: [
        { label: "AI Chatbot", value: "Gemini", color: "pink" },
        { label: "Attractions", value: "100+", color: "blue" },
        { label: "Live Weather", value: "Real-time", color: "purple" }
      ],
      tech: ["Next.js", "MongoDB", "Gemini AI", "Tailwind", "Weather API"]
    }
  ];

  // Parallax effect on mouse move
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      setMousePosition({
        x: ((e.clientX - rect.left) / rect.width - 0.5) * 20,
        y: ((e.clientY - rect.top) / rect.height - 0.5) * 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="projects"
      className="relative py-16 md:py-20 px-6 overflow-hidden bg-gradient-to-b from-background via-card to-background"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orbs */}
        <motion.div 
          className="absolute top-40 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-pulse"
          style={{ x: mousePosition.x, y: yParallax1 }}
        />
        <motion.div 
          className="absolute bottom-40 -right-20 w-96 h-96 bg-primary-light/20 rounded-full blur-[100px] animate-pulse"
          style={{ x: -mousePosition.x, y: yParallax2 }}
        />

        {/* Grid pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(37, 99, 235, 0.06) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24 text-center"
        >
          <div className="inline-block mb-4">
            <span className="text-xs font-mono tracking-[0.3em] text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-light to-primary uppercase animate-pulse">
              • Real Projects •
            </span>
          </div>
          
          <h2 className="text-5xl sm:text-7xl font-black text-foreground mb-6 tracking-tight">
            Full Stack
            <span className="relative inline-block ml-4 text-primary-dark">
              Creations
            </span>
          </h2>

          <p className="text-subtext text-lg max-w-2xl mx-auto font-light">
            Case studies presented with problem, approach, and outcome for an ITBA-style portfolio
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="space-y-8 lg:space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <div className={`
                relative rounded-3xl overflow-hidden
                transform transition-all duration-500 ease-out
                ${activeIndex === index ? 'scale-[1.02]' : 'scale-100'}
              `}>
                {/* Card content */}
                <div className="relative overflow-hidden bg-card/80 backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-border/50 hover:bg-blue-50/50 hover:border-blue-200 transition-all duration-300">
                  {/* Top accent line */}
                  <div className={`
                    absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient} 
                    transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out
                  `} />
                  
                  <div className="relative">
                    {/* Card header with icon and title */}
                    <div className="flex items-start justify-between mb-8">
                      <div className="flex items-center gap-4">
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="block">
                          <div className={`
                            text-4xl w-16 h-16 rounded-2xl bg-gradient-to-br ${project.gradient} 
                            flex items-center justify-center shadow-md transform -rotate-6
                            group-hover:rotate-0 transition-transform duration-500 cursor-pointer
                          `}>
                            <project.icon className="w-8 h-8 text-white transform group-hover:scale-110 transition-transform duration-500" />
                          </div>
                        </a>
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-sm font-mono text-primary">
                                {(index + 1).toString().padStart(2, '0')}
                            </span>
                            <span className="w-8 h-px bg-gradient-to-r from-primary to-primary-light" />
                            <span className="text-xs text-subtext font-mono">PROJECT</span>
                          </div>
                          <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                            <h3 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
                              {project.title}
                            </h3>
                          </a>
                        </div>
                      </div>
                      
                      {/* Tech stack badges */}
                      <div className="hidden lg:flex gap-2">
                        {project.tech.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 text-xs font-semibold text-primary-dark bg-blue-100 rounded-full border border-blue-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Summary */}
                    <p className="text-lg text-foreground mb-10 border-l-4 border-gradient-to-b from-primary to-primary-light pl-6 font-light">
                      {project.summary}
                    </p>

                    {/* Metrics cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
                      {project.metrics.map((metric, i) => (
                        <div
                          key={i}
                          className="relative bg-border/30 rounded-xl p-4 overflow-hidden group/metric"
                        >
                          <div className={`
                            absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 
                            group-hover/metric:opacity-10 transition-opacity duration-500
                          `} />
                          <div className="relative">
                            <div className="text-xs text-subtext mb-1 font-mono">
                              {metric.label}
                            </div>
                            <div className={`
                              text-2xl font-bold text-primary
                            `}>
                              {metric.value}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Three-column details */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                      {/* Problem */}
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary-light" />
                          <span className="text-xs font-mono text-primary tracking-wider">
                            PROBLEM
                          </span>
                        </div>
                        <p className="text-sm leading-relaxed text-foreground">
                          {project.problem}
                        </p>
                      </div>

                      {/* Approach */}
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                          <span className="text-xs font-mono text-primary tracking-wider">
                            APPROACH
                          </span>
                        </div>
                        <p className="text-sm leading-relaxed text-foreground">
                          {project.approach}
                        </p>
                      </div>

                      {/* Impact */}
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary-light" />
                          <span className="text-xs font-mono text-primary tracking-wider">
                            IMPACT
                          </span>
                        </div>
                        <p className="text-sm leading-relaxed text-foreground">
                          {project.impact}
                        </p>
                      </div>
                    </div>

                    {/* Mobile tech stack (visible on mobile) */}
                    <div className="mt-8 flex flex-wrap gap-2 lg:hidden">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs font-semibold text-primary-dark bg-blue-100 rounded-full border border-blue-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Footer with project link */}
                    <div className="mt-8 pt-6 border-t border-border/50 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="flex -space-x-2">
                          {[1, 2, 3].map((i) => (
                            <div
                              key={i}
                              className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-primary-light opacity-60 border border-border"
                            />
                          ))}
                        </div>
                        <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-xs text-subtext font-mono hover:text-foreground transition-colors"
                        >
                          VIEW PROJECT →
                        </a>
                      </div>
                      <div className="flex gap-2">
                        <span className="text-[10px] px-2 py-1 rounded-full bg-border/40 text-subtext font-mono">ANALYSIS</span>
                        <span className="text-[10px] px-2 py-1 rounded-full bg-border/40 text-subtext font-mono">FLOW</span>
                        <span className="text-[10px] px-2 py-1 rounded-full bg-border/40 text-subtext font-mono">DATA</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 text-center"
        >
          <div className="inline-block group/cursor">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-primary-light to-primary rounded-full blur opacity-30 group-hover/cursor:opacity-100 transition duration-1000" />
              <a 
                href="https://github.com/ngxuanvan" 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative px-8 py-4 bg-card rounded-full text-foreground font-mono text-sm tracking-wider border border-border hover:border-transparent transition-all duration-500 inline-block"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <span>MORE ON GITHUB</span>
                  <span className="text-lg transform group-hover/cursor:translate-x-1 transition-transform">
                    →
                  </span>
                </span>
              </a>
            </div>
          </div>
          
          <p className="mt-8 text-xs text-subtext font-mono tracking-[0.3em]">
            • BLOCKCHAIN • CYBERSECURITY • AI • FULL STACK •
          </p>
        </motion.div>
      </div>

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
};

export default ProjectsSection;
