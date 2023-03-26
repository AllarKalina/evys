import { motion } from "framer-motion";
import { getAssetURL } from "../../utils/get-asset-url";

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
      className="flex shrink-0 justify-center gap-5 sm:gap-7 md:gap-9"
    >
      {imageUrls.map((item) => {
        return (
          <li className="aspect-[4/5] w-[180px] flex-none -rotate-2 overflow-hidden rounded-lg shadow-xl">
            <img
              loading="lazy"
              className="h-full w-full object-cover"
              src={getAssetURL({ id: item, width: 188 }) as string}
            />
          </li>
        );
      })}
    </motion.ul>
  );
};

export default MobileImages;
