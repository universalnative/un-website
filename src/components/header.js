/**
 * The page header component.
 * A simple container for the `Nav` component.
 *
 * @author Anurag Bhandari <ab@anuragbhandari.com>
 * @since  2020-06-12
 */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Nav from './nav';

const Header = ({ navlinks, isHeroPresent }) => {
  const [headerBgClass, setHeaderBgClass] = useState(
    isHeroPresent ? 'bg-transparent' : 'bg-white shadow-md'
  );

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setHeaderBgClass('bg-white shadow-md');
    } else {
      setHeaderBgClass('bg-transparent');
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
        isHeroPresent ? headerBgClass : 'bg-white shadow-md'
      }`}
    >
      <Nav links={navlinks} />
    </header>
  );
};

Header.propTypes = {
  navlinks: PropTypes.array,
  isHeroPresent: PropTypes.bool,
};

export default Header;
