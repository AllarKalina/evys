import { ChevronDownIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";

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
          "group relative flex flex-col gap-0.5 text-sm font-semibold tracking-wide text-white transition-colors hover:text-zinc-300 md:h-full md:flex-row md:items-center",
          active && "underline underline-offset-8",
          className
        )}
      >
        <span>{title}</span>
        {subItems !== undefined && (
          <>
            <ChevronDownIcon className="hidden h-5 w-5 text-inherit md:block" />
            <ul className="absolute top-10 hidden rounded-lg border border-emerald-600/50 bg-zinc-100 py-2 md:group-hover:block">
              {subItems.map((item) => {
                return (
                  <li>
                    <a
                      className="block whitespace-nowrap py-2 px-4 text-emerald-600 hover:bg-zinc-200 hover:text-emerald-700"
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
        <ul className="-my-4 pl-6 md:hidden">
          {subItems.map((item) => {
            return (
              <li>
                <a
                  className="block whitespace-nowrap rounded-lg py-2 px-4 text-lg font-semibold tracking-wide text-white"
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
