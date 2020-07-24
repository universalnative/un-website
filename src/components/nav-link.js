import React from 'react';
import Link from 'next/link';

const NavLink = ({ text, slug, isButton }) => {
  const buttonClasses = isButton
    ? 'bg-blue-700 hover:bg-blue-500 text-white'
    : 'text-gray-400 hover:text-gray-200';

  return (
    <Link href="/[...slug]" as={`/${slug}`}>
      <a
        className={`nav-link ${
          isButton && 'nav-button'
        } block text-sm lg:text-base text-center lg:inline-block py-2 px-4 ${buttonClasses}`}
      >
        {text}
      </a>
    </Link>
  );
};

export default NavLink;
