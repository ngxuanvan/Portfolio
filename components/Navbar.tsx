'use client';

import { useState, useEffect, useCallback } from 'react';
import { 
  Menu, 
  X, 
  ChevronRight, 
  Home, 
  User, 
  BarChart3, 
  Briefcase, 
  Mail,
  Award
} from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (!element) return;
    
    const lenis = window.__lenis;
    if (lenis) {
      lenis.scrollTo(element, { offset: 0, duration: 1.2 });
    } else {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active link based on scroll position
      const sections = ['home', 'about', 'projects', 'skills', 'certificates', 'contact'];
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveLink(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home', icon: Home, gradient: 'from-blue-100 to-blue-200' },
    { href: '#about', label: 'About', icon: User, gradient: 'from-blue-100 to-blue-200' },
    { href: '#projects', label: 'Projects', icon: Briefcase, gradient: 'from-blue-100 to-blue-200' },
    { href: '#skills', label: 'Skills', icon: BarChart3, gradient: 'from-blue-100 to-blue-200' },
    { href: '#certificates', label: 'Certificates', icon: Award, gradient: 'from-blue-100 to-blue-200' },
    { href: '#contact', label: 'Contact', icon: Mail, gradient: 'from-blue-100 to-blue-200' },
  ];

  // Fixed particles for navbar background
  const particles = scrolled ? [...Array(5)].map((_, i) => {
    const top = (i * 23 + 7) % 90 + 5;
    const left = (i * 17 + 13) % 90 + 5;
    const duration = 5 + i * 2;
    return { top, left, duration, key: i };
  }) : [];

  return (
    <>
      <nav className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-700
        ${scrolled 
          ? 'py-3 md:py-3 backdrop-blur-xl bg-background/80 shadow-2xl shadow-slate-300/30 border-b border-border/50' 
          : 'py-5 md:py-5 bg-transparent'
        }
      `}>
        {/* Animated gradient background with particles */}
        <div className="absolute inset-0 overflow-hidden">
          {particles.map((p) => (
            <div
              key={p.key}
              className="absolute w-1 h-1 bg-primary rounded-full opacity-30"
              style={{
                top: `${p.top}%`,
                left: `${p.left}%`,
                animation: `float ${p.duration}s ease-in-out infinite`
              }}
            />
          ))}
          <div className={`
            absolute inset-0 bg-primary/5
            transition-opacity duration-1000
            ${scrolled ? 'opacity-100' : 'opacity-0'}
          `} />
        </div>

        {/* Bottom border gradient */}
        <div className={`
          absolute bottom-0 left-0 right-0 h-px 
          bg-gradient-to-r from-transparent via-primary/50 via-primary-light/50 to-transparent
          transition-opacity duration-700
          ${scrolled ? 'opacity-100' : 'opacity-0'}
        `} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex justify-between items-center">
            {/* Clean Signature Logo - No subtitle, no green tick */}
            <a 
              href="#home"
              className="group relative block"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('home');
              }}
            >
              <div className="relative">
                <span className={`
                  text-2xl md:text-3xl font-bold transition-all duration-300 font-dancing text-primary
                  ${scrolled ? 'tracking-normal' : 'tracking-wide'}
                `}>
                  NX Van 
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="relative group/menu">
                {/* Background blur card */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary-light/10 to-primary/10 rounded-2xl blur-xl opacity-0 group-hover/menu:opacity-100 transition-opacity duration-500" />
                
                <div className="relative backdrop-blur-xl bg-card/40 rounded-2xl border border-border/50 p-1.5">
                  <div className="flex items-center gap-1">
                    {navLinks.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        className="relative group/link"
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToSection(link.href.substring(1));
                        }}
                      >
                        {/* Active/Highlight background */}
                        <div className={`
                          absolute inset-0 rounded-xl transition-all duration-300
                          ${activeLink === link.label.toLowerCase() 
                            ? `bg-gradient-to-r ${link.gradient} opacity-20` 
                            : 'opacity-0 group-hover/link:opacity-10'
                          }
                        `} />
                        
                        <div className="relative px-3 py-2 rounded-xl flex items-center gap-1.5">
                          {/* Icon */}
                          <div className={`
                            w-4 h-4 transition-all duration-300
                            ${activeLink === link.label.toLowerCase() 
                              ? 'text-foreground' 
                              : 'text-subtext group-hover/link:text-primary-dark'
                            }
                          `}>
                            <link.icon className="w-full h-full" />
                          </div>
                          
                          {/* Label */}
                          <span className={`
                            text-sm font-medium transition-all duration-300
                            ${activeLink === link.label.toLowerCase() 
                              ? 'text-foreground' 
                              : 'text-subtext group-hover/link:text-primary-dark'
                            }
                          `}>
                            {link.label}
                          </span>

                          {/* Active indicator */}
                          {activeLink === link.label.toLowerCase() && (
                            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-gradient-to-r from-primary to-primary-light" />
                          )}
                        </div>
                      </a>
                    ))}

                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative w-11 h-11 rounded-xl bg-card/50 backdrop-blur-xl border border-border hover:border-primary-light/50 transition-all duration-300 group"
              aria-label="Toggle menu"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary-light/10 to-primary/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              {isOpen ? (
                <X className="w-5 h-5 text-foreground absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              ) : (
                <Menu className="w-5 h-5 text-foreground absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`
            md:hidden fixed inset-x-4 top-20
            transition-all duration-500 transform
            ${isOpen 
              ? 'opacity-100 translate-y-0 scale-100' 
              : 'opacity-0 -translate-y-10 scale-95 pointer-events-none'
            }
          `}>
            <div className="relative">
              {/* Background */}
              <div className="absolute inset-0 bg-blue-50/50 rounded-3xl blur-xl" />
              <div className="absolute inset-0 backdrop-blur-xl bg-blue-50/90 rounded-3xl border border-blue-100/50" />
              
              {/* Animated border */}
              <div className="absolute inset-0 rounded-3xl p-[1px] bg-gradient-to-r from-primary-light via-blue-200 to-primary-light opacity-20" />
              
              <div className="relative p-5 space-y-2">
                {navLinks.map((link, index) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href.substring(1));
                    }}
                    className={`
                      group flex items-center gap-3 px-4 py-3 rounded-xl
                      transition-all duration-300
                      ${activeLink === link.label.toLowerCase() 
                        ? 'bg-blue-100/50 text-primary-dark font-semibold' 
                        : 'text-subtext hover:bg-blue-50/50'
                      }
                    `}
                    style={{
                      animation: isOpen ? `slideIn 0.4s ease-out ${index * 0.1}s forwards` : 'none',
                      opacity: 0,
                      transform: 'translateX(-10px)'
                    }}
                  >
                    <div className={`
                      w-9 h-9 rounded-lg bg-gradient-to-r ${link.gradient} 
                      flex items-center justify-center
                    `}>
                        <link.icon className="w-4 h-4 text-primary-dark" />
                    </div>

                    <div className="flex-1">
                      <div className="text-sm font-medium">{link.label}</div>
                    </div>

                    <ChevronRight className={`
                      w-4 h-4 transition-all duration-300
                      ${activeLink === link.label.toLowerCase() 
                        ? 'opacity-100 translate-x-0 text-foreground' 
                        : 'opacity-0 -translate-x-2'
                      }
                      group-hover:opacity-100 group-hover:translate-x-0
                    `} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer */}
      <div id="home" className="h-0" />



      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-8px) translateX(4px); }
        }
        
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </>
  );
}
