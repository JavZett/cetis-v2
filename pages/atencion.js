import AppLayout from '../components/AppLayout';
import Head from 'next/head';
import { colores } from '../styles/theme';
import Docente from '../components/Docente';
import { useEffect, useState } from 'react';
import { addOpacityColor } from '../styles/utils';
import {FaTimes} from 'react-icons/fa';

export default function Atencion({ docentes }) {
  const [mostrarDocentes, setMostrarDocentes] = useState(true);
  const [mostrarQuejas, setMostrarQuejas] = useState(false);
  useEffect(() => {
    if (window.screen.width < 800) {
      console.log('a');
      setMostrarDocentes(false);
    }
  }, []);

  const handleClickDocentes = () => {
    setMostrarDocentes(!mostrarDocentes);
  };

  const handleClickQuejas = () => {
    setMostrarQuejas(!mostrarQuejas);
  }

  return (
    <>
      <Head>
        <meta
          name="keywords"
          content="Cetis, Cetis30, atencion, quejas, cetis quejas"
        />
        <title>Atención: Cetis 30</title>
      </Head>

      <AppLayout>
        <>
          <div className="atencion-cetis__header animated fadeIn">
            <img src="/atencion.svg" alt="atencion cetis" />
            <div className="atencion-cetis__texto">
              <h2>Atención Cetis 30</h2>
              <p>
                Bienvenido a la página de atención, aqui podrás recibir atención
                por parte del personal administrativo así como consultar
                infomación acerca del personal docente.
              </p>
            </div>
          </div>
          <hr />
          <div className="docentes-info">
            <h2>Docentes en nuestro plantel</h2>
            <p>
              Hay {docentes.length} docentes registrados,{' '}
              <span onClick={handleClickDocentes}>
                ¿deseas {!mostrarDocentes ? 'mostrarlos' : 'ocultarlos'}?
              </span>
            </p>
          </div>
          {mostrarDocentes && (
            <div className="docentes fast fadeIn">
              {docentes.map((docente) => (
                <Docente docente={docente} key={docente._id} />
              ))}
            </div>
          )}
          <section>
            <img src="/quejas.svg" alt="quejas-cetis" />
            <div className="texto">
              <h2>Atención y Quejas</h2>
              <h3>¿Tienes algún inconveniente, duda o sugerencía?</h3>
              <p className="texto-texto">
                Puedes ponerte en contacto usando el correo electrónico, o bien,
                puedes contarnos aquí: escolares@cetis030.edu.mx
              </p>
              <button onClick={handleClickQuejas}>Cuentanos</button>
            </div>
          </section>
          {mostrarQuejas && <div className="overlay">
              <div className="quejas">
                <FaTimes className="cerrar-quejas" onClick={handleClickQuejas}/>
                <form>
                  <h4>Cuentanos...</h4>
                  <input type="text" placeholder="¿Cúal es el asunto?" />
                  <input type="email" placeholder="Dejanos tu correo"/>
                  <input type="nombre" placeholder="Danos tu nombre completo"/>
                  <textarea name="asunto" placeholder="Cuentanos acerca de ello..."/>
                  <button>Enviar</button>
                </form>
              </div>
          </div>}

          <style jsx>{`
            .animated {
              -webkit-animation-duration: 1s;
              animation-duration: 1s;
              -webkit-animation-fill-mode: both;
              animation-fill-mode: both;
            }
            .fast {
              -webkit-animation-duration: 0.4s;
              animation-duration: 0.4s;
              -webkit-animation-fill-mode: both;
              animation-fill-mode: both;
            }
            @keyframes fadeIn {
              from {
                opacity: 0;
              }
              to {
                opacity: 1;
              }
            }
            .fadeIn {
              animation-name: fadeIn;
            }
            div.atencion-cetis__header {
              margin: 1.5em auto;
              padding: 0 2em;
              width: 90%;
              overflow: hidden;
              margin-bottom: 2em;
              display: grid;
              grid-template-columns: 1fr 2fr;
              align-items: center;
              justify-items: center;
            }
            .atencion-cetis__texto {
              font-size: 30px;
              margin-left: 2em;
            }
            h2 {
              color: ${colores.primario};
              text-shadow: 2px 2px 3px #000000;
            }
            .atencion-cetis__texto h2 {
              font-size: 2.5em;
              font-weight: bolder;
              letter-spacing: 1px;
            }

            .atencion-cetis__texto p {
              padding: 0.3em;
              font-size: 0.8em;
            }

            .atencion-cetis__header img {
              width: 100%;
            }
            hr {
              width: 90%;
              margin: auto;
              border: 1px solid #eee;
            }
            .docentes {
              display: grid;
              grid-gap: 1em;
              grid-template-columns: repeat(4, 1fr);
              width: 90%;
              margin: 4em auto;
            }
            .docentes-info {
              width: 90%;
              margin: 1em auto 1em auto;
              font-size: 18px;
            }
            .docentes-info h2 {
              font-size: 2.5em;
            }
            .docentes-info p {
              font-size: 1.3em;
              margin-top: 1em;
            }
            .docentes-info span {
              color: ${colores.primario};
              font-weight: 500;
              cursor: pointer;
              font-size: 23px;
            }
            section {
              width: 100%;
              display: grid;
              grid-template-columns: 1.7fr 1fr;
              max-height: calc(100vh - 75px);
              height: calc(100vh - 75px);
              overflow: hidden;
              padding: 60px 40px;
              align-items: center;
              background: #eee;
            }
            section img {
              width: 90%;
              display: block;
              margin: auto;
            }
            section .texto {
              width: 100%;
              padding: 10px;
              font-size: 20px;
            }
            .texto h2 {
              font-size: 2.5em;
              margin-bottom: 0.2em;
            }
            .texto h3 {
              font-size: 1em;
            }
            .texto .texto-texto {
              font-size: 0.8em;
            }
            .texto p {
              font-weight: 500;
              margin: 0.25em 0;
            }
            .texto button {
              padding: 12px 20px;
              border: 0;
              outline: 0;
              background: ${colores.primario};
              cursor: pointer;
              border-radius: 10px;
              color: #fafafa;
              text-shadow: 1px 1px 1px ${addOpacityColor('#141414', 0.4)};
              transition: all ease 0.3s;
              margin: 0.5em 0;
            }
            .texto button:hover {
              opacity: 0.85;
              box-shadow: 0px 0px 7px 0px ${addOpacityColor('#141414', 0.5)};
            }
            .overlay {
              top: 0;
              bottom: 0;
              left: 0;
              right: 0;
              display: flex;
              justify-content: center;
              align-items: center;
              position: fixed;
              z-index: 1000;
              background: ${addOpacityColor('#f8f8f8', 0.3)};
              backdrop-filter: blur(10px);
            }
            .quejas {
              font-size: 20px;
              display: grid;
              align-items: center;
              grid-template-columns: 1fr;
              background: #f7f7f7;
              border-radius: 10px;
              padding: 20px;
              width: 60%;
              box-shadow: 0px 0px 8px 0px ${addOpacityColor(colores.negro, 0.5)};
            }
            .quejas form {
              display: grid;
              align-items: center;
              grid-template-columns: 1fr;
              padding: 20px;
              width: 95%;
              margin: auto;
            }
            .quejas form input {
              padding: 15px;
              outline: 0;
            }
            input:focus {
              outline: 0;
              border: 0;
            }
            .quejas form h4 {
              margin-bottom: 0.5em;
              font-size: 2em;
            }
            div.quejas > :global(svg.cerrar-quejas) {
              justify-self: end;
              color: ${colores.negro};
              opacity: 0.7;
              transition: all ease 0.3s;
              cursor: pointer;
              font-size: 1em;
            }
            div.quejas > :global(svg.cerrar-quejas:hover) {
              opacity: 1;
            }
            @media screen and (max-width: 1050px) {
              .docentes {
                grid-template-columns: repeat(2, 1fr);
              }
            }
            @media screen and (max-width: 760px) {
              .docentes {
                grid-template-columns: 1fr;
              }
            }
          `}</style>
        </>
      </AppLayout>
    </>
  );
}

Atencion.getInitialProps = async (conext) => {
  const res = await fetch(
    'https://api-proyecto-escuela.herokuapp.com/docentes?limite=30'
  );
  const json = await res.json();
  return { docentes: json.docentes };
};
