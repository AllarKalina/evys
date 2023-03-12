import clsx from 'clsx';
import { motion } from 'framer-motion';

interface Props {
  subTitle: string;
  header: string;
  text: string;
  color?: string;
}

const Mission: React.FC<Props> = ({
  subTitle,
  header,
  text,
  color = 'green',
}) => {
  return (
    <motion.div
      initial={{ x: -16, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ ease: [0.74, 0.07, 0.38, 0.99], duration: 0.72 }}
      viewport={{ once: true }}
    >
      <div className="max-w-md lg:max-w-lg">
        <p
          className={clsx(
            'text-base font-semibold leading-7 text-emerald-600',
            color === 'green' && 'text-emerald-600',
            color === 'cyan' && 'text-cyan-600',
            color === 'rose' && 'text-rose-600',
          )}
        >
          {subTitle}
        </p>
        <div className="mt-2">
          <h2 className="text-4xl font-bold tracking-tight text-zinc-700 sm:text-6xl">
            {header}
          </h2>
        </div>
        <div className="mt-4">
          <p className="text-base lg:text-lg text-zinc-600">{text}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Mission;
