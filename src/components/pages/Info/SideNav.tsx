import { useStore } from "@nanostores/react";
import clsx from "clsx";
import { urlPathname } from "../../../stores/urlStore";

const SideNav = () => {
  const $urlPathname = useStore(urlPathname);

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
      title: "Kuusepuud",
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
                onClick={() => urlPathname.set(item.href)}
                className="group flex cursor-pointer items-center gap-2"
              >
                <div
                  className={clsx(
                    "h-[1px] w-6 rounded-full transition-all group-hover:w-12 group-hover:bg-emerald-600",
                    item.href === $urlPathname
                      ? "w-12 bg-emerald-600"
                      : "bg-zinc-600"
                  )}
                ></div>
                <p
                  className={clsx(
                    " font-medium group-hover:text-emerald-600",
                    item.href === $urlPathname
                      ? "text-emerald-600"
                      : "text-zinc-600"
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
