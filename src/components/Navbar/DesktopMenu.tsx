import { FaFacebook, FaInstagram } from 'react-icons/fa/index.js';
import NavItem from './NavItem';
import type { MenuItem } from './types';

interface Props {
  menuItems: MenuItem[];
  currentPath: string;
}

const DesktopMenu: React.FC<Props> = ({ menuItems, currentPath }) => {
  return (
    <>
      <nav className="max-[768px]:hidden flex gap-8 lg:gap-12 xl:gap-16">
        {menuItems.map((item) => {
          return (
            <NavItem
              key={item.id}
              {...item}
              active={item.href === currentPath}
            />
          );
        })}
        {/* Width is equal to logo width to keep menu items centered */}
      </nav>
      <div className="max-[768px]:hidden w-[90px] flex justify-between items-center pl-4">
        <a
          target="_blank"
          href="https://www.instagram.com/evus_vetmed/"
          rel="noreferrer"
        >
          <FaInstagram className="w-6 h-6 fill-white cursor-pointer transition-all hover:fill-rose-600 hover:scale-110" />
        </a>
        <a
          target="_blank"
          href="https://www.facebook.com/vetselts"
          rel="noreferrer"
        >
          <FaFacebook className="w-6 h-6 fill-white cursor-pointer transition-all hover:fill-rose-600 hover:scale-105" />
        </a>
      </div>
    </>
  );
};

export default DesktopMenu;
