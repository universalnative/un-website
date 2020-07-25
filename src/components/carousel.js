/**
 * Carousel component.
 *
 * Displays upto 5 images in a slide-based carousel layout.
 *
 * @author Anurag Bhandari <ab@anuragbhandari.com>
 * @since  2020-07-25
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';
import { Dots, slidesToShowPlugin } from '@brainhubeu/react-carousel';

const ReactCarousel = dynamic(() => import('@brainhubeu/react-carousel'), {
  ssr: false,
});

const Carousel = (props) => {
  const slidesData = [];
  slidesData.push({
    imgUrl: props.slide_1_image.sizes.medium_large,
    desc: props.slide_1_description,
  });
  props.slide_2_image &&
    slidesData.push({
      imgUrl: props.slide_2_image.sizes.medium_large,
      desc: props.slide_2_description,
    });
  props.slide_3_image &&
    slidesData.push({
      imgUrl: props.slide_3_image.sizes.medium_large,
      desc: props.slide_3_description,
    });
  props.slide_4_image &&
    slidesData.push({
      imgUrl: props.slide_4_image.sizes.medium_large,
      desc: props.slide_4_description,
    });
  props.slide_5_image &&
    slidesData.push({
      imgUrl: props.slide_5_image.sizes.medium_large,
      desc: props.slide_5_description,
    });

  const slides = slidesData.map((s) => <img src={s.imgUrl} alt={s.desc} />);

  const [selectedSlide, setSelectedSlide] = useState(0);

  const onSlideChanged = (slideIndex) => {
    setSelectedSlide(slideIndex);
  };

  return (
    <div className="carousel mx-4 lg:mx-16 my-5">
      <h3 className="carousel-title text-3xl">{props.title}</h3>
      <div className="carousel-container mt-3">
        <ReactCarousel
          plugins={[
            'infinite',
            'centered',
            'arrows',
            {
              resolve: slidesToShowPlugin,
              options: {
                numberOfSlides: 1,
              },
            },
          ]}
          slides={slides}
          value={selectedSlide}
          onChange={onSlideChanged}
        ></ReactCarousel>

        <Dots
          value={selectedSlide}
          onChange={onSlideChanged}
          number={slides.length}
        />

        <div className="text-center mt-3">
          {slidesData[selectedSlide % slidesData.length].desc}
        </div>
      </div>
    </div>
  );
};

Carousel.propTypes = {
  slide_1_image: PropTypes.object,
  slide_1_description: PropTypes.string,
  slide_2_image: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  slide_2_description: PropTypes.string,
  slide_3_image: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  slide_3_description: PropTypes.string,
  slide_4_image: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  slide_4_description: PropTypes.string,
  slide_5_image: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  slide_5_description: PropTypes.string,
};

export default Carousel;
