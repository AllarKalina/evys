import { ChevronDownIcon } from '@heroicons/react/20/solid';
import clsx from 'clsx';

interface Props {
  title: string;
  href: string;
  className?: string;
  active?: boolean;
  subItems?: {
    id: number;
    title: string;
    href: string;
  }[];
}

const NavItem: React.FC<Props> = ({
  title,
  href,
  className,
  active,
  subItems,
}) => {
  return (
    <>
      <a
        href={href}
        className={clsx(
          'text-white group relative font-semibold hover:text-zinc-300 transition-colors tracking-wide text-sm flex flex-col md:flex-row md:h-full md:items-center gap-0.5',
          active && 'text-zinc-300',
          className,
        )}
      >
        <span>{title}</span>
        {subItems !== undefined && (
          <>
            <ChevronDownIcon className="text-inherit w-5 h-5 hidden md:block" />
            <ul className="absolute top-10 hidden md:group-hover:block bg-zinc-100 rounded-lg py-2 border border-emerald-600/50">
              {subItems.map((item) => {
                return (
                  <li>
                    <a
                      className="text-emerald-600 hover:text-emerald-700 hover:bg-zinc-200 py-2 px-4 block whitespace-nowrap"
                      href={item.href}
                    >
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </>
        )}
      </a>
      {subItems !== undefined && (
        <ul className="md:hidden pl-6 -my-4">
          {subItems.map((item) => {
            return (
              <li>
                <a
                  className="rounded-lg text-white font-semibold py-2 px-4 block whitespace-nowrap text-lg tracking-wide"
                  href={item.href}
                >
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default NavItem;
