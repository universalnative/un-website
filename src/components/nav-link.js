import React from 'react';

const NavLink = ({ text, url, isButton }) => {
  const buttonClasses = isButton
    ? 'btn bg-transparent hover:bg-yellow-500 border border-yellow-500 text-yellow-500 hover:text-white'
    : '';

  return (
    <a
      href={url}
      className={`nav-link py-2 px-4 text-gray-700 ${buttonClasses}`}
    >
      {text}
    </a>
  );
};

export default NavLink;
