import React from 'react';

import CtaButton from './cta-button';

const Hero = ({
  title,
  subtitle,
  description,
  primary_cta: primaryCta,
  secondary_cta: secondaryCta,
}) => {
  return (
    <div>
      <div className="video-container absolute top-0 left-0 bottom-0 right-0 min-w-full min-h-full z-auto">
        <video autoPlay={true} loop={true}>
          <source src="/intro-reel.mp4" type="video/mp4" />
        </video>
      </div>
      <section className="h-screen px-40 text-center flex flex-col items-center justify-center relative z-10">
        <h3 className="text-lg font-bold text-red-500 uppercase">{subtitle}</h3>
        <h2 className="text-5xl mt-8 text-white">{title}</h2>
        <h6 className="mt-8 text-gray-400">{description}</h6>
        <div className="mt-12">
          <CtaButton
            url={primaryCta.url}
            text={primaryCta.title}
            isPrimary={true}
          />
          {secondaryCta && (
            <CtaButton url={secondaryCta.url} text={secondaryCta.title} />
          )}
        </div>
      </section>
    </div>
  );
};

export default Hero;
