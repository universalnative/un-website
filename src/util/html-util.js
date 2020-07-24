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
      iframe: ['src', 'title', 'frameborder', 'allow', 'allowfullscreen'],
      img: ['src', 'width', 'height', 'class'],
      p: ['style'],
      span: ['style'],
    },
    allowedIframeHostnames: ['www.youtube.com'],
  });
};

/**
 * Returns a title-cased string for the given slug.
 *
 * So, home becomes Home. Similarly, about-us becomes About Us.
 *
 * @param {string} slug The slug string to convert into title.
 */
export const makeTitle = (slug) => {
  var words = slug.split('-');

  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    words[i] = word.charAt(0).toUpperCase() + word.slice(1);
  }

  return words.join(' ');
};
