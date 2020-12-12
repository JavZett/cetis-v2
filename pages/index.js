import AppLayout from '../components/AppLayout';
import Head from 'next/head';
import SeccionImg from '../components/Secciones';

export default function Home() {
  const seccion_1 = {
    titulo: 'Cetis 30 Oficial',
    descripcion:
      '¡Bienvenido a tu nuevo portal!, decidimos mejorar nuestro portal web para que tengas una mejor experiencia de usuario.',
    imagen: '/banner-cetis-30.svg',
    imagenNombre: 'cetis-30-ilustracion',
    posicion: 'izquierda',
    boton: {
      nombreTrue: 'Ver más',
      nombreFalse: 'Ver menos',
    },
  };

  const seccion_2 = {
    titulo: 'Nivel educativo',
    descripcion:
      'Ocupamos el tercer lugar en calidad educativa a nivel nacional y el suegundo lugar de todos los Cetis.',
    imagen: '/educacion.svg',
    imagenNombre: 'cetis-30-educacion',
    posicion: 'derecha',
    clases: 'seccion__gris',
  };

  const seccion_3 = {
    titulo: 'Ubicación Cetis 30',
    descripcion:
      'Localizanos fácilmente: Cienfuegos 1017, Col. San Pedro Zacatenco, Alcaldía Gustavo A. Madero, Ciudad de México, C.P. 07360',
    imagen: '/mapa.svg',
    imagenNombre: 'cetis-30-ubicacion',
    posicion: 'izquierda',
    boton: {
      nombreTrue: 'Ver mapa',
      nombreFalse: 'Ocultar mapa',
    },
  };

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="Cetis 30" content="Cetis 30 sitio ofical" />
        <meta
          name="description"
          content="Centro de Estudios Tecnológicos, Industriales y de Servicios 30  "
        />
        <meta
          name="keywords"
          content="Cetis, Cetis30, cetis 30, uemstis, escuela, sitio oficial"
        />
        <title>CETIS 30</title>
      </Head>
      <AppLayout>
        <SeccionImg
          titulo={seccion_1.titulo}
          descripcion={seccion_1.descripcion}
          imagen={seccion_1.imagen}
          imagenNombre={seccion_1.imagenNombre}
          posicion={seccion_1.posicion}
          boton={seccion_1.boton}
        />
        <SeccionImg
          titulo={seccion_2.titulo}
          descripcion={seccion_2.descripcion}
          imagen={seccion_2.imagen}
          imagenNombre={seccion_2.imagenNombre}
          posicion={seccion_2.posicion}
          clases={seccion_2.clases}
        />
        <SeccionImg
          titulo={seccion_3.titulo}
          descripcion={seccion_3.descripcion}
          imagen={seccion_3.imagen}
          imagenNombre={seccion_3.imagenNombre}
          posicion={seccion_3.posicion}
          boton={seccion_3.boton}
          mapa={true}
        />
      </AppLayout>
    </>
  );
}
