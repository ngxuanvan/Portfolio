'use client';

import {
  Linkedin,
  Github,
  Mail,
  FileText,
  ChevronUp,
  MapPin
} from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/xuanvan/', label: 'LinkedIn', username: '/in/xuanvan' },
    { icon: FileText, href: '/atulfullstackresume.pdf', label: 'Resume', username: 'profile summary' },
    { icon: Github, href: 'https://github.com/ngxuanvan', label: 'GitHub', username: '@ngxuanvan' },
    { icon: Mail, href: 'mailto:xuanvan.info@gmail.com', label: 'Email', username: 'xuanvan.info' },
  ];

  // Fixed particles for footer
  const particles = [...Array(6)].map((_, i) => {
    const top = (i * 20 + 5) % 90 + 5;
    const left = (i * 25 + 10) % 90 + 5;
    return { top, left, key: i };
  });

  return (
    <footer className="relative bg-gradient-to-b from-background to-background py-12 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Minimal grid pattern */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(37, 99, 235, 0.06) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />

        {/* Floating particles */}
        {particles.map((p) => (
          <div
            key={p.key}
            className="absolute w-0.5 h-0.5 bg-gradient-to-r from-primary to-primary-light rounded-full"
            style={{
              top: `${p.top}%`,
              left: `${p.left}%`,
              opacity: 0.15
            }}
          />
        ))}
      </div>

      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-light/50 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main content - simplified */}
        <div className="flex flex-col items-center text-center mb-10">
          {/* Signature */}
          <a
            href="#home"
            className="inline-block mb-3"
          >
            <span className="text-2xl md:text-3xl font-bold font-dancing text-primary">
                Nguyen Xuan Van
            </span>
          </a>

          {/* Location */}
          <div className="flex items-center gap-2 mb-6">
            <MapPin className="w-3 h-3 text-subtext" />
            <span className="text-xs text-subtext">Heritage Institute of Technology</span>
          </div>

          {/* Social links - horizontal */}
          <div className="flex items-center gap-4 mb-8">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
                aria-label={social.label}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary-light to-primary rounded-full opacity-0 group-hover:opacity-30 blur transition-opacity duration-500" />
                <div className="relative w-10 h-10 rounded-full bg-card border border-border group-hover:border-transparent flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <social.icon className="w-4 h-4 text-subtext group-hover:text-primary transition-colors" />
                </div>
              </a>
            ))}
          </div>

          {/* Simple quote */}
          <p className="text-sm text-subtext max-w-md mx-auto mb-8 font-light italic">
            &quot;Turning business needs into clear, structured, and practical solutions&quot;
          </p>
        </div>

        {/* Bottom bar - very simple */}
        <div className="relative pt-6 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-subtext font-mono">
              © {year} Nguyen Xuan Van
            </p>

            <div className="flex items-center gap-4">
              
              {/* Back to top button */}
              <button
                onClick={scrollToTop}
                className="group relative w-8 h-8"
                aria-label="Back to top"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-light rounded-full opacity-0 group-hover:opacity-30 blur transition-opacity" />
                <div className="relative w-full h-full rounded-full bg-card border border-border group-hover:border-transparent flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <ChevronUp className="w-4 h-4 text-subtext group-hover:text-primary group-hover:-translate-y-0.5 transition-all" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
