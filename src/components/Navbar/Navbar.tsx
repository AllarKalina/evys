import clsx from 'clsx';
import { useState } from 'react';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';

interface Props {
  currentPath: string;
}

const Navbar: React.FC<Props> = ({ currentPath }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItemArray = [
    { id: 0, title: 'Seltsist', href: '/info' },
    { id: 1, title: 'Loomaarsti õpe', href: '/' },
    { id: 2, title: 'Blogi', href: '/blog' },
    { id: 3, title: 'Toetajad', href: '/' },
  ];

  return (
    <section
      className={clsx(
        'bg-emerald-600/80 backdrop-blur flex items-center justify-between fixed max-w-screen-xl z-50',
        isMobileMenuOpen && 'top-0 mx-0 px-7 pt-5 w-full',
        !isMobileMenuOpen &&
          'top-3 mx-3 px-4 py-2 lg:py-3 rounded-xl w-[calc(100%-1.5rem)] ',
      )}
    >
      <a href="/">
        <img src="/images/Logo.png" width={90} height={43} alt="Mobile logo" />
      </a>
      <MobileMenu
        isMenuOpen={isMobileMenuOpen}
        onMenuChange={() => {
          document.body.style.overflow = !isMobileMenuOpen ? 'hidden' : '';
          setIsMobileMenuOpen(!isMobileMenuOpen);
        }}
        menuItems={menuItemArray}
        currentPath={currentPath}
      />
      <DesktopMenu menuItems={menuItemArray} currentPath={currentPath} />
    </section>
  );
};

export default Navbar;
