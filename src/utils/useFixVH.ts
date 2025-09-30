
import { useRef, useEffect } from 'react';

const useFixVH = () => {
  const ref = useRef<HTMLElement>(null); 

  useEffect(() => {
    const setVhProperty = () => {
      
      let vh = window.innerHeight * 0.01;
      
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    
    setVhProperty();

    
    window.addEventListener('resize', setVhProperty);
    window.addEventListener('orientationchange', setVhProperty);

    
    return () => {
      window.removeEventListener('resize', setVhProperty);
      window.removeEventListener('orientationchange', setVhProperty);
    };
  }, []); 

  return ref;
};

export default useFixVH; 