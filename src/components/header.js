import React, { useState, useEffect } from 'react';

import Nav from './nav';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = (e) => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 p-2 md:p-4 z-50 transition-colors duration-200 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <Nav />
    </header>
  );
};

export default Header;
