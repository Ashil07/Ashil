import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export function Navbar({ isDark, toggleTheme }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'work', 'connect'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Account for fixed navbar
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'work', label: 'Work' },
    { id: 'connect', label: 'Connect' }
  ];

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
        scrolled
          ? 'w-[95%] max-w-4xl'
          : 'w-[95%] max-w-5xl'
      }`}
    >
      <div className={`px-6 sm:px-8 rounded-full transition-all duration-300 ${
        scrolled
          ? 'bg-background/80 backdrop-blur-lg shadow-lg border border-border/50'
          : 'bg-background/40 backdrop-blur-md border border-border/30'
      }`}>
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo / Name */}
          <button
            onClick={() => scrollToSection('home')}
            className="text-lg sm:text-xl font-medium hover:opacity-70 transition-opacity"
          >
            MA
          </button>

          {/* Navigation Links */}
          <div className="flex items-center gap-1 sm:gap-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`px-3 sm:px-4 py-2 rounded-full transition-all duration-200 relative ${
                  activeSection === link.id
                    ? 'text-foreground bg-muted/50'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/30'
                }`}
              >
                {link.label}
              </button>
            ))}

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleTheme}
              className="ml-2 sm:ml-4 p-2 rounded-full bg-muted/50 hover:bg-muted transition-all duration-200 hover:scale-105"
              aria-label="Toggle theme"
            >
              <div className="relative w-5 h-5">
                <Sun
                  className={`absolute inset-0 w-5 h-5 transition-all duration-300 ${
                    isDark ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'
                  }`}
                />
                <Moon
                  className={`absolute inset-0 w-5 h-5 transition-all duration-300 ${
                    isDark ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}