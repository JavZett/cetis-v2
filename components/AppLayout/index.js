import Navbar from '../Navbar';
import Head from 'next/head';
import { globalStyles } from './styles';
import { useState } from 'react';
import LoadingComponent from '../LoadingComponent';
import Footer from '../Footer';

export default function AppLayout({ children }) {
  const [cargando, setCargando] = useState(true);
  setTimeout(() => {
    setCargando(false);
  }, 900);
  return (
    <>
      <>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" href="/logoCetis.png" />
        </Head>
        {!cargando ? (
          <>
            <header>
              <Navbar />
            </header>
            <main>{children}</main>
            <Footer />
          </>
        ) : (
          <LoadingComponent />
        )}
      </>
      <style jsx global>
        {globalStyles}
      </style>
      <style jsx>{`
        header {
          position: sticky;
          top: 0;
          z-index: 400;
        }
      `}</style>
    </>
  );
}
