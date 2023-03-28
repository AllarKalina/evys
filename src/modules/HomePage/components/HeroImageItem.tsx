import { motion, useScroll, useTransform } from "framer-motion";
import { getAssetURL } from "../../../utils/get-asset-url";

interface Props {
  imageId: string;
  parallaxModifier?: number;
  delay?: number;
}

const HeroImageItem: React.FC<Props> = ({
  imageId,
  delay,
  parallaxModifier,
}) => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 600], [0, -35]);

  return (
    <motion.li
      initial={{ y: 16, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: [0.74, 0.07, 0.38, 0.99], duration: 0.72, delay }}
      viewport={{ once: true }}
      style={{ y: y1 }}
      className="h-[330px] w-[300px] overflow-hidden rounded-lg shadow-lg lg:w-[260px]"
    >
      <img
        loading="lazy"
        className="h-full w-full object-cover"
        src={
          getAssetURL({
            id: imageId,
            width: 300,
            height: 330,
            fit: "cover",
            quality: 80,
          }) as string
        }
      />
    </motion.li>
  );
};

export default HeroImageItem;
