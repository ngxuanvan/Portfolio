"use client";
import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Briefcase, MonitorSmartphone, ShoppingBag } from 'lucide-react';

type ShowcaseItem = {
  category: "EXPERIENCE" | "PROJECT";
  title: string;
  role: string;
  companyOrClient: string;
  location: string;
  period: string;
  summary: string;
  problem: string;
  approach: string;
  impact: string;
  link: string;
  icon: React.ComponentType<{ className?: string }>;
  gradient: string;
  metrics: { label: string; value: string; color: string }[];
  tech: string[];
  tags: string[];
};

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

  const experienceItems: ShowcaseItem[] = [
    {
      category: "EXPERIENCE",
      title: "DUONG GIA PHAT TRADING AND TRADING CI., LTD.",
      role: "SEO Specialist (BA-oriented)",
      companyOrClient: "Marketing Tools",
      location: "Ho Chi Minh City, Vietnam",
      period: "06/2024 - 10/2024",
      summary: "Analyzed SEO performance and market signals to uncover user behavior patterns, business opportunities, and website improvement directions.",
      problem: "The business needed clearer visibility into search behavior, keyword demand, and how SEO performance could better support broader business goals.",
      approach: "Used Google Search Console, keyword research, and market analysis to identify patterns, monitor performance, and connect findings with content and website optimization.",
      impact: "Generated practical, data-driven insights that supported stronger visibility, better website performance, and more aligned optimization decisions.",
      link: "https://www.linkedin.com/in/xuanvan/",
      icon: Briefcase,
      gradient: "from-primary to-primary-light",
      metrics: [
        { label: "Role", value: "SEO", color: "blue" },
        { label: "Focus", value: "Analysis", color: "purple" },
        { label: "Period", value: "4 Months", color: "pink" }
      ],
      tech: ["Google Search Console", "Keyword Research", "Market Research", "Performance Analysis"],
      tags: ["EXPERIENCE", "SEO", "BA"]
    }
  ];

  const projectItems: ShowcaseItem[] = [
    {
      category: "PROJECT",
      title: "E-commerce Website (ASP.NET Core MVC) - dotnet.resip.io.vn",
      role: "Team Leader",
      companyOrClient: "dotnet.resip.io.vn",
      location: "Ho Chi Minh City, Vietnam",
      period: "01/2026 - 04/2026",
      summary: "Team-led e-commerce project built with ASP.NET Core MVC, where I contributed to requirement gathering, user flow definition, and feature coordination from analysis to testing.",
      problem: "The website needed clear functional requirements for core shopping flows such as product browsing, cart handling, checkout, and sandbox payment integration.",
      approach: "Gathered and documented requirements through user stories and BRD notes, defined system functions, designed key user flows, and worked closely with the development team during implementation and testing.",
      impact: "Created a clearer foundation for development, improved alignment between business needs and system features, and supported a more complete e-commerce experience.",
      link: "https://dotnet.resip.io.vn/",
      icon: MonitorSmartphone,
      gradient: "from-primary via-primary-light to-primary",
      metrics: [
        { label: "Role", value: "Leader", color: "blue" },
        { label: "Stack", value: "ASP.NET", color: "purple" },
        { label: "Focus", value: "Requirements", color: "pink" }
      ],
      tech: ["ASP.NET Core MVC", "User Stories", "BRD", "VNPAY / MoMo / PayPal"],
      tags: ["ASP.NET", "REQUIREMENTS", "TEAM LEAD"]
    },
    {
      category: "PROJECT",
      title: "E-commerce Website - dochoimohinh.com.vn",
      role: "Team Leader",
      companyOrClient: "dochoimohinh.com.vn",
      location: "Ho Chi Minh City, Vietnam",
      period: "08/2023 - 12/2023",
      summary: "Team-led WordPress e-commerce project focused on market analysis, requirement understanding, and building a structured online store around real business needs.",
      problem: "The project needed better understanding of market opportunities, user expectations, and website features that could support an effective e-commerce experience.",
      approach: "Performed market and competitor analysis, gathered user requirements, translated business needs into functional website features, and led implementation and deployment on WordPress.",
      impact: "Delivered a more structured and user-friendly storefront, while identifying performance improvement directions to support engagement and conversion potential.",
      link: "https://dochoimohinh.com.vn/",
      icon: ShoppingBag,
      gradient: "from-primary-light via-primary to-primary-light",
      metrics: [
        { label: "Platform", value: "WordPress", color: "pink" },
        { label: "Role", value: "Leader", color: "blue" },
        { label: "Focus", value: "Analysis", color: "purple" }
      ],
      tech: ["Market Analysis", "Competitor Analysis", "WordPress", "Functional Features"],
      tags: ["WORDPRESS", "ANALYSIS", "ECOMMERCE"]
    }
  ];

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

  const renderCard = (item: ShowcaseItem, index: number) => (
    <motion.div
      key={`${item.category}-${item.title}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
      onMouseEnter={() => setActiveIndex(index)}
      onMouseLeave={() => setActiveIndex(null)}
    >
      <div
        className={`
          relative rounded-3xl overflow-hidden
          transform transition-all duration-500 ease-out
          ${activeIndex === index ? 'scale-[1.02]' : 'scale-100'}
        `}
      >
        <div className="relative overflow-hidden bg-card/80 backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-border/50 hover:bg-blue-50/50 hover:border-blue-200 transition-all duration-300">
          <div
            className={`
              absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradient}
              transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out
            `}
          />

          <div className="relative">
            <div className="flex flex-col gap-6 mb-8 lg:flex-row lg:items-start lg:justify-between">
              <div className="flex items-start gap-4">
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="block">
                  <div
                    className={`
                      text-4xl w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient}
                      flex items-center justify-center shadow-md transform -rotate-6
                      group-hover:rotate-0 transition-transform duration-500 cursor-pointer
                    `}
                  >
                    <item.icon className="w-8 h-8 text-white transform group-hover:scale-110 transition-transform duration-500" />
                  </div>
                </a>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-sm font-mono text-primary">
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                    <span className="w-8 h-px bg-gradient-to-r from-primary to-primary-light" />
                    <span className="text-xs text-subtext font-mono">{item.category}</span>
                  </div>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mb-3 text-xs uppercase tracking-[0.25em] text-subtext hover:text-primary transition-colors"
                  >
                    {item.companyOrClient}
                  </a>
                  <h3 className="text-2xl lg:text-4xl font-bold text-foreground tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-lg font-semibold text-primary-dark">{item.role}</p>
                </div>
              </div>

              <div className="lg:text-right">
                <p className="text-sm font-medium text-foreground">{item.location}</p>
                <p className="text-sm text-subtext mt-1">{item.period}</p>
              </div>
            </div>

            <p className="text-lg text-foreground mb-10 pl-6 border-l-4 border-primary font-light">
              {item.summary}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
              {item.metrics.map((metric) => (
                <div
                  key={`${item.title}-${metric.label}`}
                  className="relative bg-border/30 rounded-xl p-4 overflow-hidden group/metric"
                >
                  <div
                    className={`
                      absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0
                      group-hover/metric:opacity-10 transition-opacity duration-500
                    `}
                  />
                  <div className="relative">
                    <div className="text-xs text-subtext mb-1 font-mono">{metric.label}</div>
                    <div className="text-2xl font-bold text-primary">{metric.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-light" />
                  <span className="text-xs font-mono text-primary tracking-wider">PROBLEM</span>
                </div>
                <p className="text-sm leading-relaxed text-foreground">{item.problem}</p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span className="text-xs font-mono text-primary tracking-wider">APPROACH</span>
                </div>
                <p className="text-sm leading-relaxed text-foreground">{item.approach}</p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-light" />
                  <span className="text-xs font-mono text-primary tracking-wider">IMPACT</span>
                </div>
                <p className="text-sm leading-relaxed text-foreground">{item.impact}</p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {item.tech.map((tech) => (
                <span
                  key={`${item.title}-${tech}`}
                  className="px-3 py-1 text-xs font-semibold text-primary-dark bg-blue-100 rounded-full border border-blue-200"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-border/50 flex items-center justify-between gap-4">
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-subtext font-mono hover:text-foreground transition-colors"
              >
                VIEW DETAILS →
              </a>
              <div className="flex flex-wrap justify-end gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={`${item.title}-${tag}`}
                    className="text-[10px] px-2 py-1 rounded-full bg-border/40 text-subtext font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative py-16 md:py-20 px-6 overflow-hidden bg-gradient-to-b from-background via-card to-background"
    >
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-40 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-pulse"
          style={{ x: mousePosition.x, y: yParallax1 }}
        />
        <motion.div
          className="absolute bottom-40 -right-20 w-96 h-96 bg-primary-light/20 rounded-full blur-[100px] animate-pulse"
          style={{ x: -mousePosition.x, y: yParallax2 }}
        />

        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(37, 99, 235, 0.06) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <div className="inline-block mb-4">
            <span className="text-xs font-mono tracking-[0.3em] text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-light to-primary uppercase animate-pulse">
              • Experience & Projects •
            </span>
          </div>

          <h2 className="text-5xl sm:text-7xl font-black text-foreground mb-6 tracking-tight">
            Experience
            <span className="relative inline-block ml-4 text-primary-dark">& Projects</span>
          </h2>

          <p className="text-subtext text-lg max-w-3xl mx-auto font-light">
            Hands-on experience and selected e-commerce projects presented through role, context, and contribution.
          </p>
        </motion.div>

        <div className="mb-8">
          <div className="flex items-center gap-4 mb-8">
            <span className="w-12 h-px bg-gradient-to-r from-primary to-primary-light" />
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">Experience</h3>
          </div>
          <div className="space-y-8">
            {experienceItems.map((item, index) => renderCard(item, index))}
          </div>
        </div>

        <div className="mt-16">
          <div className="flex items-center gap-4 mb-8">
            <span className="w-12 h-px bg-gradient-to-r from-primary to-primary-light" />
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">Projects</h3>
          </div>
          <div className="space-y-8 lg:space-y-12">
            {projectItems.map((item, index) => renderCard(item, experienceItems.length + index))}
          </div>
        </div>

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
            • EXPERIENCE • REQUIREMENTS • USER FLOW • E-COMMERCE •
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
