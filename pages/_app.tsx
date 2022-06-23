import '../styles/globals.css';
import 'remixicon/fonts/remixicon.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

// Favicon
import favicon from '../public/favicon.ico';
import LoadingPage from '../shared/LoadingPage';
import UserLayout from '../layout/UserLayout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from '../auth/AuthContext';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const rutasPublicas = ['/iniciar', '/registrarse'];
  const rutasPrivadas = ['/usuario'];
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      if (rutasPublicas.includes(router.route)) router.push('/');
      setTimeout(() => setLoading(true), 2000);
      return;
    }
    if (rutasPrivadas.includes(router.route)) router.push('/');
    setTimeout(() => setLoading(true), 2000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.route]);

  return (
    <AuthProvider>
      <>
        <Head>
          <title>ECOCLEAN {router.route === '/' ? '' : router.route.replace('/', '- ').toUpperCase()}</title>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
          <link rel="icon" type="image/png" href={favicon.src}></link>
        </Head>
        <ToastContainer />
        {loading && (
          <>
            {rutasPublicas.includes(router.route) ? (
              <Component {...pageProps} />
            ) : (
              <UserLayout>
                <Component {...pageProps} />
              </UserLayout>
            )}
          </>
        )}
        {!loading && <LoadingPage />}
      </>
    </AuthProvider>
  );
}

export default MyApp;
