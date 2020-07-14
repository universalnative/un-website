import React from 'react';

const CtaButton = ({ url, text, isPrimary }) => {
  const bgClasses =
    isPrimary === true
      ? 'bg-yellow-500 hover:bg-yellow-400'
      : 'bg-white hover:bg-gray-200';

  return (
    <a
      href={url}
      className={`${bgClasses} mx-3 py-4 px-8 text-gray-800 border border-yellow-500`}
    >
      {text}
    </a>
  );
};

export default CtaButton;
