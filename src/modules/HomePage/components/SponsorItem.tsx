import { motion } from "framer-motion";
import { getAssetURL } from "../../../utils/get-asset-url";

interface Props {
  imageId: string;
}

const SponsorItem: React.FC<Props> = ({ imageId }) => {
  return (
    <motion.li
      initial={{ y: 16, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: [0.74, 0.07, 0.38, 0.99], duration: 0.72 }}
      viewport={{ once: true }}
      className="flex w-full justify-center"
    >
      <div className="relative flex h-full w-[60%] items-center justify-center rounded-lg border border-slate-200/40 bg-slate-200/30 p-4 backdrop-blur lg:w-full">
        <div className="noise" />
        <img
          loading="lazy"
          src={
            getAssetURL({
              id: imageId,
              fit: "contain",
              width: 290,
            }) as string
          }
          alt="Sponsor logo"
          className="w-full"
        />
      </div>
    </motion.li>
  );
};

export default SponsorItem;
