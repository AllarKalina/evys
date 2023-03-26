import clsx from "clsx";
import { motion } from "framer-motion";

interface Props {
  smallHeader: string;
  header: string;
  text?: string;
  color?: string;
}

const SectionHeader: React.FC<Props> = ({
  smallHeader,
  header,
  text,
  color = "green",
}) => {
  return (
    <motion.div
      initial={{ x: -16, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ ease: [0.74, 0.07, 0.38, 0.99], duration: 0.72 }}
      viewport={{ once: true }}
    >
      <p
        className={clsx(
          "text-base font-semibold leading-7",
          color === "green" && "text-emerald-600",
          color === "cyan" && "text-cyan-600",
          color === "rose" && "text-rose-600"
        )}
      >
        {smallHeader}
      </p>
      <div className="mt-2">
        <h2 className="text-4xl font-bold tracking-tight text-zinc-700 xl:text-5xl">
          {header}
        </h2>
      </div>
      {text && (
        <div className="mt-4">
          <p className="text-base leading-7 text-zinc-600 lg:text-lg">{text}</p>
        </div>
      )}
    </motion.div>
  );
};

export default SectionHeader;
