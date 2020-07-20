import React from 'react';
import PropTypes from 'prop-types';

import CtaButton from './cta-button';

const Hero = ({
  title,
  subtitle,
  description,
  primary_cta: primaryCta,
  secondary_cta: secondaryCta,
  background_video: bgVideo,
}) => {
  return (
    <div className="hero">
      <div className="h-screen">
        <div className="hero-bg-video absolute top-0 left-0 bottom-0 right-0 min-w-full min-h-full w-full h-full overflow-hidden z-10">
          <video autoPlay={true} loop={true} muted={true}>
            <source src={bgVideo.url} type={bgVideo.mime_type} />
          </video>
        </div>
        <section className="hero-content py-20 px-40 inline-block align-middle text-center relative top-0 left-0 bottom-0 right-0 min-w-full min-h-full w-full h-full z-20">
          <h3 className="hero-subtitle text-lg font-bold text-red-500 uppercase">
            {subtitle}
          </h3>
          <h2 className="hero-title text-5xl mt-8 text-white">{title}</h2>
          <h6 className="hero-desc mt-8 text-gray-400">{description}</h6>
          <div className="hero-cta mt-12">
            <span className="mx-3">
              <CtaButton
                url={primaryCta.url}
                text={primaryCta.title}
                isPrimary={true}
              />
            </span>
            {secondaryCta && (
              <span className="mx-3">
                <CtaButton url={secondaryCta.url} text={secondaryCta.title} />
              </span>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

Hero.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  primary_cta: PropTypes.object,
  secondary_cta: PropTypes.object,
  background_video: PropTypes.object,
};

export default Hero;
