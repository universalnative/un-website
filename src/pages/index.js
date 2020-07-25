/**
 * Index page.
 *
 * The sole purpose of this page's existence is to redirect to the home page,
 * such that when a user visits the root url of site they are redirected to home.
 *
 * This client-side redirection becomes especially important in an SSG site.
 * Similar redirection in SSR mode is handled by App component.
 *
 * Unfortunately, redirecting to a named route is currently the only way to
 * serve content of the default page. We are using a catch-all route page [...slug]
 * as a template for all pages on the site. It does not handle the root route (/) by default.
 * There is support for an "optional" catch-all route page [[...slug]], but this support
 * is experimental at the moment. We haven't been able to get it to work correctly so far:
 * https://stackoverflow.com/questions/62335215/fixed-side-menu-on-an-specific-next-js-route/63025464#63025464
 *
 * @author Anurag Bhandari <ab@anuragbhandari.com>
 * @since  2020-07-24
 */

import { useEffect } from 'react';
import Router from 'next/router';

const Index = () => {
  useEffect(() => {
    Router.push('/home');
  }, []);

  return <></>;
};

export default Index;
