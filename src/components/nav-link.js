import React from 'react';

const NavLink = ({ text, url, isButton }) => {
  const buttonClasses = isButton
    ? 'bg-blue-700 hover:bg-blue-500 text-white'
    : 'text-gray-700 hover:text-gray-800';

  return (
    <a
      href={url}
      className={`nav-link block text-sm lg:text-base text-center lg:inline-block py-2 px-4 ${buttonClasses}`}
    >
      {text}
    </a>
  );
};

export default NavLink;
