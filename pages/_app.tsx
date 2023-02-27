import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const blob = document.getElementById('blob');

    document.body.onpointermove = (event) => {
      const { clientX, clientY } = event;

      blob?.animate(
        {
          left: `${clientX}px`,
          top: `${clientY}px`,
        },
        { duration: 3000, fill: 'forwards' }
      );
    };
  }, []);

  return (
    <ThemeProvider attribute="class" enableSystem={true}>
      <div id="blob"></div>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
