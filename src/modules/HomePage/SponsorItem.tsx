import { motion } from 'framer-motion';

interface Props {
  imageUrl: string;
}

const SponsorItem: React.FC<Props> = ({ imageUrl }) => {
  return (
    <motion.li
      initial={{ y: 16, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: [0.74, 0.07, 0.38, 0.99], duration: 0.72 }}
      viewport={{ once: true }}
      className="flex w-full justify-center"
    >
      <div className="relative bg-slate-200/30 border border-slate-200/40 backdrop-blur p-4 rounded-lg h-full flex items-center justify-center w-[60%] lg:w-full">
        <div className="noise" />
        <img src={imageUrl} alt="image" className="w-full" />
      </div>
    </motion.li>
  );
};

export default SponsorItem;
