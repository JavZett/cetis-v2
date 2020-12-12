import AppLayout from '../components/AppLayout';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <meta
          name="keywords"
          content="Cetis, Cetis30, cetis 30, uemstis, escuela, sitio oficial"
        />
        <title>Carreras: Cetis 30</title>
      </Head>

      <AppLayout>
        <h1>Carreras</h1>
      </AppLayout>
    </>
  );
}
