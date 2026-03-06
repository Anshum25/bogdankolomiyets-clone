import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 2500;
    const interval = 20;
    const steps = duration / interval;
    const increment = 100 / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= 100) {
        current = 100;
        clearInterval(timer);
        setTimeout(onComplete, 400);
      }
      setProgress(Math.floor(current));
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="loading-screen"
        exit={{ y: '-100%' }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      >
        <div className="loading-bar" style={{ height: `${progress}%` }} />
        <div className="flex items-end gap-1">
          <span className="loading-number">{progress}</span>
          <span className="loading-number text-[clamp(2rem,6vw,5rem)]">%</span>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;
