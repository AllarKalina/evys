import { ChevronRightIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import { motion } from "framer-motion";

interface Props {
  imageUrl: string;
  header: string;
  description: string;
  buttonText: string;
  href: string;
  color?: string;
}

const AboutItem: React.FC<Props> = ({
  imageUrl,
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
      className="relative flex flex-col gap-6"
    >
      <div className="relative z-10 flex flex-col gap-10 sm:flex-row">
        <div className="max-w-xl flex-auto">
          <div
            className={clsx(
              "h-1 w-12 rounded-full",
              color === "green" && "bg-emerald-600",
              color === "cyan" && "bg-cyan-600",
              color === "rose" && "bg-rose-600"
            )}
          />
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
          initial={{ y: 16, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: [0.74, 0.07, 0.38, 0.99], duration: 0.72 }}
          viewport={{ once: true }}
          className="aspect-[4/5] w-52 flex-none rounded-lg object-cover shadow-lg"
          src={imageUrl}
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
            color === "rose" && "text-rose-600 hover:text-rose-700"
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
