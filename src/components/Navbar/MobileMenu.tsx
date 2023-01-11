import clsx from 'clsx';
import NavItem from './NavItem';
import type { MenuItem } from './types';

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
        <nav className="flex-col justify-end gap-8 absolute top-[63px] px-7 pb-20 left-0 bg-emerald-600/90 backdrop-blur h-[calc(100vh-63px)] w-full flex">
          {menuItems.map((item) => (
            <NavItem {...item} className="text-4xl" />
          ))}
        </nav>
      )}
    </>
  );
};

export default MobileMenu;
