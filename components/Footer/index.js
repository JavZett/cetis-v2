import { colores } from '../../styles/theme';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer>
        <div className="escuela">
          <div className="logos-cetis">
            <img
              src="/logoCetis.svg"
              alt="logo cetis-30"
              className="cetis-logo-footer"
            />
          </div>
          <div className="info-cetis-footer">
            <h4>CETIS 30</h4>
            <h5>
              {' '}
              Centro de Estudios Tecnológicos industrial y de servicios No. 30
              "Emiliano Zapata"
            </h5>
            <h6>
              Unidad de Educación Media Superior Tecnológica Industrial y de
              Servicios
            </h6>
            <a href="/aviso.pdf" target="_blank" rel="noreferrer">
              Aviso de privacidad
            </a>
          </div>
        </div>
        <div className="desarrollador">
          <div className="info-desarrollo">
            <h4>Cetis, desarollo {currentYear}</h4>
            <h5>
              Negtune Services<small> &copy;</small>
            </h5>
            <p>Javier Zetina</p>
          </div>
          <img
            src="/ElMariachi.svg"
            alt="Desarrollador Logo"
            className="mariachi-logo-footer"
          />
        </div>
      </footer>
      <style jsx>{`
        footer {
          background: ${colores.primario};
          padding: 20px 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          bottom: 0;
          width: 100%;
          z-index: 200;
        }
        .cetis-logo-footer,
        .sep-logo-footer,
        .mariachi-logo-footer {
          height: 120px;
        }

        .escuela,
        .desarrollador {
          display: flex;
          align-items: center;
        }

        footer h4,
        footer h5,
        footer h6,
        footer p,
        footer a {
          color: #f7f7f7;
          font-weight: normal;
          text-decoration: none;
          margin: 3px 10px;
          text-shadow: 1px 1px 3px #000000;
        }

        footer h4 {
          font-size: 1.1em;
          font-weight: bold;
          letter-spacing: 1px;
        }

        footer h5,
        footer h6 {
          font-size: 0.9em;
        }

        footer p,
        footer a {
          font-size: 1em;
        }

        footer a {
          padding: 8px;
          text-align: center;
          display: block;
          margin: 8px;
          border: #f7f7f7 solid 2px;
          border-radius: 8px;
          transition: all ease 0.3s;
        }

        footer a:hover {
          background: #f7f7f7;
          color: #000000;
          text-shadow: 1px 1px 2px #00000030;
          box-shadow: 2px 2px 3px #00000050;
        }

        .info-cetis-footer {
          margin-left: 0.5em;
        }

        .info-desarrollo {
          text-align: right;
        }

        @media screen and (max-width: 1050px) {
          .cetis-logo-footer,
          .sep-logo-footer,
          .mariachi-logo-footer {
            height: 100px;
          }
          footer h4 {
            font-size: 1em;
          }

          footer h5,
          footer h6 {
            font-size: 0.8em;
          }

          footer p,
          footer a {
            font-size: 0.8em;
          }
        }

        @media screen and (max-width: 930px) {
          .cetis-logo-footer,
          .sep-logo-footer,
          .mariachi-logo-footer {
            height: 90px;
          }
        }

        @media screen and (max-width: 910px) {
          footer {
            padding: 15px 35px;
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
          }
          .escuela,
          .desarrollador {
            display: inline-flex;
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}
