import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const socialLinks = [
  {
    name: 'GitHub',
    icon: Github,
    href: 'https://github.com',
    color: 'hover:text-[#181717] dark:hover:text-white',
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: 'https://linkedin.com',
    color: 'hover:text-[#0A66C2]',
  },
  {
    name: 'Twitter',
    icon: Twitter,
    href: 'https://twitter.com',
    color: 'hover:text-[#1DA1F2]',
  },
  {
    name: 'Email',
    icon: Mail,
    href: 'mailto:alex@example.com',
    color: 'hover:text-red-500',
  },
];

export function Connect() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="connect"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center px-6 sm:px-8 lg:px-12 py-20"
    >
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Section Label */}
          <div className="inline-flex items-center gap-3 mb-8">
            <div className="h-[1px] w-16 bg-border" />
            <span className="text-sm uppercase tracking-wider text-muted-foreground">
              Get In Touch
            </span>
            <div className="h-[1px] w-16 bg-border" />
          </div>

          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium mb-6">
            Let's Connect
          </h2>

          {/* Description */}
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            I'm always open to new opportunities, collaborations, or just a friendly chat.
            Let's build something meaningful together.
          </p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center justify-center gap-6"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.href}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className={`p-4 rounded-full bg-muted/50 text-muted-foreground transition-all duration-300 hover:bg-muted hover:scale-110 ${social.color}`}
                aria-label={social.name}
                target="_blank"
                rel="noopener noreferrer"
              >
                <social.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </motion.div>

          {/* Email CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12"
          >
            <a
              href="mailto:alex@example.com"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-foreground text-background hover:opacity-90 transition-all duration-200 hover:scale-105"
            >
              <Mail className="w-5 h-5" />
              <span className="font-medium">Send me an email</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
