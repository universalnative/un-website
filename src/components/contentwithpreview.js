/**
 * ContentWithPreview component.
 *
 * Displays content (heading + text) along with an image or video on left or right of content.
 *
 * @author Anurag Bhandari <ab@anuragbhandari.com>
 * @since  2020-07-20
 */

import React from 'react';
import PropTypes from 'prop-types';

import { sanitizeHtml } from '../util/html-util';
import CtaButton from '../components/cta-button';

const renderPreview = (imagePreview, videoPreview, previewPosition) => {
  let preview = '<div></div>';

  if (imagePreview) {
    preview = `<img src="${imagePreview.sizes.medium_large}" alt="${
      imagePreview.alt || imagePreview.title
    }" class="min-w-full lg:max-w-none" />`;
  }

  if (videoPreview) {
    preview = videoPreview;
  }

  return (
    <div
      className={`cwp-preview mx-auto ${
        previewPosition === 'left' ? 'lg:mr-5 mb-5' : 'lg:ml-5 mt-8'
      }`}
      dangerouslySetInnerHTML={{
        __html: sanitizeHtml(preview),
      }}
    ></div>
  );
};

const ContentWithPreview = ({
  title,
  content,
  image_preview,
  video_preview,
  preview_position,
  cta,
}) => {
  return (
    <section className="cwp flex flex-wrap lg:flex-no-wrap items-center lg:mx-16 my-5">
      {preview_position === 'left' &&
        renderPreview(image_preview, video_preview, preview_position)}

      <div className="cwp-content mx-4 lg:mx-0 lg:ml-5 flex-grow w-full">
        <h3 className="cwp-content-heading text-3xl">{title}</h3>
        <div
          className="cwp-content-text mt-5 text-gray-600"
          dangerouslySetInnerHTML={{ __html: sanitizeHtml(content) }}
        ></div>
        {cta && (
          <div className="cwp-cta mt-10">
            <CtaButton url={cta.url} text={cta.title} isPrimary={true} />
          </div>
        )}
      </div>

      {preview_position === 'right' &&
        renderPreview(image_preview, video_preview, preview_position)}
    </section>
  );
};

ContentWithPreview.propTypes = {
  content: PropTypes.string,
  cta: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  image_preview: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  preview_position: PropTypes.string,
  title: PropTypes.string,
  video_preview: PropTypes.string,
};

export default ContentWithPreview;
