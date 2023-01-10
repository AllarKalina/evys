import clsx from 'clsx';
import { useState } from 'react';
import MobileMenu from './MobileMenu';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav
      className={clsx(
        'bg-emerald-600/90 backdrop-blur flex items-center justify-between sticky',
        isMobileMenuOpen && 'top-0 mx-0 px-7 pt-5',
        !isMobileMenuOpen && 'top-3 mx-3 px-4 py-2 rounded-xl',
      )}
    >
      <img src="./Logo.png" width={90} height={43} alt="Mobile logo" />
      <button
        id="nav-icon3"
        className={clsx(isMobileMenuOpen && 'open', 'm-2')}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <span>
          <div className="bg-white w-[85%] h-full rounded-xl mr-[1px]" />
        </span>
        <span />
        <span />
        <span />
      </button>
      {isMobileMenuOpen && <MobileMenu />}
    </nav>
  );
};

export default Navbar;
