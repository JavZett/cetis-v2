import { useState } from 'react';
import NavLink from '../ActiveLink';
import styles from './styles';
import { AiOutlineBars } from 'react-icons/ai';
import { BsXSquareFill } from 'react-icons/bs';

export default function Navbar() {
  const [clickMenu, setClickMenu] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-brand">
          <a className="navbar-brand-logo">
            <img src="/logoCetis.png" alt="logo cetis" />
            <div className="titulo">
              <h1>Cetis 30</h1>
              <p>"Emilano Zapata"</p>
            </div>
          </a>
        </div>
        <ul
          className={
            clickMenu
              ? 'navbar-links navbar-links-active'
              : 'navbar-links navbar-links-no-active'
          }
        >
          <NavLink ruta="/" nombre="Inicio" clases="navbar-link" />
          <NavLink ruta="/atencion" nombre="Atención" clases="navbar-link" />
          <NavLink ruta="/carreras" nombre="Carreras" clases="navbar-link" />
          <NavLink ruta="/becas" nombre="Becas" clases="navbar-link" />
          <NavLink
            ruta="/inicio-sesion"
            nombre="Inicia Sesión"
            clases="navbar-link"
          />
        </ul>
        <div className="menu-icon" onClick={() => setClickMenu(!clickMenu)}>
          {clickMenu ? (
            <BsXSquareFill className="tache icono" />
          ) : (
            <AiOutlineBars className="barras-menu icono" />
          )}
        </div>
      </nav>
      <style jsx>{styles}</style>
    </>
  );
}
