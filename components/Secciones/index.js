import PropTypes from 'prop-types';
import Link from 'next/link';
import styles from './styles';
import { useState } from 'react';
import { colores } from '../../styles/theme';
import { addOpacityColor } from '../../styles/utils';
import Mapa from '../Mapa';

export default function SeccionImg({
  boton = null,
  descripcion,
  clases,
  imagen,
  imagenNombre,
  titulo,
  posicion,
  mapa = false,
}) {
  const [mostrarPopup, setMostrarPopup] = useState(false);
  const [mostrarArticulo, setMostrarArticulo] = useState(false);
  const handlePopupClick = () => {
    setMostrarPopup(!mostrarPopup);
  };
  const handleShowClick = () => {
    setMostrarArticulo(!mostrarArticulo);
  };
  return (
    <>
      <section className={clases ? clases : ' seccion__blanco animated fadeIn'}>
        {posicion == 'izquierda' ? (
          <>
            <div className="banner-img">
              <img src={imagen} alt={imagenNombre} />
            </div>
            <div className="banner-titulo">
              <h2>{titulo}</h2>
              <p>{descripcion}</p>
              {mostrarArticulo && (
                <div className="ver__mas">
                  <p>
                    En esta nueva página vas a poder consultar información,
                    datos importantes, asi como{' '}
                    <Link href="/inicio-sesion">
                      <a>consultar tus calificaciones</a>
                    </Link>
                    , y como última novedad, poder enviar reportes o consultas
                    acerca de las materias o respecto a los docentes.
                  </p>
                  <p>
                    O bien, si eres un docente o administrador, podrás inciar
                    sesión para acceder a la página con privilegios de
                    administrador.
                  </p>
                </div>
              )}
              {boton != null && (
                <button
                  onClick={!mapa ? handleShowClick : handlePopupClick}
                  className="boton-mas"
                >
                  {!mapa
                    ? !mostrarArticulo
                      ? boton.nombreTrue
                      : boton.nombreFalse
                    : !mostrarPopup
                    ? boton.nombreTrue
                    : boton.nombreFalse}
                </button>
              )}
            </div>
          </>
        ) : (
          <>
            <div className="banner-titulo">
              <h2>{titulo}</h2>
              <p>{descripcion}</p>
              {boton != null && (
                <button onClick={handlePopupClick} className="boton-mas">
                  {!mostrarPopup ? boton.nombreTrue : boton.nombreFalse}
                </button>
              )}
            </div>
            <div className="banner-img">
              <img src={imagen} alt={imagenNombre} />
            </div>
          </>
        )}
      </section>
      {mostrarPopup && (
        <div className="mapa_overlay">
          <div className="mapa_container">
            <button className="cerrar__mapa" onClick={handlePopupClick}>
              Cerrar
            </button>
            <Mapa h="75vh" w="75vw" />
          </div>
        </div>
      )}
      <style jsx>{`
        section {
          display: grid;
          max-height: calc(100vh - 75px);
          height: calc(100vh - 75px);
          overflow: hidden;
          padding: 60px;
          width: 100%;
          align-items: center;
        }
        section.seccion__blanco {
          grid-template-columns: 1.7fr 1fr;
          background: #fff;
        }
        section.seccion__gris {
          grid-template-columns: 1fr 1.7fr;
          background: #eee;
        }
        .banner-img {
          cursor: pointer;
          padding: 20px;
          transition: all ease 0.5s;
          overflow: hidden;
          width: 100%;
        }
        .banner-img:hover {
          transform: scale(1.01);
        }
        .banner-img img {
          width: 95%;
          margin: 0 auto;
        }
        .banner-titulo {
          font-size: 20px;
          width: 100%;
        }
        .banner-titulo h2 {
          color: ${colores.primario};
          font-size: 2.5em;
          font-weight: bolder;
          letter-spacing: 1px;
          text-shadow: 2px 2px 3px #000000;
        }
        .banner-titulo p {
          color: #1b1b1b;
          font-size: 1.2em;
          font-weight: 500;
          padding: 20px 0;
          text-shadow: 2px 2px 3px ${addOpacityColor('#1b1b1b', 0.3)};
        }
        button.boton-mas {
          background: ${colores.primario};
          border: 0;
          border-radius: 1000px;
          color: #fafafa;
          cursor: pointer;
          padding: 15px 30px;
          text-shadow: 1px 1px 1px #222;
          text-decoration: none;
          transition: ease all 0.4s;
        }
        button.boton-mas:hover {
          box-shadow: 3px 3px 5px 1px ${addOpacityColor('#222222', 0.3)};
          opacity: 0.95;
          transform: scale(1.03);
        }
        button.boton-mas:focus {
          border: 0;
          outline: none;
        }
        div.mensaje {
          text-align: center;
          color: ${colores.primario};
          position: absolute;
          z-index: 200;
          font-weight: bold;
          top: 100px;
          left: 50%;
        }
        div.mapa_overlay {
          backdrop-filter: blur(10px);
          background: ${addOpacityColor('#000000', 0.2)};
          position: fixed;
          z-index: 1000;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        div.mapa_container {
          background: #f8f8f8;
          box-shadow: 0px 0px 5px 0px ${addOpacityColor('#000000', 0.4)};
          padding: 60px 0;
          border-radius: 20px;
        }
        button.cerrar__mapa {
          border: 0;
          background: #f8f8f8;
          color: ${colores.negro};
          font-weight: 500;
          cursor: pointer;
          font-size: 1.05em;
          position: fixed;
          z-index: 550;
          margin: 0.5em;
          padding: 0.5em 0.6em;
          border-radius: 0.3em;
          text-shadow: 1px 1px 2px ${addOpacityColor('#000000', 0.3)};
          box-shadow: 0px 0px 5px 0px ${addOpacityColor('#000000', 0.5)};
          transition: all ease 0.3s;
        }
        button.cerrar__mapa:hover {
          opacity: 0.9;
        }
        button.cerrar__mapa:focus {
          border: 0;
          outline: none;
        }
        .ver__mas {
          margin-bottom: 1.5em;
        }
        .ver__mas p {
          font-size: 1rem;
          padding: 8px 5px;
        }
        .ver__mas p a {
          color: ${colores.primario};
          text-decoration: none;
          font-weight: 600;
        }
        @media screen and (min-width: 1500px) {
          .banner-titulo {
            font-size: 27px;
          }
          button.boton-mas {
            font-size: 1em;
          }
          button.cerrar__mapa {
            font-size: 1.2em;
          }
        }
        @media screen and (max-width: 1100px) {
          section.seccion__blanco {
            grid-template-columns: 1fr;
          }
          section.seccion__gris {
            grid-template-columns: 1fr;
            justify-content: center;
          }
          .banner-titulo {
            font-size: 27px;
          }
          button.boton-mas {
            font-size: 1em;
          }
          button.cerrar__mapa {
            font-size: 1.2em;
          }
          .ver__mas p {
            font-size: 1.5rem;
            padding: 8px 5px;
          }
          .ver__mas p a {
            font-size: 1.5rem;
          }
        }
        @media screen and (max-width: 800px) {
          .banner-titulo {
            text-align: center;
          }
          div.mapa_container {
            padding: 40px 0;
          }
        }
        @media screen and (max-width: 600px) {
          section {
            padding: 30px;
          }
          .banner-titulo {
            font-size: 18px;
          }
          button.boton-mas {
            font-size: 1em;
          }
          button.cerrar__mapa {
            font-size: 0.8em;
          }
          .ver__mas p {
            font-size: 0.8rem;
          }
          .ver__mas p a {
            font-size: 0.8rem;
          }
        }
        @media screen and (max-width: 400px) {
          section {
            padding: 25px;
          }
          .banner-titulo {
            font-size: 17px;
          }
        }
        @media screen and (max-width: 350px) {
          .banner-titulo {
            font-size: 16px;
          }
        }
        @media screen and (max-width: 290px) {
          .banner-titulo {
            font-size: 15px;
          }
        }
        @media screen and (max-height: 450px) {
          .banner-titulo {
            font-size: 15px;
          }
          .banner-titulo h2 {
            font-size: 2.1em;
          }
        }
      `}</style>
      <style jsx>{styles}</style>
    </>
  );
}
SeccionImg.propTypes = {
  boton: PropTypes.object,
  descripcion: PropTypes.string.isRequired,
  clases: PropTypes.string,
  imagen: PropTypes.string,
  imagenNombre: PropTypes.string,
  mapa: PropTypes.bool,
  posicion: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
};
