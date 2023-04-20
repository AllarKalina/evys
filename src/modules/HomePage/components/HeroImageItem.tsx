import { Picture } from "@astrojs/image/components";
import { motion, useScroll, useTransform } from "framer-motion";
import { getAssetURL } from "../../../utils/get-asset-url";

interface Props {
  imageId: string;
  delay?: number;
}

const HeroImageItem: React.FC<Props> = ({ imageId, delay }) => {
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
      <Picture
        src={
          getAssetURL({
            id: imageId,
            width: 300,
            height: 330,
            fit: "cover",
            quality: 90,
          }) as string
        }
        widths={[300]}
        aspectRatio="3:4"
        className="h-full w-full object-cover"
      />
    </motion.li>
  );
};

export default HeroImageItem;
