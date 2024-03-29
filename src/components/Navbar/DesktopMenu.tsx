import { FaFacebook, FaInstagram } from "react-icons/fa/index.js";
import NavItem from "./NavItem";
import type { MenuItem } from "./types";

interface Props {
  menuItems: MenuItem[];
  url: string;
}

const DesktopMenu: React.FC<Props> = ({ menuItems, url }) => {
  return (
    <>
      <nav className="max-[768px]:hidden">
        <ol className="flex h-full gap-8 lg:gap-12 xl:gap-16">
          {menuItems.map((item) => {
            return <NavItem key={item.id} {...item} />;
          })}
        </ol>
        {/* Width is equal to logo width to keep menu items centered */}
      </nav>
      <nav className="flex w-[80px] items-center justify-end gap-6 pl-4 max-[768px]:hidden">
        <a
          target="_blank"
          href="https://www.instagram.com/evus_vetmed/"
          rel="noreferrer"
        >
          <FaInstagram className="h-6 w-6 cursor-pointer fill-white transition-all hover:scale-110 hover:fill-zinc-300" />
        </a>
        <a
          target="_blank"
          href="https://www.facebook.com/vetselts"
          rel="noreferrer"
        >
          <FaFacebook className="h-6 w-6 cursor-pointer fill-white transition-all hover:scale-105 hover:fill-zinc-300" />
        </a>
      </nav>
    </>
  );
};

export default DesktopMenu;
