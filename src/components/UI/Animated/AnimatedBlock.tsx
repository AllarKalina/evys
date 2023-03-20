import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  delay?: number;
}
const AnimatedBlock: React.FC<Props> = ({ children, delay }) => {
  return (
    <motion.div
      initial={{ y: 24, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: [0.74, 0.07, 0.38, 0.99], duration: 0.72, delay }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedBlock;
