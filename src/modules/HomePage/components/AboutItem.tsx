import { ChevronRightIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import { motion } from "framer-motion";
import { getAssetURL } from "../../../utils/get-asset-url";

interface Props {
  imageId: string;
  header: string;
  description: string;
  buttonText: string;
  href: string;
  color?: string;
}

const AboutItem: React.FC<Props> = ({
  imageId,
  header,
  description,
  buttonText,
  href,
  color = "green",
}) => {
  return (
    <motion.li
      initial={{ y: 16, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: [0.74, 0.07, 0.38, 0.99], duration: 0.72 }}
      viewport={{ once: true }}
      className="relative flex flex-col gap-6 xl:gap-0"
    >
      <div className="relative z-10 flex flex-col gap-10 sm:flex-row">
        <div className="max-w-xl flex-auto">
          <h3 className="mt-3 text-3xl font-bold tracking-tight text-zinc-700">
            {header}
          </h3>
          <div className="mt-4">
            <p className="text-base leading-7 text-zinc-600 lg:text-lg">
              {description}
            </p>
          </div>
        </div>
        <motion.img
          loading="lazy"
          initial={{ y: 16, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: [0.74, 0.07, 0.38, 0.99], duration: 0.72 }}
          viewport={{ once: true }}
          className="aspect-[4/5] w-52 flex-none rounded-lg object-cover shadow-lg"
          src={
            getAssetURL({
              id: imageId,
              width: 208,
              height: 260,
              fit: "cover",
              quality: 90,
            }) as string
          }
          alt=""
        />
      </div>
      <motion.a
        href={href}
        data-turbo="false"
        initial={{ x: -16, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          ease: [0.74, 0.07, 0.38, 0.99],
          duration: 0.72,
        }}
        viewport={{ once: true }}
        className="w-fit"
      >
        <button
          className={clsx(
            "flex items-center gap-0.5 transition-all hover:gap-2",
            color === "green" && "text-emerald-600 hover:text-emerald-700",
            color === "cyan" && "text-cyan-600 hover:text-cyan-700",
            color === "rose" && "text-rose-600 hover:text-rose-700",
            color === "amber" && "text-amber-600 hover:text-amber-700"
          )}
        >
          <span className="text-base font-semibold lg:text-lg">
            {buttonText}
          </span>
          <ChevronRightIcon className="h-5 w-5 stroke-2 text-inherit" />
        </button>
      </motion.a>
    </motion.li>
  );
};

export default AboutItem;
