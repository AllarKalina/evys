import { motion } from "framer-motion";

interface Props {
  imageUrl: string;
  delay?: number;
}

const HeroImageItem: React.FC<Props> = ({ imageUrl, delay }) => {
  return (
    <motion.li
      initial={{ y: 16, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: [0.74, 0.07, 0.38, 0.99], duration: 0.72, delay }}
      viewport={{ once: true }}
      className="h-[330px] w-[260px] overflow-hidden rounded-tl-lg rounded-br-lg shadow-lg"
    >
      <img src={imageUrl} alt="image" className="h-full w-full object-cover" />
    </motion.li>
  );
};

export default HeroImageItem;
