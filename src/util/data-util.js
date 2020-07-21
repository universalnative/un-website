/**
 * Helper functions to work with data entities.
 *
 * @author Anurag Bhandari <ab@anuragbhandari.com>
 * @since  2020-07-14
 */

'use strict';

/**
 * Returns title string from a WordPress title object..
 *
 * @param {Object} wpTitle The title object as received from WP REST API.
 */
export const extractTitle = (wpTitle) => {
  return wpTitle.rendered || '';
};

/**
 * Returns a props-friendly object based on given data object.
 *
 * By default, WP API returns too much information about a resource (post type, taxanomy, etc.).
 * All interesting data is wrapped in the "acf" property through the use of ACF to WP API
 * WordPress plugin. The only exception is resource's title, which is returned in the root of data object.
 *
 * @param {Object} json The data object as received from WP REST API.
 */
export const wpJsonToProps = (json) => {
  if (!json || !json.acf) {
    return {};
  }

  return {
    title: extractTitle(json.title),
    ...json.acf,
  };
};
