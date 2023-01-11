import clsx from 'clsx';
import { useState } from 'react';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItemArray = [
    { id: 0, title: 'Seltsi Info', href: '/' },
    { id: 1, title: 'Loomaarsti õpe', href: '/' },
    { id: 2, title: 'Blogi', href: '/' },
    { id: 3, title: 'Toetajad', href: '/' },
  ];

  return (
    <section
      className={clsx(
        'bg-emerald-600/90 backdrop-blur flex items-center justify-between fixed max-w-screen-xl',
        isMobileMenuOpen && 'top-0 mx-0 px-7 pt-5 w-full',
        !isMobileMenuOpen &&
          'top-3 mx-3 px-4 py-2 rounded-xl w-[calc(100%-1.5rem)] ',
      )}
    >
      <img src="./Logo.png" width={90} height={43} alt="Mobile logo" />
      <MobileMenu
        isMenuOpen={isMobileMenuOpen}
        onMenuChange={() => {
          document.body.style.overflow = !isMobileMenuOpen ? 'hidden' : '';
          setIsMobileMenuOpen(!isMobileMenuOpen);
        }}
        menuItems={menuItemArray}
      />
      <DesktopMenu menuItems={menuItemArray} />
    </section>
  );
};

export default Navbar;
