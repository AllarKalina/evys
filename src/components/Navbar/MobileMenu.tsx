import clsx from 'clsx';
import NavItem from './NavItem';
import type { MenuItem } from './types';

interface Props {
  isMenuOpen: boolean;
  onMenuChange: () => void;
  menuItems: MenuItem[];
  currentPath: string;
}

const MobileMenu: React.FC<Props> = ({
  isMenuOpen,
  onMenuChange,
  menuItems,
  currentPath,
}) => {
  return (
    <>
      <button
        id="nav-icon3"
        className={clsx(isMenuOpen && 'open', 'm-2 min-[768px]:hidden')}
        onClick={() => onMenuChange()}
      >
        <span>
          <div className="bg-white w-[85%] h-full rounded-xl mr-[1px]" />
        </span>
        <span />
        <span />
        <span />
      </button>
      {isMenuOpen && (
        <nav className="flex-col justify-end gap-8 absolute top-[63px] px-7 pb-40 left-0 bg-emerald-600/80 backdrop-blur-sm h-[calc(100vh-63px)] w-full flex">
          {menuItems.map((item) => (
            <NavItem
              {...item}
              className="text-4xl"
              active={item.href === currentPath}
            />
          ))}
        </nav>
      )}
    </>
  );
};

export default MobileMenu;
