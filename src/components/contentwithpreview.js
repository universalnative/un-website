import React from 'react';
import PropTypes from 'prop-types';

import { sanitizeHtml } from '../util/html-util';
import CtaButton from '../components/cta-button';

const renderPreview = (imagePreview, videoPreview) => {
  let preview = '<div></div>';

  if (imagePreview) {
    preview = `<img src="${imagePreview.sizes.medium_large}" alt="${
      imagePreview.alt || imagePreview.title
    }" width="${imagePreview.sizes['medium_large-width']}" height="${
      imagePreview.sizes['medium_large-height']
    }" class="max-w-none" />`;
  }

  if (videoPreview) {
    preview = videoPreview;
  }

  return (
    <div
      className="cwp-preview mr-5"
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
    <section className="cwp flex flex-row items-center mx-16 my-5">
      {preview_position === 'left' &&
        renderPreview(image_preview, video_preview)}

      <div className="cwp-content ml-5">
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
        renderPreview(image_preview, video_preview)}
    </section>
  );
};

ContentWithPreview.propTypes = {
  content: PropTypes.string,
  cta: PropTypes.object,
  image_preview: PropTypes.object,
  preview_position: PropTypes.string,
  title: PropTypes.string,
  video_preview: PropTypes.string,
};

export default ContentWithPreview;
