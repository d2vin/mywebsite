import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme={'dark'}>
      <div className="dark:text-white text-black">
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
