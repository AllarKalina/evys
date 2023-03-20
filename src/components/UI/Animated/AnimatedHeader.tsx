import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  delay?: number;
}

const AnimatedHeader: React.FC<Props> = ({ children, delay }) => {
  return (
    <motion.h1
      initial={{ x: 24, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{
        ease: [0.74, 0.07, 0.38, 0.99],
        duration: 0.72,
        delay,
      }}
      viewport={{ once: true }}
      className="text-4xl font-bold tracking-tight text-zinc-700 sm:text-6xl"
    >
      {children}
    </motion.h1>
  );
};

export default AnimatedHeader;
