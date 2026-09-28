import { motion } from 'framer-motion';
import { cn } from '../utils/cn';

export default function FadeIn({ 
  children, 
  delay = 0, 
  className, 
  direction = "up", 
  once = true,
  duration = 0.8
}) {
  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
    none: { x: 0, y: 0 }
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: once, margin: "-10%" }}
      transition={{ 
        duration: duration, 
        delay: delay, 
        ease: [0.21, 0.47, 0.32, 0.98] // Custom cubic-bezier for a premium, cinematic feel
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
