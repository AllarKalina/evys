import clsx from "clsx";
import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const NegativeAnimatedHeader: React.FC<Props> = ({
  children,
  delay,
  className,
}) => {
  return (
    <motion.h1
      initial={{ x: -24, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{
        ease: [0.74, 0.07, 0.38, 0.99],
        duration: 0.8,
        delay: 0.1,
      }}
      className={clsx(
        "text-4xl font-bold tracking-tight text-zinc-700 sm:text-6xl",
        className
      )}
    >
      {children}
    </motion.h1>
  );
};

export default NegativeAnimatedHeader;
