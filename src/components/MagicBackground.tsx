import React, { useEffect, useState } from 'react';

type CursorPos = {
  x: number;
  y: number;
};

export const MagicBackground: React.FC = () => {
  const [cursorPos, setCursorPos] = useState<CursorPos>({ x: 50, y: 50 });
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Respect prefers-reduced-motion for interaction-based animation
  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setPrefersReducedMotion(mediaQuery.matches);

    update();
    mediaQuery.addEventListener('change', update);

    return () => {
      mediaQuery.removeEventListener('change', update);
    };
  }, []);

  // Soft cursor-follow glow (very subtle, throttled with rAF)
  useEffect(() => {
    if (prefersReducedMotion || typeof window === 'undefined') return;

    let frameId: number | null = null;

    const handlePointerMove = (event: PointerEvent) => {
      if (frameId !== null) {
        cancelAnimationFrame(frameId);
      }

      const { innerWidth, innerHeight } = window;
      const x = (event.clientX / innerWidth) * 100;
      const y = (event.clientY / innerHeight) * 100;

      frameId = window.requestAnimationFrame(() => {
        setCursorPos({ x, y });
      });
    };

    window.addEventListener('pointermove', handlePointerMove);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      if (frameId !== null) {
        cancelAnimationFrame(frameId);
      }
    };
  }, [prefersReducedMotion]);

  const cursorStyle = prefersReducedMotion
    ? undefined
    : ({
        '--magic-cursor-x': `${cursorPos.x}%`,
        '--magic-cursor-y': `${cursorPos.y}%`,
      } as React.CSSProperties);

  return (
    <div className="magic-bg pointer-events-none fixed inset-0 -z-10">
      {/* Base mesh / soft gradient */}
      <div className="magic-bg__gradient" aria-hidden="true" />

      {/* Soft orbs */}
      <div className="magic-bg__orb magic-bg__orb--primary" aria-hidden="true" />
      <div className="magic-bg__orb magic-bg__orb--secondary" aria-hidden="true" />

      {/* Optional, extremely subtle particles */}
      <div className="magic-bg__particles" aria-hidden="true" />

      {/* Very soft cursor-follow glow */}
      {!prefersReducedMotion && (
        <div
          className="magic-bg__cursor-glow"
          style={cursorStyle}
          aria-hidden="true"
        />
      )}
    </div>
  );
};


