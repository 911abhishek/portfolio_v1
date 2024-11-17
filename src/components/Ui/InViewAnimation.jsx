// InViewAnimation.js
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const InViewAnimation = ({
  children,
  initial,
  animate,
  transition,
  threshold = 0.2,
}) => {
  const controls = useAnimation();

  // Hook to detect when the element is in view
  const { ref, inView } = useInView({
    triggerOnce: false, // Only animate once when it enters the viewport
    threshold: threshold, // When 20% of the element is in view (adjustable)
  });

  useEffect(() => {
    if (inView) {
      controls.start(animate);
    }
  }, [inView, controls, animate]);

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={controls}
      transition={transition}
      className="w-full h-full"
    >
      {children}
    </motion.div>
  );
};

export default InViewAnimation;
