import React from 'react';
import PropTypes from 'prop-types';

import { sanitizeHtml } from '../util/html-util';
import CtaButton from '../components/cta-button';

const renderPreview = (imagePreview, videoPreview, previewPosition) => {
  let preview = '<div></div>';

  if (imagePreview) {
    preview = `<img src="${imagePreview.sizes.medium_large}" alt="${
      imagePreview.alt || imagePreview.title
    }" class="max-w-xs md:max-w-md lg:max-w-none" />`;
  }

  if (videoPreview) {
    preview = videoPreview;
  }

  return (
    <div
      className={`cwp-preview ${
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
    <section className="cwp flex flex-wrap lg:flex-no-wrap items-center mx-8 lg:mx-16 my-5">
      {preview_position === 'left' &&
        renderPreview(image_preview, video_preview, preview_position)}

      <div className="cwp-content lg:ml-5 flex-grow w-full">
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
  cta: PropTypes.object,
  image_preview: PropTypes.object,
  preview_position: PropTypes.string,
  title: PropTypes.string,
  video_preview: PropTypes.string,
};

export default ContentWithPreview;