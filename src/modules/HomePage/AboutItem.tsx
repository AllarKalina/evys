import { ChevronRightIcon } from '@heroicons/react/20/solid';
import clsx from 'clsx';
import { motion } from 'framer-motion';

interface Props {
  imageUrl: string;
  accentHeader: string;
  header: string;
  description: string;
  buttonText: string;
  color?: string;
}

const AboutItem: React.FC<Props> = ({
  imageUrl,
  accentHeader,
  header,
  description,
  buttonText,
  color = 'green',
}) => {
  return (
    <motion.li
      initial={{ y: 16, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: [0.74, 0.07, 0.38, 0.99], duration: 0.72 }}
      viewport={{ once: true }}
      className="flex flex-col pt-12 gap-10"
    >
      <div className="flex flex-col gap-10 sm:flex-row">
        <div className="max-w-xl flex-auto">
          <p
            className={clsx(
              'text-base font-semibold leading-7',
              color === 'green' && 'text-emerald-600',
              color === 'cyan' && 'text-cyan-600',
              color === 'rose' && 'text-rose-600',
            )}
          >
            {accentHeader}
          </p>
          <h3 className="text-2xl font-bold leading-8 tracking-tight text-zinc-700 mt-1">
            {header}
          </h3>
          <div className="mt-4">
            <p className="text-base lg:text-lg text-zinc-600">{description}</p>
          </div>
        </div>
        <motion.img
          initial={{ y: 16, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: [0.74, 0.07, 0.38, 0.99], duration: 0.72 }}
          viewport={{ once: true }}
          className="aspect-[4/5] w-52 flex-none rounded-lg object-cover"
          src={imageUrl}
          alt=""
        />
      </div>
      <a href="/info">
        <button
          className={clsx(
            'flex items-center gap-0.5 hover:gap-2 transition-all',
            color === 'green' && 'text-emerald-600 hover:text-emerald-700',
            color === 'cyan' && 'text-cyan-600 hover:text-cyan-700',
            color === 'rose' && 'text-rose-600 hover:text-rose-700',
          )}
        >
          <span className="font-semibold text-base lg:text-lg">
            {buttonText}
          </span>
          <ChevronRightIcon className="text-inherit w-5 h-5 stroke-2" />
        </button>
      </a>
    </motion.li>
  );
};

export default AboutItem;
