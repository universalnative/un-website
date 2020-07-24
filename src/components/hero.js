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
  background_image: bgImg,
}) => {
  return (
    <div className="hero mb-8 md:mb-20 lg:mb-0">
      <div className="lg:h-screen">
        <div className="hero-bg absolute lg:mt-0 top-0 left-0 bottom-0 right-0 min-w-full lg:min-h-full w-full lg:h-full overflow-hidden z-10">
          {bgVideo && (
            <video
              className="opacity-75 min-w-full"
              autoPlay={true}
              loop={true}
              muted={true}
            >
              <source src={bgVideo.url} type={bgVideo.mime_type} />
            </video>
          )}
          {bgImg && (
            <img className="bg-cover w-full" src={bgImg.sizes['2048x2048']} />
          )}
        </div>
        <section className="hero-content py-3 md:py-6 lg:py-20 lg:px-40 inline-block align-middle text-center relative top-0 left-0 bottom-0 right-0 min-w-full min-h-full w-full h-full z-20">
          <h3 className="hero-subtitle text-xs md:text-base lg:text-lg font-bold text-red-500 uppercase">
            {subtitle}
          </h3>
          <h2 className="hero-title text-lg md:text-2xl lg:text-5xl mt-3 lg:mt-8 text-white">
            {title}
          </h2>
          <h6 className="hero-desc hidden md:block mt-3 lg:mt-8 text-xs md:px-8 md:text-base text-gray-400">
            {description}
          </h6>
          <div className="hero-cta mt-4 lg:mt-12">
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
  secondary_cta: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  background_video: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  background_image: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};

export default Hero;
