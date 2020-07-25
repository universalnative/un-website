/**
 * Hero component.
 *
 * Shows fullscreen content (title + subtitle + description) on top of an image or video background.
 * When present, it is the only above-the-fold content component on a page.
 *
 * @author Anurag Bhandari <ab@anuragbhandari.com>
 * @since  2020-06-12
 */

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
    <div className="hero">
      <div className="h-screen table w-full">
        <div className="hero-bg">
          {bgImg && (
            <div
              className="hero-bg-img absolute top-0 left-0 right-0 bottom-0 min-h-full bg-cover bg-center"
              style={{
                backgroundImage: `url(${bgImg.sizes['2048x2048']})`,
              }}
            ></div>
          )}
          {!bgImg && bgVideo && (
            <div className="hero-bg-vid">
              <video
                className="absolute min-w-full min-h-full w-auto h-auto bg-cover"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: 'translateX(-50%) translateY(-50%)',
                }}
                autoPlay={true}
                loop={true}
                muted={true}
              >
                <source src={bgVideo.url} type={bgVideo.mime_type} />
              </video>
            </div>
          )}
        </div>
        <section className="hero-content table-cell mx-auto align-middle text-center relative top-0 left-0 bottom-0 right-0 z-20">
          <h3 className="hero-subtitle text-xs md:text-base lg:text-lg font-bold text-red-500 uppercase inline-block bg-black p-2 bg-opacity-50 rounded-md">
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
