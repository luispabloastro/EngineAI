'use client';

import { useEffect, useState } from 'react';

export default function ProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate how far down the page the user has scrolled
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = scrollTop / docHeight;
      setScrollProgress(scrollPercent);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Call once to set initial value
    handleScroll();

    // Remove event listener on cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-50 bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-purple-600 to-purple-400"
        style={{ width: `${scrollProgress * 100}%`, transition: 'width 0.2s ease-out' }}
      />
    </div>
  );
} 