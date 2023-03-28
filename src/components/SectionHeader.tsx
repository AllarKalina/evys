import clsx from "clsx";
import { motion, useScroll, useTransform } from "framer-motion";

interface Props {
  smallHeader: string;
  header: string;
  enableParallax?: boolean;
  text?: string;
  color?: string;
}

const SectionHeader: React.FC<Props> = ({
  smallHeader,
  header,
  enableParallax,
  text,
  color = "green",
}) => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 800], [0, 40]);

  return (
    <motion.div
      initial={{ x: -16, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ ease: [0.74, 0.07, 0.38, 0.99], duration: 0.72 }}
      viewport={{ once: true }}
      style={{ y: enableParallax ? y1 : 0 }}
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
