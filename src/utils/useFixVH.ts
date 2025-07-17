// src/utils/useFixVH.ts
import { useRef, useEffect } from 'react';

const useFixVH = () => {
  const ref = useRef<HTMLElement>(null); // [cite: 301]

  useEffect(() => {
    const setVhProperty = () => {
      // Get the actual viewport height
      let vh = window.innerHeight * 0.01;
      // Set the CSS variable on the root element
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    // Set the property initially
    setVhProperty();

    // Add event listeners for dynamic updates
    window.addEventListener('resize', setVhProperty);
    window.addEventListener('orientationchange', setVhProperty);

    // Cleanup function
    return () => {
      window.removeEventListener('resize', setVhProperty);
      window.removeEventListener('orientationchange', setVhProperty);
    };
  }, []); // Empty dependency array means this runs once on mount

  return ref;
};

export default useFixVH; // [cite: 301]