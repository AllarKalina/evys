import { ChevronRightIcon } from '@heroicons/react/20/solid';
import clsx from 'clsx';
import { motion } from 'framer-motion';

interface Props {
  imageUrl: string;
  header: string;
  description: string;
  buttonText: string;
  color?: string;
}

const AboutItem: React.FC<Props> = ({
  imageUrl,
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
      className="flex flex-col gap-6 relative"
    >
      <div className="relative z-10 flex flex-col gap-10 sm:flex-row">
        <div className="max-w-xl flex-auto">
          <div
            className={clsx(
              'h-1 w-12 rounded-full',
              color === 'green' && 'bg-emerald-600',
              color === 'cyan' && 'bg-cyan-600',
              color === 'rose' && 'bg-rose-600',
            )}
          />
          <h3 className="text-3xl font-bold tracking-tight text-zinc-700 mt-3">
            {header}
          </h3>
          <div className="mt-4">
            <p className="leading-7 text-base lg:text-lg text-zinc-600">
              {description}
            </p>
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
      <motion.a
        href="/info"
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
      </motion.a>

      {/* <motion.div
        initial={{ x: -16, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ ease: [0.74, 0.07, 0.38, 0.99], duration: 0.72 }}
        viewport={{ once: true }}
        className={clsx(
          'absolute z-0 bottom-12 left-1/2 !transform -translate-x-1/2 w-72 h-72 rotate-45 border-b-[6px] border-r-[6px] border-t-[6px] rounded-lg',
          color === 'green' && 'border-emerald-600/10',
          color === 'cyan' && 'border-cyan-600/10',
          color === 'rose' && 'border-rose-600/10',
        )}
      /> */}
    </motion.li>
  );
};

export default AboutItem;
