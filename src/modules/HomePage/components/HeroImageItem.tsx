import { motion, useScroll, useTransform } from "framer-motion";

interface Props {
  imageId: string;
  delay?: number;
  children: React.ReactNode;
}

const HeroImageItem: React.FC<Props> = ({ imageId, delay, children }) => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, -35]);

  return (
    <motion.li
      initial={{ y: y1.get() + 16, opacity: 0 }}
      whileInView={{ y: y1.get(), opacity: 1 }}
      transition={{ ease: [0.74, 0.07, 0.38, 0.99], duration: 0.72, delay }}
      viewport={{ once: true }}
      className="h-[330px] w-[300px] overflow-hidden rounded-lg shadow-lg lg:w-[260px]"
    >
      {children}
    </motion.li>
  );
};

export default HeroImageItem;
