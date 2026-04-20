'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import {
    Sparkles,
    Briefcase,
    BarChart3,
    BookOpen,
    Linkedin,
    Mail,
    ClipboardList,
    Workflow,
    Network,
    Database
} from 'lucide-react'
import { useEffect } from 'react'
import Image from 'next/image'


export default function HeroSection() {
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    const springConfig = { damping: 25, stiffness: 200 }
    const mouseXSpring = useSpring(mouseX, springConfig)
    const mouseYSpring = useSpring(mouseY, springConfig)

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e
            const centerX = window.innerWidth / 2
            const centerY = window.innerHeight / 2
            mouseX.set((clientX - centerX) * 0.02)
            mouseY.set((clientY - centerY) * 0.02)
        }
        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [mouseX, mouseY])

    const rotateX = useTransform(mouseYSpring, [-20, 20], [5, -5])
    const rotateY = useTransform(mouseXSpring, [-20, 20], [-5, 5])

    const learningStack = [
        { icon: ClipboardList, label: 'Requirement Analysis', color: 'from-primary to-primary-light' },
        { icon: Workflow, label: 'Process Modeling', color: 'from-primary to-primary' },
        { icon: Network, label: 'System Thinking', color: 'from-primary-light to-primary-light' },
        { icon: Database, label: 'SQL', color: 'from-primary-light to-primary' },
    ]

    const socialLinks = [
        { icon: Linkedin, href: 'https://www.linkedin.com/in/xuanvan/', label: 'LinkedIn', color: 'from-primary to-primary' },
        { icon: Mail, href: 'mailto:nguyenxuanvan.work@gmail.com', label: 'Email', color: 'from-primary-light to-primary-light' },
    ]

    const floatingElements = [
        { Icon: ClipboardList, delay: 0, x: -200, y: -150, size: 20, color: 'text-primary/20' },
        { Icon: BarChart3, delay: 0.5, x: 220, y: -120, size: 24, color: 'text-primary/20' },
        { Icon: Workflow, delay: 1, x: -180, y: 180, size: 22, color: 'text-primary-light/20' },
        { Icon: Briefcase, delay: 1.5, x: 200, y: 150, size: 18, color: 'text-primary/20' },
        { Icon: BookOpen, delay: 2, x: -150, y: -200, size: 20, color: 'text-primary/20' },
        { Icon: Sparkles, delay: 2.5, x: 180, y: -180, size: 16, color: 'text-primary/20' },
    ]

    return (
        <section className="relative min-h-screen flex items-center justify-center px-6 py-28 overflow-hidden bg-gradient-to-b from-background via-card to-background" id="home">
            {/* Animated gradient orbs */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-20 -right-20 w-96 h-96 bg-primary-light/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl" />

                {/* Grid pattern */}
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, rgba(37, 99, 235, 0.06) 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                }} />
            </div>

            {/* Floating elements */}
            {floatingElements.map(({ Icon, delay, x, y, size, color }, index) => (
                <motion.div
                    key={index}
                    className={`absolute ${color}`}
                    initial={{ opacity: 0, x, y }}
                    animate={{
                        opacity: 0.5,
                        x: [x, x + 40, x - 30, x],
                        y: [y, y - 30, y + 40, y],
                    }}
                    transition={{
                        opacity: { duration: 1, delay },
                        x: { duration: 25, repeat: Infinity, ease: "linear" },
                        y: { duration: 30, repeat: Infinity, ease: "linear" },
                    }}
                >
                    <Icon size={size} />
                </motion.div>
            ))}

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="relative z-10 max-w-7xl mx-auto w-full"
            >
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-12 flex justify-center"
                >
                    <div className="relative group">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-primary-light to-primary rounded-full opacity-75 group-hover:opacity-100 blur transition duration-500" />
                        <div className="relative px-6 py-3 bg-card rounded-full border border-border flex items-center gap-3">
                            <Sparkles className="w-4 h-4 text-primary" />
                            <span className="text-sm font-medium text-foreground">
                                <span className="bg-gradient-to-r from-primary via-primary-light to-primary text-transparent bg-clip-text">
                                    Business Analysis Enthusiast
                                </span>
                            </span>
                        </div>
                    </div>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <motion.div
                        style={{
                            rotateX,
                            rotateY,
                            transformPerspective: 1000,
                        }}
                        className="text-left"
                    >
                        {/* Greeting */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="mb-4"
                        >
                            <span className="text-subtext text-lg font-light flex items-center gap-2">
                                <span className="w-8 h-px bg-gradient-to-r from-primary to-primary-light" />
                                Hi, I&apos;m
                            </span>
                        </motion.div>

                        {/* Name with animated gradient */}
                        <motion.h1
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="text-5xl md:text-7xl lg:text-8xl font-black mb-4"
                        >
                            <span className="bg-gradient-to-r from-primary via-primary-light to-primary text-transparent bg-clip-text bg-[length:200%_100%] animate-gradient">
                                Xuan Van 
                            </span>
                        </motion.h1>

                        {/* Role with typing effect */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="mb-6 flex items-center gap-3"
                        >
                            <Briefcase className="w-6 h-6 text-primary" />
                            <span className="text-xl md:text-2xl text-foreground font-light">
                                Aspiring Business Analyst Intern
                            </span>
                            <motion.div
                                animate={{ opacity: [1, 0] }}
                                transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
                                className="w-0.5 h-6 bg-gradient-to-r from-primary to-primary-light"
                            />
                        </motion.div>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="text-base md:text-lg text-black text-justify max-w-xl leading-relaxed mb-8"
                        >
                            E-commerce student experienced in building e-commerce websites with ASP.NET Core MVC and WordPress.
                            Basic knowledge of <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light font-semibold">requirement analysis</span> (User Stories, BRD),
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary font-semibold"> user flow design</span>, payment integration, and SEO/data analysis.
                            Seeking a Business Analyst Intern role to apply <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-primary-light font-semibold">analytical skills</span> and support business-technical solutions.
                        </motion.p>

                        {/* Learning Stack */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.7 }}
                            className="mb-8"
                        >
                            <p className="text-xs text-subtext font-mono mb-3 tracking-wider">
                                CURRENTLY EXPLORING
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                                {learningStack.map(({ icon: Icon, label, color }) => (
                                    <motion.div
                                        key={label}
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        className="relative group"
                                    >
                                        <div className={`absolute inset-0 bg-gradient-to-r ${color} rounded-lg opacity-0 group-hover:opacity-30 blur transition duration-300`} />
                                        <div className="relative h-full min-h-11 px-4 py-2 bg-card rounded-lg border border-border group-hover:border-transparent flex items-center gap-2 md:justify-center">
                                            <Icon className="w-4 h-4 text-primary" />
                                            <span className="text-sm font-medium text-foreground">{label}</span>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Social Links */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            className="flex items-center gap-4"
                        >
                            {socialLinks.map(({ icon: Icon, href, label, color }) => (
                                <motion.a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    className="relative group"
                                >
                                    <div className={`absolute inset-0 bg-gradient-to-r ${color} rounded-full opacity-0 group-hover:opacity-30 blur transition duration-300`} />
                                    <div className="relative w-12 h-12 rounded-full bg-card border border-border group-hover:border-transparent flex items-center justify-center">
                                        <Icon className="w-5 h-5 text-subtext group-hover:text-primary transition-colors" />
                                    </div>
                                </motion.a>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right Content - Profile Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="relative flex justify-center items-center"
                    >
                        <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                            {/* Animated rings */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30"
                            />
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-3 rounded-full border-2 border-dashed border-primary/30"
                            />
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-6 rounded-full border-2 border-dashed border-primary/30"
                            />

                            {/* Glowing background */}
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary-light/20 to-primary/20 rounded-full blur-3xl animate-pulse" />

                            {/* Image container */}
                            <div className="absolute inset-8 rounded-full overflow-hidden border-4 border-border/50 shadow-2xl">
                                <Image
                                    src="/nguyenxuanvan.jpg"
                                    alt="Xuan Van"
                                    fill
                                    sizes="(max-width: 1024px) 20rem, 24rem"
                                    className="object-cover object-[center_22%]"
                                    priority
                                />
                            </div>

                            {/* Floating badges */}
                            <motion.div
                                animate={{ y: [-5, 5, -5] }}
                                transition={{ duration: 3, repeat: Infinity }}
                                className="absolute -top-4 -right-4 px-4 py-2 bg-card rounded-full border border-border shadow-xl"
                            >
                                <span className="text-sm font-medium flex items-center gap-2">
                                    <Workflow className="w-4 h-4 text-primary" />
                                    <span className="bg-gradient-to-r from-primary to-primary-light text-transparent bg-clip-text">Business Analysis</span>
                                </span>
                            </motion.div>

                            <motion.div
                                animate={{ y: [5, -5, 5] }}
                                transition={{ duration: 4, repeat: Infinity }}
                                className="absolute -bottom-4 -left-4 px-4 py-2 bg-card rounded-full border border-border shadow-xl"
                            >
                                <span className="text-sm font-medium flex items-center gap-2">
                                    <Database className="w-4 h-4 text-primary" />
                                    <span className="bg-gradient-to-r from-primary to-primary text-transparent bg-clip-text">SQL</span>
                                </span>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="relative group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-light rounded-full opacity-0 group-hover:opacity-30 blur transition duration-300" />
                        <div className="relative w-10 h-16 border-2 border-border rounded-full flex justify-center cursor-pointer"
                            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
                            <motion.div
                                animate={{ height: [6, 20, 6], y: [2, 0, 2] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="w-1.5 bg-gradient-to-r from-primary to-primary-light rounded-full mt-2"
                            />
                        </div>
                    </motion.div>
                </motion.div>
            </motion.div>

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
