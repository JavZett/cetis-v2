import Image from 'next/image';
import { useState } from 'react';
import { colores } from '../../styles/theme';
import { addOpacityColor } from '../../styles/utils';
export default function Docente({ docente }) {
  const [verId, setVerId] = useState(false);
  return (
    <>
      <div className="docente">
        <Image src="/hombre.svg" alt={docente.id} width="60px" height="60px" />
        <h3>{docente.nombre}</h3>
        <p>{docente.correo}</p>
        {verId && <small>{docente._id}</small>}
        <button
          onClick={() => {
            setVerId(!verId);
          }}
        >
          {verId ? 'Ocultar Id' : 'Mostrar Id'}
        </button>
      </div>
      <style jsx>{`
        .docente {
          width: 100%;
          padding: 20px;
          background: #f8f8f8;
          border: 1px solid #ddd;
          border-radius: 5px;
          box-shadow: 0px 0px 5px 0px ${addOpacityColor('#000000', 0.25)};
          transition: all ease 0.2s;
          text-align: center;
          font-size: 17px;
        }
        .docente:hover {
          box-shadow: 0px 0px 6px 0px ${addOpacityColor('#000000', 0.33)};
        }
        .docente h3 {
          font-size: 1.2em;
          text-shadow: 1px 1px 1px ${addOpacityColor('#000000', 0.33)};
        }
        .docente button {
          cursor: pointer;
          margin: 0.7em 0 0;
          padding: 6px 15px;
          font-size: 0.8em;
          border: solid 2px ${colores.primario};
          outline: 0;
          font-weight: 500;
          border-radius: 555px;
          background: 0;
          transition: all ease 0.3s;
        }
        .docente button:hover {
          background: ${colores.primario};
          box-shadow: 0px 0px 5px 0px ${addOpacityColor('#000000', 0.7)};
          color: ${colores.blanco};
        }
        .docente small {
          font-size: 0.75em;
        }
      `}</style>
    </>
  );
}
