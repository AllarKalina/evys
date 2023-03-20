import clsx from "clsx";
import { useState } from "react";

interface Props {
  currentPath: string;
}

const SideNav: React.FC<Props> = ({ currentPath }) => {
  const [path, setPath] = useState(currentPath);

  const MENU_ITEMS = [
    {
      id: 0,
      title: "Seltsist",
      href: "/info",
      isActive: currentPath === "/info",
    },
    {
      id: 1,
      title: "Juhatus ja meeskonnad",
      href: "/info/teams",
      isActive: currentPath === "/info/teams",
    },
    {
      id: 0,
      title: "Dokumendid",
      href: "/info/documents",
      isActive: currentPath === "/info/documents",
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
                onClick={() => setPath(item.href)}
                className="group flex cursor-pointer items-center gap-2"
              >
                <div
                  className={clsx(
                    "h-[1px] w-6 rounded-full transition-all group-hover:w-12 group-hover:bg-emerald-600",
                    item.href === path ? "w-12 bg-emerald-600" : "bg-zinc-600"
                  )}
                ></div>
                <p
                  className={clsx(
                    " font-medium group-hover:text-emerald-600",
                    item.href === path ? "text-emerald-600" : "text-zinc-600"
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
