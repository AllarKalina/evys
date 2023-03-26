import clsx from "clsx";

interface Props {
  url: string;
}

const SideNav: React.FC<Props> = ({ url }) => {
  const MENU_ITEMS = [
    {
      id: 0,
      title: "Seltsist",
      href: "/info",
    },
    {
      id: 1,
      title: "Juhatus ja meeskonnad",
      href: "/info/teams",
    },
    {
      id: 2,
      title: "Kuusepuude projekt",
      href: "/info/work",
    },
    {
      id: 3,
      title: "Dokumendid",
      href: "/info/documents",
    },
  ];

  return (
    <div className="side-nav sticky top-40 hidden xl:block">
      <ul className="space-y-5">
        {MENU_ITEMS.map((item) => {
          return (
            <li key={item.id}>
              <a
                href={item.href}
                className="group flex cursor-pointer items-center gap-2"
              >
                <div
                  className={clsx(
                    "h-[1px] rounded-full transition-all",
                    item.href === url
                      ? "w-12 bg-emerald-600"
                      : "w-6 bg-zinc-600 group-hover:w-12 group-hover:bg-emerald-600"
                  )}
                ></div>
                <p
                  className={clsx(
                    "font-medium",
                    item.href === url
                      ? "text-emerald-600"
                      : "text-zinc-600 group-hover:text-emerald-600"
                  )}
                >
                  {item.title}
                </p>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SideNav;
