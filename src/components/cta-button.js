import React from 'react';

const CtaButton = ({ url, text }) => {
  return (
    <a
      href={url}
      className='bg-yellow-500 hover:bg-yellow-600 py-4 px-8 text-gray-800'
    >
      {text}
    </a>
  );
};

export default CtaButton;
