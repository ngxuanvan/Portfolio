'use client';

import { useState, useRef } from 'react';
import { 
  Mail, 
  Linkedin, 
  Github, 
  FileText,
  Phone,
  Send, 
  Sparkles, 
  CheckCircle, 
  ArrowRight, 
  Clock, 
  Users, 
  ClipboardList,
  Briefcase,
  ExternalLink,
  MapPin
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('xuanvan.info@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const contactMethods = [
    {
      id: 'email',
      icon: Mail,
      label: 'Email',
      value: 'xuanvan.info@gmail.com',
      href: 'mailto:xuanvan.info@gmail.com',
      gradient: 'from-blue-100 to-blue-200',
      description: 'Send me a message',
      action: copyEmail
    },
    {
      id: 'phone',
      icon: Phone,
      label: 'Phone',
      value: '0383937939',
      href: 'tel:0383937939',
      gradient: 'from-blue-100 to-blue-200',
      description: 'Call or message directly'
    },
    {
      id: 'github',
      icon: Github,
      label: 'GitHub',
      value: '@ngxuanvan',
      href: 'https://github.com/ngxuanvan',
      gradient: 'from-blue-100 to-blue-200',
      description: 'Browse project work'
    },
    {
      id: 'linkedin',
      icon: Linkedin,
      label: 'LinkedIn',
      value: '/in/xuanvan',
      href: 'https://www.linkedin.com/in/xuanvan/',
      gradient: 'from-blue-100 to-blue-200',
      description: 'Connect professionally'
    },
    {
      id: 'resume',
      icon: FileText,
      label: 'Resume',
      value: 'ITBA Resume',
      href: '/atulfullstackresume.pdf',
      gradient: 'from-blue-100 to-blue-200',
      description: 'View my profile summary'
    }
  ];

  const stats = [
    { icon: Users, label: 'Team Collaboration', value: '5+', gradient: 'from-blue-100 to-blue-200' },
    { icon: ClipboardList, label: 'Case Studies', value: '3+', gradient: 'from-blue-100 to-blue-200' },
    { icon: Briefcase, label: 'Business Focus', value: 'ITBA', gradient: 'from-blue-100 to-blue-200' },
    { icon: Clock, label: 'Response Time', value: '<24h', gradient: 'from-blue-100 to-blue-200' }
  ];

  const quickResponses = [
    "I'll respond within 24 hours",
    "Open to collaboration",
    "Interested in ITBA opportunities",
    "Aspiring IT Business Analyst"
  ];

  // Fixed particles with deterministic values
  const particles = [...Array(12)].map((_, i) => {
    const top = (i * 17 + 5) % 90 + 5;
    const left = (i * 23 + 11) % 90 + 5;
    const duration = 8 + (i % 10);
    const opacity = 0.1 + ((i % 4) / 20);
    return { top, left, duration, opacity, key: i };
  });

  return (
    <section 
      ref={sectionRef}
      className="relative py-16 md:py-20 px-4 sm:px-6 overflow-hidden bg-gradient-to-b from-background via-card to-background"
      id="contact"
    >
      {/* Simple animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 -left-20 w-64 md:w-96 h-64 md:h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-40 -right-20 w-64 md:w-96 h-64 md:h-96 bg-primary-light/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />

        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(37, 99, 235, 0.1) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />

        <div className="hidden md:block absolute top-20 right-20 text-primary/10 text-4xl font-mono rotate-12">BPMN</div>
        <div className="hidden md:block absolute bottom-20 left-20 text-primary/10 text-4xl font-mono -rotate-12">SQL</div>

        {particles.map((p) => (
          <div
            key={p.key}
            className="absolute w-1 h-1 bg-gradient-to-r from-primary to-primary-light rounded-full"
            style={{
              top: `${p.top}%`,
              left: `${p.left}%`,
              animation: `float ${p.duration}s linear infinite`,
              opacity: p.opacity,
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
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-block mb-4">
            <span className="relative px-4 md:px-6 py-2 bg-card rounded-full border border-border inline-flex items-center gap-2">
              <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-primary" />
              <span className="text-[10px] md:text-xs font-mono tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-light to-primary">
                LET&apos;S CONNECT
              </span>
            </span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-foreground mb-4 md:mb-6 tracking-tight px-2">
            Get in 
            <span className="relative inline-block mx-2 md:mx-4 text-primary-dark">
              Touch
            </span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-subtext max-w-2xl mx-auto font-light px-4">
            Have a question, want to collaborate, or just want to say hi? 
            I&apos;d love to hear from you!
          </p>

          {/* Quick response badges */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mt-6 md:mt-8 px-2">
            {quickResponses.map((response, index) => (
              <div
                key={index}
                className="px-3 md:px-4 py-1.5 md:py-2 bg-card/50 backdrop-blur-sm rounded-full border border-border/50"
              >
                <span className="text-[10px] md:text-xs text-subtext font-mono">{response}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Stats cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-12 md:mb-16 px-2"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="group relative"
              >
                <div className="absolute inset-0 bg-blue-100/50 rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                <div className="relative bg-blue-50/50 backdrop-blur-sm rounded-xl md:rounded-2xl p-3 md:p-5 border border-blue-100 group-hover:border-transparent transition-all duration-300">
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className={`
                      w-8 h-8 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-gradient-to-r ${stat.gradient} 
                      flex items-center justify-center group-hover:scale-110 transition-transform duration-300
                    `}>
                      <Icon className="w-4 h-4 md:w-5 md:h-5 text-primary-dark" />
                    </div>
                    <div>
                      <div className="text-lg md:text-2xl font-bold text-foreground">{stat.value}</div>
                      <div className="text-[10px] md:text-xs text-subtext font-mono truncate">{stat.label}</div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* Main grid */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 px-2">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="relative bg-blue-50/50 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 border border-blue-100 overflow-hidden">
              {/* Top gradient line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-300 via-blue-200 to-blue-300 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out" />

              <div className="relative">
                <div className="flex items-center justify-between mb-4 md:mb-6">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground flex items-center gap-2">
                    Send a Message
                    <Send className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                  </h3>
                </div>
                
                  <p className="text-xs md:text-sm text-subtext mb-6 md:mb-8 border-l-2 border-primary-light/40 pl-3 md:pl-4 italic">
                  &quot;Strong analysis helps teams move from ambiguity to action.&quot;
                </p>

                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-4 py-3 md:py-4 bg-background rounded-xl border ${
                        focusedField === 'name' ? 'border-primary-light' : 'border-border'
                      } text-foreground placeholder-slate-600 focus:outline-none transition-all duration-300 text-sm md:text-base`}
                    />
                  </div>

                  <div className="relative">
                    <input
                      type="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-4 py-3 md:py-4 bg-background rounded-xl border ${
                        focusedField === 'email' ? 'border-primary-light' : 'border-border'
                      } text-foreground placeholder-slate-600 focus:outline-none transition-all duration-300 text-sm md:text-base`}
                    />
                  </div>

                  <div className="relative">
                    <textarea
                      placeholder="Your Message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-4 py-3 md:py-4 bg-background rounded-xl border ${
                        focusedField === 'message' ? 'border-primary-light' : 'border-border'
                      } text-foreground placeholder-slate-600 focus:outline-none transition-all duration-300 resize-none text-sm md:text-base`}
                    />
                  </div>

                  <button
                    type="submit"
                    className="relative w-full group/btn overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary-light to-primary rounded-xl opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
                    <div className="relative px-6 py-3 md:py-4 bg-primary hover:bg-transparent rounded-xl border border-transparent hover:border-border transition-all duration-300">
                      <span className="text-white group-hover/btn:text-foreground font-semibold flex items-center justify-center gap-2 text-sm md:text-base">
                        {submitted ? (
                          <>
                            <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-primary-light" />
                            Message Sent!
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send className="w-3 h-3 md:w-4 md:h-4 group-hover/btn:translate-x-1 transition-transform" />
                          </>
                        )}
                      </span>
                    </div>
                  </button>
                </form>
              </div>
            </div>
          </motion.div>

          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4 md:space-y-6"
          >
            <div className="relative bg-blue-50/50 rounded-2xl md:rounded-3xl p-6 md:p-8 border border-blue-100/50 backdrop-blur-xl">
              <div className="flex items-center justify-between mb-4 md:mb-6">
                <h3 className="text-xl md:text-2xl font-bold text-foreground">Connect With Me</h3>
                <div className="flex items-center gap-1 md:gap-2">
                  <MapPin className="w-3 h-3 md:w-4 md:h-4 text-subtext" />
                  <span className="text-[10px] md:text-xs text-subtext font-mono">District 10, Ho Chi Minh City</span>
                </div>
              </div>
              
              <div className="space-y-3 md:space-y-4">
                {contactMethods.map((method) => (
                  <a
                    key={method.id}
                    href={method.id === 'email' ? '#' : method.href}
                    target={method.id !== 'email' ? '_blank' : undefined}
                    rel={method.id !== 'email' ? 'noopener noreferrer' : undefined}
                    onMouseEnter={() => setHoveredButton(method.id)}
                    onMouseLeave={() => setHoveredButton(null)}
                    className="group/btn relative block"
                    onClick={(e) => {
                      if (method.id === 'email') {
                        e.preventDefault();
                        method.action?.();
                      }
                    }}
                  >
                    <div className="relative p-3 md:p-4 bg-background rounded-xl md:rounded-2xl border border-border hover:border-transparent transition-all duration-300">
                      <div className="flex items-center gap-3 md:gap-4">
                        <div className={`
                          w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-gradient-to-r ${method.gradient} 
                          flex items-center justify-center flex-shrink-0
                        `}>
                          <method.icon className="w-4 h-4 md:w-5 md:h-5 text-primary-dark" />
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-1 md:gap-2 mb-0.5 md:mb-1">
                            <span className={`text-xs md:text-sm font-mono text-primary`}>
                              {method.label}
                            </span>
                            <span className="text-[8px] md:text-xs text-subtext">•</span>
                            <span className="text-[8px] md:text-xs text-subtext truncate">{method.description}</span>
                          </div>
                          <div className="text-sm md:text-base text-foreground font-medium flex items-center gap-2 truncate">
                            {method.value}
                            {method.id === 'email' && copied && (
                              <span className="text-[10px] md:text-xs text-primary-light">Copied!</span>
                            )}
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-1 md:gap-2 flex-shrink-0">
                          {hoveredButton === method.id && method.id !== 'email' && (
                            <ExternalLink className="w-3 h-3 md:w-4 md:h-4 text-subtext" />
                          )}
                          <ArrowRight className={`
                            w-4 h-4 md:w-5 md:h-5 text-subtext transition-all duration-300
                            ${hoveredButton === method.id ? 'translate-x-1 text-foreground' : ''}
                          `} />
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Availability status */}
              <div className="mt-4 md:mt-6 flex items-center gap-2 p-2 md:p-3 bg-blue-100/40 rounded-lg md:rounded-xl border border-blue-200/50">
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-primary-light rounded-full animate-pulse" />
                <span className="text-[10px] md:text-xs text-primary-dark font-mono truncate">OPEN TO INTERNSHIPS & COLLABORATION</span>
              </div>
            </div>

            {/* Quick Response Card */}
            <div className="relative p-4 md:p-6 bg-blue-50/50 backdrop-blur-sm rounded-xl md:rounded-2xl border border-blue-100">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="relative flex-shrink-0">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-r from-blue-100 to-blue-200 flex items-center justify-center">
                    <Clock className="w-5 h-5 md:w-6 md:h-6 text-primary-dark" />
                  </div>
                </div>
                
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm md:text-base text-foreground font-bold mb-1">Quick Response</h4>
                  <p className="text-xs md:text-sm text-subtext mb-2">I&apos;ll respond within 24 hours</p>
                  <div className="flex flex-wrap gap-1 md:gap-2">
                    <span className="text-[8px] md:text-xs px-2 py-1 bg-primary/10 text-primary rounded-full border border-primary-light/20">
                      Aspiring ITBA
                    </span>
                    <span className="text-[8px] md:text-xs px-2 py-1 bg-primary/10 text-primary rounded-full border border-primary-light/20">
                      Open to Work
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 md:mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 md:gap-4 p-3 md:p-4 bg-blue-50/50 rounded-xl md:rounded-2xl border border-blue-100 backdrop-blur-sm">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-gradient-to-r from-blue-100 to-blue-200 border-2 border-card flex items-center justify-center text-[8px] md:text-xs text-primary-dark font-bold"
                >
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <span className="text-xs md:text-sm text-subtext font-mono">ngxuanvan</span>
          </div>
          
          <p className="mt-4 md:mt-6 text-[10px] md:text-xs text-subtext font-mono tracking-wider">
            • ANALYSIS • DOCUMENTATION • COLLABORATION •
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
        
        @keyframes float {
          0% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
          100% { transform: translateY(0) translateX(0); }
        }
      `}</style>
    </section>
  );
}
