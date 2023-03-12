import { motion } from 'framer-motion';

interface Props {
  imageUrls: string[];
}

const MobileImages: React.FC<Props> = ({ imageUrls }) => {
  return (
    <motion.ul
      initial={{ x: 16, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ ease: [0.74, 0.07, 0.38, 0.99], duration: 0.72 }}
      viewport={{ once: true }}
      className="flex shrink-0 gap-5 justify-center sm:gap-7 md:gap-9"
    >
      {imageUrls.map((item, idx) => {
        return (
          <li className="overflow-hidden flex-none rounded-lg -rotate-2 shadow-xl w-[180px] aspect-[4/5]">
            <img
              src={item}
              alt={`Hero_mobile_img${idx}`}
              className="w-full h-full object-cover"
            />
          </li>
        );
      })}
    </motion.ul>
  );
};

export default MobileImages;
