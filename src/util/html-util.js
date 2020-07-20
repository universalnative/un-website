/**
 * Helper functions to work with html, jsx and markup.
 *
 * @author Anurag Bhandari <ab@anuragbhandari.com>
 * @since  2020-07-19
 */

'use strict';

import * as sanitize from 'sanitize-html';

/**
 * Sanitizes an html string to protect from XSS attack.
 * Useful while attaching an html string in JSX with `dangerouslySetInnerHtml`.
 *
 * @param {string} str String to sanitize.
 */
export const sanitizeHtml = (str) => {
  return sanitize(str, {
    allowedTags: sanitize.defaults.allowedTags.concat(['iframe', 'img']),
    allowedAttributes: {
      ...sanitize.defaults.allowedAttributes,
      iframe: [
        'src',
        'title',
        'width',
        'height',
        'frameborder',
        'allow',
        'allowfullscreen',
      ],
      img: ['src', 'width', 'height', 'class'],
    },
    allowedIframeHostnames: ['www.youtube.com'],
  });
};
