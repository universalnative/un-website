import React from 'react';
import PropTypes from 'prop-types';

const ContentWithPreview = (props) => {
  return <div {...props}>Content with Preview</div>;
};

ContentWithPreview.propTypes = {
  image_preview: PropTypes.object,
  preview_position: PropTypes.string,
  title: PropTypes.string,
  video_preview: PropTypes.string,
};

export default ContentWithPreview;
