"use client"
// components/GoTopButton.js
import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import { ArrowUp } from 'lucide-react';

const UpiUp = () => {
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const scrollThreshold = 200;

    setIsVisible(scrollY > scrollThreshold);
  };

  useEffect(() => {
    const button = document.getElementById('goTopBtn');

    if (button) {
      button.addEventListener('click', goToTop);
      window.addEventListener('scroll', handleScroll);

      return () => {
        button.removeEventListener('click', goToTop);
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  useEffect(() => {
    // Use Framer Motion to animate the button's visibility
    controls.start({ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0 });
  }, [isVisible, controls]);

  return (
    <motion.button
      id="goTopBtn"
      className="fixed bottom-4 right-4 text-sm bg-black text-white p-2 rounded-md cursor-pointer"
      onClick={goToTop}
      initial={{ opacity: 0, scale: 0 }}
      animate={controls}
      transition={{ duration: 0.3 }}
    >
       
     <ArrowUp className='w-8 h-8' />
        </motion.button>
  );
};

export default UpiUp;