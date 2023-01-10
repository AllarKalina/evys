import clsx from 'clsx';
import { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-emerald-600/80 backdrop-blur flex items-center justify-between px-4 py-2 sticky top-3 mx-3 rounded-xl">
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
    </nav>
  );
};

export default Navbar;
