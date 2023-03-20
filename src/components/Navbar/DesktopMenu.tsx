import { useStore } from "@nanostores/react";
import { FaFacebook, FaInstagram } from "react-icons/fa/index.js";
import { urlPathname } from "../../stores/urlStore";
import NavItem from "./NavItem";
import type { MenuItem } from "./types";

interface Props {
  menuItems: MenuItem[];
}

const DesktopMenu: React.FC<Props> = ({ menuItems }) => {
  const $urlPathname = useStore(urlPathname);

  return (
    <>
      <nav
        data-turbo={$urlPathname === "/" ? "false" : "true"}
        className="flex gap-8 max-[768px]:hidden lg:gap-12 xl:gap-16"
      >
        {menuItems.map((item) => {
          return (
            <NavItem
              key={item.id}
              {...item}
              active={
                item.subItems
                  ? !!item.subItems.find(
                      (subitem) => subitem.href === $urlPathname
                    )
                  : item.href === $urlPathname
              }
            />
          );
        })}
        {/* Width is equal to logo width to keep menu items centered */}
      </nav>
      <div className="flex w-[90px] items-center justify-between pl-4 max-[768px]:hidden">
        <a
          target="_blank"
          href="https://www.instagram.com/evus_vetmed/"
          rel="noreferrer"
        >
          <FaInstagram className="h-6 w-6 cursor-pointer fill-white transition-all hover:scale-110 hover:fill-rose-600" />
        </a>
        <a
          target="_blank"
          href="https://www.facebook.com/vetselts"
          rel="noreferrer"
        >
          <FaFacebook className="h-6 w-6 cursor-pointer fill-white transition-all hover:scale-105 hover:fill-rose-600" />
        </a>
      </div>
    </>
  );
};

export default DesktopMenu;
