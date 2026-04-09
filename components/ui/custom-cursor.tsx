import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });

  // Use springs for ultra-smooth buttery lag
  const cursorX = useSpring(-100, { stiffness: 1000, damping: 50, mass: 0.2 });
  const cursorY = useSpring(-100, { stiffness: 1000, damping: 50, mass: 0.2 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, [cursorX, cursorY]);

  // Don't render until mouse enters screen, avoiding stuck cursor in top left
  if (mousePosition.x === -100) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-5 h-5 bg-white rounded-full pointer-events-none z-[999999]"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: "-50%",
        translateY: "-50%",
        mixBlendMode: "difference"
      }}
    />
  );
}
