import '../styles/globals.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

import { Analytics } from '@vercel/analytics/react';
config.autoAddCss = false;

export default function MyApp({ Component, pageProps: { ...pageProps } }) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
