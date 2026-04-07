'use client'

import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { 
  Sparkles,
  Award,
  Users,
  ChevronRight,
  Brain,
  Briefcase,
  ClipboardList,
  GraduationCap,
  Medal,
  Github,
  Linkedin,
  Mail,
  Quote,
  Compass,
  Search,
  Star
} from 'lucide-react'

export default function About() {
  const sectionRef = useRef(null)
  const [rotatingText, setRotatingText] = useState(0)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })
  
  // Rotating text effect
  useEffect(() => {
    const interval = setInterval(() => {
      setRotatingText((prev) => (prev + 1) % 3)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const achievements = [
    { icon: GraduationCap, value: '8.9 CGPA', label: '1st Year', color: 'blue', emoji: '📚', description: 'Academic Excellence' },
    { icon: Medal, value: '95%', label: '10th Grade', color: 'purple', emoji: '🏆', description: 'School Topper' },
    { icon: Award, value: '91%', label: '12th Grade', color: 'pink', emoji: '🎓', description: 'Science Stream' },
    { icon: Users, value: '2028', label: 'Graduation', color: 'blue', emoji: '🚀', description: 'Batch of 2028' },
  ]

  const education = [
    {
      degree: 'Bachelor of E-commerce',
      institution: 'University of Economics HCMC',
      year: '2024 – 2026 (Expected)',
      score: '3.6/4.0',
      logo: '/logo-ueh.png',
      logoAlt: 'University of Economics HCMC logo',
      color: 'from-primary to-primary-light',
      highlights: [
        'E-commerce',
        'Digital Marketing',
        'Business Analysis',
        'Database Management',
        'Systems Analysis and Design',
      ]
    },
    {
      degree: 'Associate Degree in E-commerce',
      institution: 'FPT Polytechnic College',
      year: '2021 - 2024',
      score: '8.2/10 (≈ 3.3/4.0)',
      logo: '/FPT_Polytechnic.png',
      logoAlt: 'FPT Polytechnic College logo',
      color: 'from-primary to-primary',
      highlights: [
        'Digital Marketing',
        'E-commerce Business Strategy',
        'Marketing Research',
        'Integrated Marketing Communications',
        'SEO & Marketing Tools',
      ]
    }
  ]

  const journey = [
    {
      year: '2023',
      title: 'Built E-commerce Foundation',
      description: 'Developed an e-commerce website',
      icon: Briefcase,
      color: 'blue'
    },
    {
      year: '2024',
      title: 'Applied Data & Business Understanding',
      description: 'Worked as an SEO Specialist, analyzing user behavior and market trends',
      icon: Search,
      color: 'purple'
    },
    {
      year: '2025',
      title: 'Transitioned to Business Analysis',
      description: 'Focused on understanding user needs and business problems',
      icon: ClipboardList,
      color: 'pink'
    },
    {
      year: '2026',
      title: 'Developing IT Business Analysis',
      description: 'Participated in e-commerce projects, gathering requirements and designing user flows',
      icon: Compass,
      color: 'blue'
    }
  ]

  const philosophy = [
    {
      quote: "Code is poetry, but purpose is everything.",
      author: "— Nguyen Xuan Van"
    },
    {
      quote: "Build things that matter, solve problems that exist.",
      author: "— Personal Mantra"
    },
    {
      quote: "The best way to predict the future is to create it.",
      author: "— Peter Drucker"
    }
  ]

  const getAchievementIconColorClass = (color: string) => {
    // Avoid dynamic Tailwind classes like `text-${color}-400`.
    // Map all accents back to the brand palette.
    if (color === 'blue') return 'text-primary'
    return 'text-primary-light'
  }

  return (
    <section 
      ref={sectionRef}
      id="about"
      className="relative py-20 md:py-24 px-4 sm:px-6 overflow-hidden bg-gradient-to-b from-background via-card to-background"
    >
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-primary-light/5 rounded-full blur-3xl" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(37, 99, 235, 0.1) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header with unique animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-card/50 backdrop-blur-sm border border-border rounded-full mb-6"
          >
            <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-primary" />
            <span className="text-xs font-mono tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-light to-primary">
              INTRODUCTION
            </span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-foreground mb-4 tracking-tight">
            About
            <span className="relative inline-block ml-4">
              <span className="relative z-10 bg-gradient-to-r from-primary via-primary-light to-primary text-transparent bg-clip-text bg-[length:200%_100%] animate-gradient">
                Me
              </span>
              <motion.span 
                className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary via-primary-light to-primary rounded-full"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ delay: 0.8, duration: 0.8 }}
              />
            </span>
          </h2>
        </motion.div>

        {/* Introduction Card - Without Avatar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative group mb-16"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-primary-light to-primary rounded-3xl opacity-30 group-hover:opacity-50 blur-xl transition-opacity duration-700" />
          
          <div className="relative p-8 md:p-10 bg-card/90 backdrop-blur-sm rounded-3xl border border-border/50 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary/10 to-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-primary/10 to-primary-light/10 rounded-full blur-3xl" />
            
            <div className="relative">
              <div className="flex items-center gap-2 mb-3">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">Nguyen Xuan Van</h3>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs border border-primary-light/20">
                  Final-year E-commerce Student
                </span>
              </div>

              {/* Rotating text */}
              <div className="h-8 mb-4">
                <motion.p 
                  key={rotatingText}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5 }}
                  className="text-sm md:text-base text-foreground"
                >
                  <span className="text-primary mr-2">✦</span>
                  {rotatingText === 0 && "Aspiring IT Business Analyst Intern, bridging business and technology"}
                  {rotatingText === 1 && "Interested in analyzing user needs and understanding business processes"}
                  {rotatingText === 2 && "Focused on translating business needs into system-oriented solutions"}
                </motion.p>
              </div>

              <p className="text-base md:text-lg text-subtext leading-relaxed mb-6 max-w-3xl">
                E-commerce student with a proactive learning mindset and a focus on developing analytical thinking. Enjoys
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light font-semibold"> understanding problems</span>,
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary font-semibold"> thinking logically</span>, and improving
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-primary-light font-semibold"> analytical skills</span>.
              </p>

              {/* Social links */}
              <div className="flex gap-3">
                <a href="https://github.com/ngxuanvan" target="_blank" rel="noopener noreferrer" className="group">
                  <div className="w-10 h-10 rounded-xl bg-border/50 border border-border flex items-center justify-center hover:border-primary transition-all duration-300 hover:scale-110 hover:bg-primary/10">
                    <Github className="w-4 h-4 text-subtext group-hover:text-primary" />
                  </div>
                </a>
                <a href="https://www.linkedin.com/in/xuanvan/" target="_blank" rel="noopener noreferrer" className="group">
                  <div className="w-10 h-10 rounded-xl bg-border/50 border border-border flex items-center justify-center hover:border-primary transition-all duration-300 hover:scale-110 hover:bg-primary-light/10">
                    <Linkedin className="w-4 h-4 text-subtext group-hover:text-primary" />
                  </div>
                </a>
                <a href="mailto:nguyenxuanvan.work@gmail.com" className="group">
                  <div className="w-10 h-10 rounded-xl bg-border/50 border border-border flex items-center justify-center hover:border-primary transition-all duration-300 hover:scale-110 hover:bg-primary/10">
                    <Mail className="w-4 h-4 text-subtext group-hover:text-primary" />
                  </div>
                </a>
              </div>

              {/* Quote badge */}
              <div className="hidden md:block absolute bottom-4 right-8 opacity-20">
                <Quote className="w-16 h-16 text-primary" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Achievement Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${item.color === 'blue' ? 'from-primary/20 to-primary-light/20' : item.color === 'purple' ? 'from-primary/20 to-primary/20' : 'from-primary-light/20 to-primary-light/20'} rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500`} />
              
              <div className="relative p-5 bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 group-hover:border-transparent transition-all duration-300">
                <div className="flex items-start justify-between mb-3">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color === 'blue' ? 'from-primary/20 to-primary-light/20' : item.color === 'purple' ? 'from-primary/20 to-primary/20' : 'from-primary-light/20 to-primary-light/20'} flex items-center justify-center`}>
                    <item.icon className={`w-5 h-5 ${getAchievementIconColorClass(item.color)}`} />
                  </div>
                  <span className="text-xl transition-opacity">
                    {item.emoji}
                  </span>
                </div>
                
                <div className="text-2xl font-bold text-foreground mb-1">{item.value}</div>
                <div className="text-xs text-subtext mb-2">{item.label}</div>
                <div className="text-[10px] text-subtext">{item.description}</div>

                {/* Decorative line */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary-light to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Education & Journey Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h3 className="text-xl font-bold text-foreground flex items-center gap-2 mb-6">
              <GraduationCap className="w-5 h-5 text-primary" />
              <span className="bg-gradient-to-r from-primary to-primary-light text-transparent bg-clip-text">Education</span>
            </h3>

            <div className="space-y-5">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="group relative"
                >
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${edu.color} rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500`} />
                  
                  <div className="relative p-5 bg-card/30 backdrop-blur-sm rounded-2xl border border-border/50 group-hover:border-transparent transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${edu.color} p-[1px] shadow-sm flex-shrink-0`}>
                        <div className="h-full w-full rounded-[15px] bg-white/95 ring-1 ring-border/60 flex items-center justify-center overflow-hidden">
                          <Image
                            src={edu.logo}
                            alt={edu.logoAlt}
                            width={40}
                            height={40}
                            className="h-10 w-10 object-contain"
                          />
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1 gap-3">
                          <h4 className="text-foreground font-semibold">{edu.degree}</h4>
                          <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full border border-primary-light/20 whitespace-nowrap">
                            {edu.year}
                          </span>
                        </div>
                        <p className="text-sm text-subtext mb-2">{edu.institution}</p>
                        
                        <div className="flex items-center gap-2 mb-3">
                          <Star className="w-3 h-3 text-yellow-500" />
                          <span className="text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light">
                            GPA: {edu.score}
                          </span>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {edu.highlights.map((highlight, i) => (
                            <span key={i} className="text-[10px] px-2 py-1 bg-border rounded-full text-subtext">
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Journey Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h3 className="text-xl font-bold text-foreground flex items-center gap-2 mb-6">
              <Compass className="w-5 h-5 text-primary" />
              <span className="bg-gradient-to-r from-primary to-primary text-transparent bg-clip-text">My Journey</span>
            </h3>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary-light to-primary" />

              {journey.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="relative flex items-start gap-4 mb-6 last:mb-0"
                >
                  <div className="relative z-10">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${item.color === 'blue' ? 'from-primary to-primary-light' : item.color === 'purple' ? 'from-primary to-primary' : 'from-primary-light to-primary-light'} flex items-center justify-center`}>
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  <div className="flex-1 pt-1">
                    <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm font-mono text-primary">{item.year}</span>
                        <ChevronRight className="w-3 h-3 text-subtext" />
                    </div>
                      <h4 className="text-foreground font-medium mb-1">{item.title}</h4>
                      <p className="text-xs text-subtext">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Philosophy Card - Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="group relative max-w-3xl mx-auto"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary-light/10 to-primary/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur" />
          
          <div className="relative p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50">
            <div className="flex items-center gap-3 mb-4">
              <Brain className="w-5 h-5 text-primary" />
              <h4 className="text-foreground font-semibold">Guiding Philosophy</h4>
            </div>
            
            <div className="relative">
              <Quote className="absolute -top-2 -left-2 w-6 h-6 text-primary/20" />
              <p className="text-sm text-foreground italic pl-6">
                {philosophy[rotatingText].quote}
              </p>
              <p className="text-xs text-subtext mt-2 text-right">
                {philosophy[rotatingText].author}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Footer quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
          className="text-center mt-12"
        >
          <p className="text-xs text-subtext font-mono tracking-wider">
            • BUILDER • LEARNER • INNOVATOR •
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
  )
}
