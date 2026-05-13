"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  Brain,
  ClipboardList,
  Database,
  FileText,
  HeartHandshake,
  Wrench,
} from "lucide-react";

type SkillCategory = {
  title: string;
  skills: string[];
  icon: React.ComponentType<{ className?: string }>;
};

const categories: SkillCategory[] = [
  {
    title: "Business Analysis",
    icon: ClipboardList,
    skills: [
      "Requirement Gathering",
      "User Stories",
      "Use Case Modeling",
      "User & System Flows",
      "E-commerce Process Analysis",
    ],
  },
  {
    title: "Documentation",
    icon: FileText,
    skills: [
      "BRD Documentation",
      "SRS Fundamentals",
      "Acceptance Criteria",
      "Process Flow Documentation",
    ],
  },
  {
    title: "Modeling & Technical Skills",
    icon: Database,
    skills: [
      "Draw.io",
      "SQL (Basic Querying)",
      "API Fundamentals",
      ".NET Fundamentals",
      "Logical Data Flow Thinking",
    ],
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    skills: ["Draw.io", "WordPress CMS"],
  },
  {
    title: "Soft Skills",
    icon: HeartHandshake,
    skills: [
      "Analytical Thinking",
      "Critical Thinking",
      "Communication",
      "Problem Solving",
      "Time Management",
      "Adaptability",
      "Self-Learning",
    ],
  },
  {
    title: "Interests",
    icon: BookOpen,
    skills: [
      "Business Analysis & System Design",
      "Product Development",
      "E-commerce Optimization",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-gradient-to-b from-background via-card to-background px-6 py-16 md:py-24"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-24 -left-20 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-24 -right-20 h-80 w-80 rounded-full bg-primary-light/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <div className="mb-4 inline-block">
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-light to-primary">
              Skills & Interests
            </span>
          </div>

          <h2 className="text-4xl font-black tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            ITBA
            <span className="relative ml-3 inline-block text-primary-dark">
              Toolkit
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-subtext md:text-lg">
            A focused skill set aligned with my CV and Business Analyst path.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => {
            const Icon = category.icon;

            return (
              <motion.article
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group rounded-2xl border border-border/70 bg-card/85 p-6 shadow-[0_18px_60px_rgba(15,23,42,0.07)] backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_24px_80px_rgba(37,99,235,0.12)]"
              >
                <div className="mb-5 flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-border bg-background text-primary shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:border-primary/30 group-hover:bg-primary/10">
                    <Icon className="h-5 w-5" />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold tracking-tight text-foreground">
                      {category.title}
                    </h3>
                    <p className="mt-1 text-xs font-mono text-subtext">
                      {category.skills.length} items
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => (
                    <span
                      key={`${category.title}-${skill}`}
                      className="rounded-full border border-border/70 bg-background/80 px-3.5 py-2 text-xs font-semibold text-foreground shadow-sm transition-all duration-300 group-hover:border-primary/20 group-hover:bg-primary/10 group-hover:text-primary"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 flex justify-center"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-border/70 bg-card/70 px-4 py-2 text-xs font-mono uppercase tracking-[0.18em] text-subtext backdrop-blur">
            <Brain className="h-4 w-4 text-primary" />
            BA skills only
          </div>
        </motion.div>
      </div>
    </section>
  );
}
