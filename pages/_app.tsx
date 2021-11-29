import 'tailwindcss/tailwind.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'styles/global.css';
import React from 'react';

interface AppProps {
  Component: React.ElementType;
  pageProps: {
    [key: string]: unknown;
  };
}

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <Component {...pageProps} />
);

export default MyApp;
