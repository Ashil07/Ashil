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
    title: 'Anemia Detection System',
    description:
      'Developed an AI-powered diagnostic tool to predict anemia using blood test parameters and patient data. Trained machine learning models in Google Colab to identify patterns associated with anemia conditions and deployed an interactive web interface for real-time predictions. The system enables fast, cost-effective preliminary screening and supports early diagnosis.',
    tech: [
      'Python',
      'Scikit-learn',
      'Pandas',
      'NumPy',
      'Streamlit',
      'Google Colab',
      'Matplotlib',
    ],
    link: 'https://ashil07-anemia-internship-app-gpatxp.streamlit.app/',
    github: 'https://github.com/Ashil07/Anemia-internship',
    color: 'from-orange-500/10 to-yellow-500/10',
  },
  {
    id: 4,
    title: 'Wood Calculator & Billing System',
    description:
      'A specialized billing solution for timber businesses with wood measurement calculations, inventory management, and invoice generation.',
    tech: ['React', 'Python', 'FastAPI', 'PostgreSQL'],
    github: 'https://github.com/Ashil07/Wood-CFT-calculator',
    color: 'from-green-500/10 to-emerald-500/10',
  },
  {
    id: 5,
    title: 'Cloth Rental System',
    description:
      'Built a full-stack rental platform with pricing and inventory APIs, backed by a Prisma/PostgreSQL schema for users, rentals, coupons, and reviews with JWT auth and RBAC.',
    tech: ['Node.js', 'React', 'PostgreSQL', 'Prisma', 'JWT', 'Cloudinary', 'Multer'],
    link: 'threadrent.vercel.app',
    github: 'https://github.com/Ashil07/dbms-project',
    color: 'from-rose-500/20 to-fuchsia-500/20',
  },
  {
    id: 6,
    title: 'Do4U (Service Marketplace Platform)',
    description:
      'Developed a full-stack service marketplace with job posting, chat, and AI-based pricing using an async FastAPI backend, PostgreSQL, JWT authentication, role access, and transaction workflows.',
    tech: ['FastAPI', 'React', 'PostgreSQL', 'Supabase', 'JWT'],
    link: 'do4u.vercel.app',
    github: 'https://github.com/Ashil07/Do4U',
    color: 'from-indigo-500/20 to-sky-500/20',
  },
  {
    id: 7,
    title: 'SpendX (Financial Management Platform)',
    description:
      'Created a finance platform for expense tracking, budgeting, and multi-currency transactions with Firebase authentication, currency conversion APIs, AI-based insights, and an interactive dashboard.',
    tech: ['Next.js', 'TypeScript', 'MongoDB', 'Firebase'],
    github: 'https://github.com/Ashil07/Hackfest25-1',
    color: 'from-amber-500/20 to-lime-500/20',
  },
  {
    id: 8,
    title: 'Student VCS (Version Control System for Students)',
    description:
      'Built a lightweight version control system designed specifically for students to manage project files and track changes without the complexity of traditional tools. Implemented core features like version tracking, file history, and project snapshots, allowing users to organize and restore previous work easily. Designed to integrate seamlessly with local project folders for a simple and intuitive workflow.',
    tech: ['Python', 'File Handling', 'CLI Design', 'Data Structures'],
    github: 'https://github.com/Ashil07/student-vcs',
    color: 'from-violet-500/20 to-cyan-500/20',
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
                whileHover={{ y: -8, scale: 1.015 }}
                whileTap={{ scale: 0.995 }}
                className="group relative"
              >
                {/* Outer glow to make hover color pop on every card */}
                <div
                  className={`pointer-events-none absolute -inset-1 rounded-3xl bg-gradient-to-br ${project.color} opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-80`}
                />
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
                        <motion.span
                          key={tech}
                          whileHover={{ scale: 1.06 }}
                          transition={{ duration: 0.2 }}
                          className="px-3 py-1 text-sm rounded-full bg-muted/50 text-muted-foreground"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-4">
                      {project.link && (
                        <motion.a
                          href={project.link}
                          whileHover={{ x: 3 }}
                          transition={{ duration: 0.2 }}
                          className="inline-flex items-center gap-2 text-sm text-foreground hover:text-muted-foreground transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>View Project</span>
                        </motion.a>
                      )}
                      {project.github && (
                        <motion.a
                          href={project.github}
                          whileHover={{ x: 3 }}
                          transition={{ duration: 0.2 }}
                          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <Github className="w-4 h-4" />
                          <span>Code</span>
                        </motion.a>
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