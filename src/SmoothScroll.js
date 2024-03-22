import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const SmoothScroll = () => {
  useEffect(() => {
    const handleScroll = () => {
      gsap.to(window, {
        duration: 1,
        scrollTo: { y: 0 },
        ease: 'power3.inOut',
        overwrite: true,
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return null;
};

export default SmoothScroll;



