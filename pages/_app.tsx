import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider, useTheme } from 'next-themes';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const { theme, setTheme } = useTheme();
  // useEffect(() => {
  //   const blob = document.getElementById('blob');

  //   document.body.onpointermove = (event) => {
  //     const { clientX, clientY } = event;

  //     blob?.animate(
  //       {
  //         left: `${clientX}px`,
  //         top: `${clientY}px`,
  //       },
  //       { duration: 3000, fill: 'forwards' }
  //     );
  //   };
  // }, []);

  return (
    <ThemeProvider attribute="class" enableSystem={true}>
      {/* <div id="blob" className="collapse sm:visible"></div> */}
      <div className="dark:text-white text-black">
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
