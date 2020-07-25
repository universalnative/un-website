/**
 * Global configuration.
 *
 * @author Anurag Bhandari <ab@anuragbhandari.com>
 * @since  2020-05-18
 */

let wpUrl = 'http://localhost:8080/wp-json';

if (process.env.HOME === '/home/node') {
  // If we're running on Docker, use the WordPress container hostname instead of localhost.
  wpUrl = `${process.env.WORDPRESS_URL_INTERNAL}/wp-json`;
} else if (process.env.NETLIFY === 'true') {
  // If we're running on Netlify, use the WordPress external hostname instead of localhost.
  wpUrl = `${process.env.WORDPRESS_URL_EXTERNAL}/wp-json`;
}
const Config = {
  apiUrl: wpUrl,
  AUTH_TOKEN: 'auth-token',
  USERNAME: 'username',
};

export default Config;
