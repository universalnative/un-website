import React from 'react';

import NavLink from './nav-link';

const Nav = () => {
  return (
    <nav className="nav flex flex-row justify-between items-center">
      <div className="nav-brand flex">
        <a href="#">
          <img
            alt="Logo"
            src="https://avatars3.githubusercontent.com/u/63502522?s=40&v=4"
          />
        </a>
        <a href="#" className="text-3xl text-blue-700">
          Universal Native
        </a>
      </div>
      <div className="nav-links">
        <NavLink url="#" text="Who We Are" isButton={false} />
        <NavLink url="#" text="Projects" isButton={false} />
        <NavLink url="#" text="Join Us" isButton={true} />
      </div>
    </nav>
  );
};

export default Nav;
