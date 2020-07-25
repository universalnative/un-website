/**
 * CtaButton component.
 *
 * A button styled to reflect a call-to-action.
 * Currently used in Hero and CWP, but is flexible to be used anywhere.
 *
 * @author Anurag Bhandari <ab@anuragbhandari.com>
 * @since  2020-06-12
 */

import React from 'react';
import PropTypes from 'prop-types';

const CtaButton = ({ url, text, isPrimary }) => {
  const bgClasses =
    isPrimary === true
      ? 'bg-yellow-500 hover:bg-yellow-400'
      : 'bg-white hover:bg-gray-200';

  return (
    <a
      href={url}
      className={`${bgClasses} text-xs md:text-sm lg:text-base py-2 px-3 lg:py-4 lg:px-8 text-gray-800 border border-yellow-500`}
    >
      {text}
    </a>
  );
};

CtaButton.propTypes = {
  isPrimary: PropTypes.bool,
  text: PropTypes.string,
  url: PropTypes.string,
};

export default CtaButton;
