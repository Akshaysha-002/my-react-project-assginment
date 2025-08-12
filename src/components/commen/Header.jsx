import React, { useState } from 'react';
// import Button from '../ui/Button';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-global-1">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-row justify-between items-center py-4 md:py-6">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-global-1 font-quicksand font-bold text-lg md:text-xl lg:text-2xl">
              VAYUZ
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex flex-row items-center gap-8">
            <a href="#services" className="text-global-2 hover:text-global-1 font-quicksand font-medium transition-colors">
              Services
            </a>
            <a href="#about" className="text-global-2 hover:text-global-1 font-quicksand font-medium transition-colors">
              About
            </a>
            <a href="#contact" className="text-global-2 hover:text-global-1 font-quicksand font-medium transition-colors">
              Contact
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="block lg:hidden p-2 text-global-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Mobile Navigation */}
          <nav className={`${menuOpen ? 'block' : 'hidden'} lg:hidden absolute top-full left-0 w-full bg-global-1 border-t border-global-4 z-50`}>
            <div className="flex flex-col p-4 space-y-4">
              <a href="#services" className="text-global-2 hover:text-global-1 font-quicksand font-medium transition-colors">
                Services
              </a>
              <a href="#about" className="text-global-2 hover:text-global-1 font-quicksand font-medium transition-colors">
                About
              </a>
              <a href="#contact" className="text-global-2 hover:text-global-1 font-quicksand font-medium transition-colors">
                Contact
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;