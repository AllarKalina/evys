import clsx from "clsx";
import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const NegativeAnimatedText: React.FC<Props> = ({
  children,
  delay,
  className,
}) => {
  return (
    <motion.p
      initial={{ x: -24, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{
        ease: [0.74, 0.07, 0.38, 0.99],
        duration: 0.72,
        delay,
      }}
      className={clsx(
        "my-5 text-base leading-7 text-zinc-600 lg:text-lg",
        className
      )}
    >
      {children}
    </motion.p>
  );
};

export default NegativeAnimatedText;
