'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  BookOpen,
  Briefcase,
  ClipboardList,
  Database,
  Users,
  Workflow,
} from 'lucide-react';
interface Skill {
  name: string;
  status: 'applied' | 'practicing' | 'learning';
  evidence: string;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
  color: string;
}

export default function Skills() {
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);
  const categories: SkillCategory[] = [
    {
      title: 'Business Analysis',
      icon: (
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-primary-light/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <ClipboardList className="w-5 h-5 text-primary" />
        </div>
      ),
      color: 'from-primary to-primary-light',
      skills: [
        { name: 'Requirement Analysis', status: 'practicing', evidence: 'Break down needs into clear scope, priorities, and expected outcomes.' },
        { name: 'Stakeholder Understanding', status: 'learning', evidence: 'Working on asking better questions and capturing business context.' },
        { name: 'User Stories', status: 'learning', evidence: 'Practicing story format to express user needs and expected value.' },
        { name: 'Acceptance Criteria', status: 'learning', evidence: 'Learning to write testable conditions for business requirements.' },
        { name: 'Business Documentation', status: 'practicing', evidence: 'Summarize ideas into notes, structured briefs, and simple requirement docs.' },
      ],
    },
    {
      title: 'Process & Systems',
      icon: (
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <Workflow className="w-5 h-5 text-primary" />
        </div>
      ),
      color: 'from-primary to-primary',
      skills: [
        { name: 'Process Modeling', status: 'practicing', evidence: 'Map flows and break work into clearer step-by-step stages.' },
        { name: 'As-Is / To-Be Thinking', status: 'learning', evidence: 'Comparing current pain points with improved future workflows.' },
        { name: 'System Thinking', status: 'practicing', evidence: 'Connect users, process, data, and system behavior in one view.' },
        { name: 'Use Case Mapping', status: 'learning', evidence: 'Learning how to define actors, actions, and expected outputs.' },
        { name: 'Workflow Analysis', status: 'practicing', evidence: 'Review flow gaps, handoff issues, and inefficiencies in a process.' },
      ],
    },
    {
      title: 'Data & Reporting',
      icon: (
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-light/20 to-primary-light/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <Database className="w-5 h-5 text-primary" />
        </div>
      ),
      color: 'from-primary-light to-primary-light',
      skills: [
        { name: 'SQL Basics', status: 'practicing', evidence: 'Comfortable with filtering, sorting, joins, and simple query logic.' },
        { name: 'Excel / Sheets', status: 'practicing', evidence: 'Use formulas and tables to organize and review data clearly.' },
        { name: 'Data Interpretation', status: 'practicing', evidence: 'Look for trends, issues, and useful insights from small datasets.' },
        { name: 'KPI Awareness', status: 'learning', evidence: 'Building understanding of metrics tied to business performance.' },
        { name: 'Report Structuring', status: 'learning', evidence: 'Practicing how to present findings in concise business-friendly format.' },
      ],
    },
    {
      title: 'Tools & Documentation',
      icon: (
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <Briefcase className="w-5 h-5 text-primary" />
        </div>
      ),
      color: 'from-primary to-primary',
      skills: [
        { name: 'Jira', status: 'learning', evidence: 'Getting familiar with task tracking and workflow organization.' },
        { name: 'Confluence', status: 'learning', evidence: 'Learning to structure shared documentation and team knowledge.' },
        { name: 'Draw.io', status: 'practicing', evidence: 'Use diagrams to visualize flows, processes, and system relationships.' },
        { name: 'Figma', status: 'learning', evidence: 'Review interfaces and communicate ideas with simple visual references.' },
        { name: 'Presentation Decks', status: 'practicing', evidence: 'Summarize analysis into slides with clear business takeaways.' },
      ],
    },
    {
      title: 'Collaboration',
      icon: (
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-light/20 to-primary-light/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <Users className="w-5 h-5 text-primary" />
        </div>
      ),
      color: 'from-primary-light to-primary-light',
      skills: [
        { name: 'Communication', status: 'practicing', evidence: 'Explain ideas clearly in simple and structured language.' },
        { name: 'Presentation', status: 'practicing', evidence: 'Present findings and thoughts in a concise, readable format.' },
        { name: 'Teamwork', status: 'applied', evidence: 'Comfortable coordinating, contributing, and aligning with others.' },
        { name: 'Facilitation', status: 'learning', evidence: 'Improving at guiding discussions and keeping conversations focused.' },
        { name: 'Time Management', status: 'practicing', evidence: 'Balance study, project work, and deliverables with clear priorities.' },
      ],
    },
    {
      title: 'Learning Focus',
      icon: (
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-light/20 to-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <BookOpen className="w-5 h-5 text-primary" />
        </div>
      ),
      color: 'from-primary-light to-primary',
      skills: [
        { name: 'Agile / Scrum', status: 'learning', evidence: 'Learning sprint flow, backlog structure, and team delivery rhythm.' },
        { name: 'UAT Support', status: 'learning', evidence: 'Understanding how user validation supports better releases.' },
        { name: 'Business Case Thinking', status: 'learning', evidence: 'Building the habit of linking effort with value and impact.' },
        { name: 'Functional Understanding', status: 'practicing', evidence: 'Read features from both user needs and system behavior perspectives.' },
        { name: 'Continuous Improvement', status: 'practicing', evidence: 'Look for small workflow improvements and clearer ways to work.' },
      ],
    },
  ];

  // Parallax effect
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

  const getStatusColor = (status: 'applied' | 'practicing' | 'learning') => {
    switch (status) {
      case 'applied':
        return 'text-primary border border-primary-light/40 bg-primary/5';
      case 'practicing':
        return 'text-primary border border-primary-light/40 bg-primary/5 opacity-80';
      case 'learning':
        return 'text-primary border border-primary-light/40 bg-primary/5 opacity-60';
    }
  };

  const getStatusLabel = (status: 'applied' | 'practicing' | 'learning') => {
    switch (status) {
      case 'applied':
        return 'Applied';
      case 'practicing':
        return 'Practicing';
      case 'learning':
        return 'Learning';
    }
  };

  const getStatusIcon = (status: 'applied' | 'practicing' | 'learning') => {
    switch (status) {
      case 'applied':
        return 'A';
      case 'practicing':
        return 'P';
      case 'learning':
        return 'L';
    }
  };

  // Fixed particle positions
  const particles = [
    { top: 7, left: 12, duration: 8, opacity: 0.12 },
    { top: 23, left: 67, duration: 11, opacity: 0.15 },
    { top: 45, left: 23, duration: 9, opacity: 0.1 },
    { top: 72, left: 81, duration: 13, opacity: 0.18 },
    { top: 18, left: 43, duration: 10, opacity: 0.14 },
    { top: 63, left: 32, duration: 12, opacity: 0.11 },
    { top: 38, left: 76, duration: 8, opacity: 0.16 },
    { top: 84, left: 54, duration: 14, opacity: 0.13 },
    { top: 52, left: 9, duration: 9, opacity: 0.17 },
    { top: 91, left: 68, duration: 11, opacity: 0.12 },
    { top: 14, left: 88, duration: 10, opacity: 0.15 },
    { top: 69, left: 41, duration: 13, opacity: 0.1 },
    { top: 33, left: 19, duration: 8, opacity: 0.14 },
    { top: 57, left: 95, duration: 12, opacity: 0.16 },
    { top: 79, left: 27, duration: 9, opacity: 0.11 },
    { top: 26, left: 53, duration: 11, opacity: 0.13 },
    { top: 48, left: 72, duration: 14, opacity: 0.17 },
    { top: 94, left: 36, duration: 10, opacity: 0.12 },
    { top: 11, left: 47, duration: 8, opacity: 0.15 },
    { top: 82, left: 62, duration: 13, opacity: 0.1 },
  ];

  return (
    <section 
      ref={sectionRef}
      id="skills"
      className="relative py-12 md:py-18 px-6 overflow-hidden bg-gradient-to-b from-background via-card to-background"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orbs */}
        <div 
          className="absolute top-40 -left-20 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse"
          style={{ transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` }}
        />
        <div 
          className="absolute bottom-40 -right-20 w-80 h-80 bg-primary-light/20 rounded-full blur-3xl animate-pulse"
          style={{ transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)` }}
        />
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl"
          style={{ transform: `translate(calc(-50% + ${mousePosition.x}px), calc(-50% + ${mousePosition.y}px))` }}
        />

        {/* Grid pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(37, 99, 235, 0.06) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />

        {/* Floating particles */}
        {particles.map((particle, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-primary to-primary-light rounded-full"
            style={{
              top: `${particle.top}%`,
              left: `${particle.left}%`,
              animation: `float ${particle.duration}s linear infinite`,
              opacity: particle.opacity,
              filter: 'blur(1px)'
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="inline-block mb-4">
            <span className="text-xs font-mono tracking-[0.3em] text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-light to-primary uppercase animate-pulse">
              • My Skills •
            </span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground mb-6 tracking-tight">
            ITBA 
            <span className="relative inline-block ml-4 text-primary-dark">
              Toolkit
            </span>
          </h2>

          <p className="text-subtext text-lg max-w-2xl mx-auto font-light">
            Core capabilities I am building for an IT Business Analyst path
          </p>
        </motion.div>

        {/* Skills Grid - 3 columns on large screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
              onMouseEnter={() => setHoveredCategory(index)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <div className={`
                relative rounded-2xl overflow-hidden
                transform transition-all duration-500 ease-out
                ${hoveredCategory === index ? 'scale-105' : 'scale-100'}
              `}>
                {/* Card content */}
                <div className="relative overflow-hidden bg-card/80 backdrop-blur-xl rounded-2xl p-6 border border-border/50 hover:border-blue-200 hover:bg-blue-50/50 transition-all duration-300">
                  {/* Top gradient line */}
                  <div className={`
                    absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${category.color} 
                    transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out
                  `} />

                  <div className="relative">
                    {/* Category Header */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`
                        relative transform -rotate-6 group-hover:rotate-0 transition-all duration-500
                      `}>
                        {/* Icon background glow */}
                        <div className={`
                          absolute inset-0 bg-gradient-to-r ${category.color} rounded-xl 
                          opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-500
                        `} />
                        {category.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-foreground tracking-tight">
                          {category.title}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          <div className={`w-1 h-1 rounded-full bg-gradient-to-r ${category.color}`} />
                          <span className="text-xs text-subtext font-mono">
                            {category.skills.length} SKILLS
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Skills List */}
                    <div className="space-y-3">
                      {category.skills.map((skill) => (
                        <div
                          key={skill.name}
                          className="group/skill relative p-4 rounded-xl bg-border/20 border border-border/50 hover:bg-blue-50 hover:border-blue-200 transition-all duration-300"
                        >
                          <div className="relative space-y-3">
                            <div className="flex items-start justify-between gap-3">
                              <div className="min-w-0">
                                <span className="text-sm font-medium text-foreground block">
                                  {skill.name}
                                </span>
                                <p className="mt-1 text-xs leading-relaxed text-subtext">
                                  {skill.evidence}
                                </p>
                              </div>

                              <div className="flex items-center gap-2 flex-shrink-0">
                                <span className="text-xs opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300">
                                  {getStatusIcon(skill.status)}
                                </span>
                                <span className={`
                                  text-xs px-2 py-1 rounded-full font-medium
                                  ${getStatusColor(skill.status)}
                                `}>
                                  {getStatusLabel(skill.status)}
                                </span>
                              </div>
                            </div>

                            <div className="flex flex-wrap gap-2">
                              <span className="text-[10px] px-2 py-1 rounded-full bg-card border border-border/60 text-subtext font-mono">
                                EVIDENCE
                              </span>
                              <span className="text-[10px] px-2 py-1 rounded-full bg-card border border-border/60 text-subtext font-mono">
                                ITBA
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Category footer with stats */}
                    <div className="mt-6 pt-4 border-t border-border/50 flex items-center justify-between">
                      <div className="flex -space-x-2">
                        {category.skills.slice(0, 3).map((skill, i) => (
                          <div
                            key={i}
                            className={`
                              w-6 h-6 rounded-full bg-gradient-to-r ${category.color} 
                              flex items-center justify-center text-xs border-2 border-card
                              transform hover:scale-110 transition-transform
                            `}
                            style={{ zIndex: 3 - i }}
                          >
                            {skill.name.charAt(0)}
                          </div>
                        ))}
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-subtext font-mono">
                          {category.skills.filter((skill) => skill.status === 'applied').length} APPLIED
                        </div>
                        <div className="text-[10px] text-subtext font-mono">
                          {category.skills.filter((skill) => skill.status === 'practicing').length} PRACTICING
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Status scale */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 flex justify-center"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-6 p-4 bg-card/50 rounded-2xl border border-border/50 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-primary" />
              <span className="text-xs text-subtext font-mono">APPLIED</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-primary opacity-80" />
              <span className="text-xs text-subtext font-mono">PRACTICING</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-primary opacity-60" />
              <span className="text-xs text-subtext font-mono">LEARNING</span>
            </div>
          </div>
        </motion.div>

        {/* Learning journey note */}
        <div className="mt-12 text-center">
          <p className="text-xs text-subtext font-mono tracking-wider">
            • REQUIREMENTS • PROCESS • DATA • COLLABORATION •
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
        
        @keyframes float {
          0% {
            transform: translateY(0vh) translateX(0vw);
          }
          100% {
            transform: translateY(-100vh) translateX(10vw);
          }
        }
      `}</style>
    </section>
  );
}
