import React from 'react';

const NavLink = ({ text, url, isButton }) => {
  const buttonClasses = isButton
    ? 'btn bg-transparent hover:bg-yellow-400 border border-yellow-400'
    : '';

  return (
    <a href={url} className={`nav-link py-2 px-4 ${buttonClasses}`}>
      {text}
    </a>
  );
};

export default NavLink;
