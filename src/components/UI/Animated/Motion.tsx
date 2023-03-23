import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  initial: any;
  whileInView: any;
  duration: number;
  delay?: number;
}

const Motion: React.FC<Props> = ({
  children,
  delay,
  initial,
  duration,
  whileInView,
}) => {
  return (
    <motion.div
      initial={initial}
      whileInView={whileInView}
      transition={{
        ease: [0.74, 0.07, 0.38, 0.99],
        duration: duration,
        delay,
      }}
      className="origin-bottom-right"
    >
      {children}
    </motion.div>
  );
};

export default Motion;
