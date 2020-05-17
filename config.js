let wpUrl = 'http://localhost:8080/wp-json';

// If we're running on Docker, use the WordPress container hostname instead of localhost.
if (process.env.HOME === '/home/node') {
  wpUrl = `${process.env.WORDPRESS_URL_INTERNAL}/wp-json`;
}
const Config = {
  apiUrl: wpUrl,
  AUTH_TOKEN: 'auth-token',
  USERNAME: 'username',
};

export default Config;
