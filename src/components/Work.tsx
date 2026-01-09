import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  link?: string;
  github?: string;
  color: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Moodmate',
    description:
      'A mental wellness app designed to help users track their mood, practice mindfulness, and improve mental health.',
    tech: ['React', 'Python', 'FastAPI', 'IBM Watson AI', 'RAG', 'AWS'],
    github: 'https://github.com/Ashil07/Moodmate',
    color: 'from-purple-500/10 to-pink-500/10',
  },
  {
    id: 2,
    title: 'Learning Management System',
    description:
      'A comprehensive LMS platform for online education with course management, student tracking, and assessment tools.',
    tech: ['Frappe', 'Python', 'JavaScript', 'MariaDB'],
    github: '#',
    color: 'from-blue-500/10 to-cyan-500/10',
  },
  {
    id: 3,
    title: 'App Automation Suite',
    description:
      'Automated testing framework for mobile applications using Appium, enabling efficient cross-platform app testing and quality assurance.',
    tech: ['Python', 'Appium', 'Selenium', 'Pytest'],
    github: '#',
    color: 'from-orange-500/10 to-yellow-500/10',
  },
  {
    id: 4,
    title: 'Wood Calculator & Billing System',
    description:
      'A specialized billing solution for timber businesses with wood measurement calculations, inventory management, and invoice generation.',
    tech: ['React', 'Python', 'FastAPI', 'PostgreSQL'],
    github: '#',
    color: 'from-green-500/10 to-emerald-500/10',
  },
];

export function Work() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="work"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center px-6 sm:px-8 lg:px-12 py-20"
    >
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Section Header */}
          <div className="mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="text-sm uppercase tracking-wider text-muted-foreground">
                My Work
              </span>
              <div className="h-[1px] w-16 bg-border" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium">
              Featured Projects
            </h2>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative h-full p-8 rounded-2xl border border-border bg-card hover:border-foreground/20 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  {/* Gradient background */}
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  />

                  <div className="relative z-10">
                    {/* Project Title */}
                    <h3 className="text-2xl font-medium mb-3 group-hover:text-foreground transition-colors">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm rounded-full bg-muted/50 text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-4">
                      {project.link && (
                        <a
                          href={project.link}
                          className="inline-flex items-center gap-2 text-sm text-foreground hover:text-muted-foreground transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>View Project</span>
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <Github className="w-4 h-4" />
                          <span>Code</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}