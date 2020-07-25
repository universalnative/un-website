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
