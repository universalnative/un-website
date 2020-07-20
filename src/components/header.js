import React from 'react';

import Nav from './nav';

const Header = () => {
  return (
    <header className="sticky top-0 p-4 z-50 bg-white shadow-xs">
      <Nav />
    </header>
  );
};

export default Header;
