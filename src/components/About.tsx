import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';

export function About() {
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
      id="about"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center px-6 sm:px-8 lg:px-12 py-20"
    >
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Section Label */}
          <div className="inline-flex items-center gap-3 mb-8">
            <span className="text-sm uppercase tracking-wider text-muted-foreground">
              About Me
            </span>
            <div className="h-[1px] w-16 bg-border" />
          </div>

          {/* Content */}
          <div className="space-y-6 text-lg leading-relaxed">
            <p className="text-foreground">
              I'm a creative developer passionate about crafting beautiful, functional, 
              and user-centered digital experiences. With a strong foundation in both 
              design and development, I bridge the gap between aesthetics and functionality.
            </p>
            <p className="text-muted-foreground">
              I specialize in building modern web applications with clean code, thoughtful 
              interactions, and attention to detail. Whether it's a responsive interface, 
              a complex animation, or an intuitive user flow, I love turning ideas into 
              reality.
            </p>
            <p className="text-muted-foreground">
              Beyond custom builds, I've also designed and launched 10+ websites on WIX as a freelancer, 
              helping clients translate their brand and story into clean, conversion-focused online experiences.
            </p>
            <p className="text-muted-foreground">
              When I'm not coding, you'll find me exploring new design trends, contributing to open source, 
              or experimenting with the latest web technologies.
            </p>
          </div>

          {/* Skills or Tech Stack (optional visual element) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-12 flex flex-wrap gap-3"
          >
            {[
              'React',
              'TypeScript',
              'Tailwind CSS',
              'Node.js',
              'Figma',
              'Motion',
            ].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                className="px-4 py-2 rounded-full bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground transition-all duration-200 cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
