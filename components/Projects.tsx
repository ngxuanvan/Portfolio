"use client";

import React from "react";
import Image, { type StaticImageData } from "next/image";
import { motion, type Variants } from "framer-motion";
import {
  ArrowUpRight,
  CalendarDays,
  CheckCircle2,
  Code2,
  MapPin,
  SearchCheck,
} from "lucide-react";
import dotnetResipEpayment from "../dotnet_resip_epayment.png";

type PortfolioItem = {
  type: "Experience" | "Project";
  company: string;
  position: string;
  timeline: string;
  location: string;
  summary?: string;
  link?: string;
  linkLabel?: string;
  linkVariant?: "default" | "primary";
  liveDemo?: string;
  impacts: string[];
  skills: string[];
  previewImage?: StaticImageData;
  previewAlt?: string;
  icon: React.ComponentType<{ className?: string }>;
};

const items: PortfolioItem[] = [
  {
    type: "Experience",
    company: "Duong Gia Phat Trading Co., Ltd.",
    position: "SEO Specialist",
    timeline: "06/2024 - 10/2024",
    location: "Ho Chi Minh City, Vietnam",
    impacts: [
      "Improved SEO visibility through keyword and search performance analysis",
      "Conducted keyword research to identify search trends and content opportunities",
      "Identified user behavior patterns from Google Search Console data",
      "Supported optimization decisions with market and content insights",
    ],
    skills: [
      "Google Search Console",
      "Keyword Research",
      "SEO Analysis",
      "Market Research",
    ],
    icon: SearchCheck,
  },
  {
    type: "Project",
    company: "E-commerce Website (ASP.NET Core MVC)",
    position: "Technical Team Lead",
    timeline: "01/2026 - 04/2026",
    location: "Ho Chi Minh City, Vietnam",
    impacts: [
      "Participated in developing an e-commerce website using ASP.NET Core MVC",
      "Defined system scope and functionalities, including functional and non-functional requirements",
      "Designed user flows for key features such as product browsing, cart, and checkout",
      "Integrated payment gateways (VNPay, MoMo, PayPal) using API in sandbox environment",
      "Collaborated with the development team to implement and test system features",
    ],
    skills: [
      "ASP.NET Core MVC",
      "SQL Server",
      "User Flows",
      "Payment Integration",
    ],
    link: "https://github.com/ngxuanvan/ReSip-Multi-Payment-E-Commerce",
    linkLabel: "View Project",
    liveDemo: "https://dotnet.resip.io.vn/",
    previewImage: dotnetResipEpayment,
    previewAlt: "ReSip multi-payment e-commerce payment interface",
    icon: Code2,
  },
  {
    type: "Project",
    company: "E-commerce System Analysis & Design",
    position: "Business Analyst",
    timeline: "08/2025 - 12/2025",
    location: "Ho Chi Minh City, Vietnam",
    impacts: [
      "Analyzed current business process and identified key issues in manual sales operations",
      "Gathered and documented requirements (BRD, User Stories) through stakeholder analysis",
      "Designed system workflows using Use Case, Activity, and Sequence diagrams",
      "Developed ERD and system structure to support core e-commerce functionalities",
      "Responsible for order management and checkout-related analysis and diagrams",
    ],
    skills: [
      "BRD",
      "User Stories",
      "Use Case Diagram",
      "ERD",
    ],
    link: "https://www.nxvan.com/ba/ecommerce-system-analysis.pdf",
    linkLabel: "View Report",
    icon: Code2,
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

const experienceItems = items.filter((item) => item.type === "Experience");
const projectItems = items.filter((item) => item.type === "Project");

const WorkCard = ({
  item,
  index,
}: {
  item: PortfolioItem;
  index: number;
}) => {
  const Icon = item.icon;

  return (
    <motion.article
      key={item.company}
      variants={cardVariants}
      className="group relative"
    >
      <div className="rounded-[1.75rem] border border-border/80 bg-card/90 p-6 shadow-[0_20px_70px_rgba(15,23,42,0.08)] backdrop-blur transition-all duration-500 group-hover:-translate-y-1 group-hover:border-primary/25 group-hover:shadow-[0_28px_90px_rgba(37,99,235,0.14)] md:p-8 dark:shadow-[0_24px_80px_rgba(0,0,0,0.22)]">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex min-w-0 items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-border bg-background text-primary shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:border-primary/30 group-hover:bg-primary/10">
              <Icon className="h-5 w-5" />
            </div>

            <div className="min-w-0">
              <div className="mb-2 flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-primary/10 px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-primary">
                  {item.type}
                </span>
                <span className="font-mono text-xs text-subtext">
                  0{index + 1}
                </span>
              </div>

              <h3 className="text-2xl font-black tracking-tight text-foreground md:text-3xl">
                {item.company}
              </h3>
              <p className="mt-1 text-base font-semibold text-subtext">
                {item.position}
              </p>
            </div>
          </div>

          <div className="grid gap-2 text-sm text-subtext sm:grid-cols-2 lg:min-w-64 lg:grid-cols-1 lg:text-right">
            <div className="flex items-center gap-2 lg:justify-end">
              <CalendarDays className="h-4 w-4 text-primary" />
              <span>{item.timeline}</span>
            </div>
            <div className="flex items-center gap-2 lg:justify-end">
              <MapPin className="h-4 w-4 text-primary" />
              <span>{item.location}</span>
            </div>
          </div>
        </div>

        <div
          className={
            item.summary || item.previewImage
              ? "mt-8 grid gap-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(440px,0.78fr)] lg:items-start"
              : "mt-8"
          }
        >
          <div>
            {item.summary && (
              <p className="mb-6 max-w-2xl text-base leading-8 text-foreground md:text-lg">
                {item.summary}
              </p>
            )}

            <ul className="space-y-3">
              {item.impacts.map((impact) => (
                <li
                  key={impact}
                  className="flex gap-3 text-sm leading-6 text-subtext md:text-base"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{impact}</span>
                </li>
              ))}
            </ul>

            <div className="mt-7 flex flex-wrap gap-2.5">
              {item.skills.map((skill) => (
                <span
                  key={`${item.company}-${skill}`}
                  className="rounded-full border border-border/70 bg-background/80 px-3.5 py-2 text-xs font-semibold text-foreground shadow-sm transition-all duration-300 group-hover:border-primary/20 group-hover:bg-primary/10 group-hover:text-primary"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {item.previewImage && (
            <div className="relative overflow-hidden rounded-2xl border border-border/80 bg-white shadow-[0_18px_60px_rgba(15,23,42,0.12)] ring-1 ring-white/70 transition-all duration-500 group-hover:shadow-[0_24px_80px_rgba(37,99,235,0.16)] dark:bg-slate-950 dark:ring-white/5">
              <div className="flex h-9 items-center gap-1.5 border-b border-border/70 bg-background/80 px-4">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                <span className="ml-2 h-2 w-24 rounded-full bg-border/70" />
              </div>

              <div className="bg-white p-2 dark:bg-slate-950">
                <Image
                  src={item.previewImage}
                  alt={item.previewAlt ?? item.company}
                  sizes="(min-width: 1280px) 520px, (min-width: 1024px) 44vw, 100vw"
                  quality={100}
                  className="h-auto w-full rounded-xl object-contain transition-transform duration-500 group-hover:scale-[1.015]"
                />
              </div>
            </div>
          )}
        </div>

        {(item.link || item.liveDemo) && (
          <div className="mt-8 flex flex-wrap justify-end gap-3">
            {item.link && (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className={
                  item.linkVariant === "primary"
                    ? "inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/20"
                    : "inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2.5 text-sm font-semibold text-foreground shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:bg-primary/10 hover:text-primary hover:shadow-lg hover:shadow-primary/10"
                }
              >
                {item.linkLabel ?? "View Detail"}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            )}

            {item.liveDemo && (
              <a
                href={item.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/20"
              >
                Live Demo
                <ArrowUpRight className="h-4 w-4" />
              </a>
            )}
          </div>
        )}
      </div>
    </motion.article>
  );
};

const WorkGroup = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div>
    <div className="mb-6 flex items-center gap-4">
      <span className="h-px w-12 bg-gradient-to-r from-primary to-primary-light" />
      <h3 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
        {title}
      </h3>
    </div>

    <div className="space-y-6 md:space-y-8">{children}</div>
  </div>
);

const ProjectsSection: React.FC = () => {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-gradient-to-b from-background via-card to-background px-6 py-20 md:py-28"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55 }}
          className="mb-14 text-center md:mb-16"
        >
          <div className="mb-4 inline-block">
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-light to-primary">
              Experience & Projects
            </span>
          </div>

          <h2 className="text-4xl font-black tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Experience
            <span className="relative ml-3 inline-block text-primary-dark">
              & Projects
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-subtext md:text-lg">
            Hands-on experience and selected e-commerce projects presented
            through role, context, and contribution.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          className="relative"
        >
          <div className="space-y-14 md:space-y-16">
            <WorkGroup title="Experience">
              {experienceItems.map((item, index) => (
                <WorkCard key={item.company} item={item} index={index} />
              ))}
            </WorkGroup>

            <WorkGroup title="Projects">
              {projectItems.map((item, index) => (
                <WorkCard
                  key={item.company}
                  item={item}
                  index={index}
                />
              ))}
            </WorkGroup>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
