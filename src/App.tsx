import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Work } from './components/Work';
import { Connect } from './components/Connect';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { MagicBackground } from './components/MagicBackground';

export default function App() {
  // Dark mode state with localStorage persistence
  const [isDark, setIsDark] = useState(() => {
    // Check localStorage first
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    // Fall back to system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Apply dark class to html element and save preference
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  // Keyboard shortcut (D key) to toggle theme
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'd' || e.key === 'D') {
        // Only trigger if not typing in an input
        if (e.target instanceof HTMLElement && 
            !['INPUT', 'TEXTAREA'].includes(e.target.tagName)) {
          setIsDark(prev => !prev);
        }
      }
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div className="relative min-h-screen bg-background text-foreground transition-colors duration-500">
      {/* Magic minimal background */}
      <MagicBackground />

      {/* Custom cursor for desktop */}
      <div className="hidden lg:block">
        <CustomCursor />
      </div>
      
      <div className="relative z-10">
        <Navbar isDark={isDark} toggleTheme={toggleTheme} />
        
        <main>
          <Hero />
          <About />
          <Work />
          <Connect />
        </main>
        
        <Footer />
      </div>
    </div>
  );
}