/**
 * App component.
 *
 * The root component that wraps all other components.
 * Global configurations and CSS imports end up here.
 *
 * @author Anurag Bhandari <ab@anuragbhandari.com>
 * @since  2020-06-12
 */

import App from 'next/app';

import '../styles/index.css';
import '@brainhubeu/react-carousel/lib/style.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  // check that we are in SSR mode (NOT static and NOT client-side)
  if (typeof window === 'undefined' && appContext.ctx.res.writeHead) {
    if (
      appContext.router.pathname === '' ||
      appContext.router.pathname === '/_error'
    ) {
      appContext.ctx.res.writeHead(302, { Location: '/home' });
      appContext.ctx.res.end();
    }
  }
  return { ...appProps };
};

export default MyApp;
