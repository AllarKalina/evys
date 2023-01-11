import { FaFacebook, FaInstagram } from 'react-icons/fa/index.js';
import NavItem from './NavItem';
import type { MenuItem } from './types';

interface Props {
  menuItems: MenuItem[];
}

const DesktopMenu: React.FC<Props> = ({ menuItems }) => {
  return (
    <>
      <nav className="max-[768px]:hidden flex gap-8 lg:gap-12 xl:gap-16">
        {menuItems.map((item) => {
          return <NavItem key={item.id} {...item} className="text-sm" />;
        })}
        {/* Width is equal to logo width to keep menu items centered */}
      </nav>
      <div className="max-[768px]:hidden w-[90px] flex justify-around items-center">
        <FaInstagram className="w-6 h-6 fill-white cursor-pointer transition-all hover:fill-rose-600 hover:scale-110" />
        <FaFacebook className="w-6 h-6 fill-white cursor-pointer transition-all hover:fill-rose-600 hover:scale-105" />
      </div>
    </>
  );
};

export default DesktopMenu;
