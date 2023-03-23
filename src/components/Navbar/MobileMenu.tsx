import clsx from "clsx";
import NavItem from "./NavItem";
import type { MenuItem } from "./types";

interface Props {
  isMenuOpen: boolean;
  onMenuChange: () => void;
  menuItems: MenuItem[];
}

const MobileMenu: React.FC<Props> = ({
  isMenuOpen,
  onMenuChange,
  menuItems,
}) => {
  return (
    <div className="flex items-center md:hidden">
      <button
        id="nav-icon3"
        className={clsx(isMenuOpen && "open", "m-2")}
        onClick={() => onMenuChange()}
      >
        <span>
          <div className="mr-[1px] h-full w-[85%] rounded-xl bg-white" />
        </span>
        <span />
        <span />
        <span />
      </button>
      {isMenuOpen && (
        <nav
          data-turbo="false"
          className="absolute top-[71px] left-0 flex h-[calc(100vh-63px)] w-full flex-col justify-end gap-8 bg-emerald-600 px-7 pb-40"
        >
          {menuItems.map((item) => (
            <NavItem
              {...item}
              className="text-4xl"
              active={item.href === "j"}
            />
          ))}
        </nav>
      )}
    </div>
  );
};

export default MobileMenu;
