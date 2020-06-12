import React from 'react';

import CtaButton from './cta-button';

const Hero = () => {
  return (
    <section className='h-screen px-40 text-center flex flex-col items-center justify-center'>
      <h3 className='text-lg font-bold text-red-500 uppercase'>
        Built for a purpose
      </h3>
      <h2 className='text-5xl mt-8'>
        Democratizing access to all information across the world
      </h2>
      <h6 className='mt-8 text-gray-700'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </h6>
      <div className='mt-12'>
        <CtaButton url='#' text='Explore NativeLand' />
      </div>
    </section>
  );
};

export default Hero;
