import css from 'styled-jsx/css';
import { colores } from '../../styles/theme';
import { addOpacityColor } from '../../styles/utils';

const navBg = addOpacityColor('#cccccc', 0.4);

export default css`
  .navbar {
    backdrop-filter: blur(15px);
    align-items: center;

    background: ${navBg};
    box-shadow: 3px 3px 3px ${addOpacityColor('#222222', 0.25)};

    display: flex;

    justify-content: space-between;
    height: 75px;
    position: sticky;
    max-width: 3000px;
    top: 0;
    width: 100%;
    z-index: 500;
  }
  .navbar-brand-logo {
    align-items: center;
    color: ${colores.primario};
    display: inline-flex;
    margin-left: 20px;
    text-decoration: none;
    text-shadow: 2px 2px 3px ${addOpacityColor('#000000', 0.35)};
  }
  .navbar-brand-logo img {
    height: 63px;
  }

  .navbar-brand-logo .titulo {
    font-size: 20px;
    margin-left: 0.3em;
    text-align: center;
  }

  .navbar-brand-logo .titulo h1 {
    font-size: 1.6em;
    margin: 0;
    padding: 0;
  }

  .navbar-brand-logo .titulo p {
    font-weight: bolder;
    font-size: 0.8em;
    margin: 0;
    padding: 0;
  }
  ul.navbar-links {
    display: inline-flex;
    align-items: center;
    font-size: 18px;
    list-style: none;
    margin-right: 1.5em;
    min-height: 75px;
  }
  a.navbar-link {
    color: #222;
    font-size: 1.2em;
    font-weight: 500;
    margin-left: 1.2em;
    text-decoration: none;
    transition: all ease 0.3s;
  }
  a.navbar-link:hover,
  a.navbar-link.active {
    color: #640431;
    text-shadow: 1px 1px 2px #00000070;
  }
  div.menu-icon > :global(svg.icono) {
    color: #640431;
    cursor: pointer;
    font-size: 2em;
    height: 75px;
    line-height: 75px;
    margin-right: 1em;
  }

  div.menu-icon > :global(svg.tache) {
    display: none;
  }

  div.menu-icon > :global(svg.barras-menu) {
    display: none;
  }
  div.menu-icon {
    display: none;
  }
  @media screen and (max-width: 768px) {
    div.menu-icon > :global(svg.barras-menu) {
      display: block;
    }
    div.menu-icon > :global(svg.tache) {
      display: block;
    }
    ul.navbar-links {
      display: grid;
      height: auto;
      width: 100%;
      top: 75px;
      margin: 0;
      right: 0;
      background: ${colores.primario};
      position: fixed;
      padding: 10px 0;
      margin: 0;
      box-shadow: 2px 5px 5px ${addOpacityColor('#000000', 0.5)};
      border-radius: 10px;
    }

    ul.navbar-links::before {
      content: '';
      border-left: 15px solid transparent;
      border-right: 15px solid transparent;
      border-bottom: 15px solid #640431;
      position: absolute;
      top: -15px;
      right: 1.9em;
    }
    ul.navbar-links li {
      width: 100%;
      text-align: center;
      list-style: none;
      padding: 15px 45px;
      margin: 0;
    }
    a.navbar-link {
      padding: 20px;
      margin: 0;
      color: #fafafa;
      display: block;
      width: 100%;
    }
    a.navbar-link.active,
    a.navbar-link:hover,
    a.navbar-link:focus {
      border-radius: 1000px;
      color: #640431;
      font-weight: bold;
      letter-spacing: 1px;
      background-color: #f7f7f7;
      box-shadow: 3px 5px 5px #00000070;
    }
    ul.navbar-links-no-active {
      display: none;
    }
    div.menu-icon {
      display: block;
    }
  }
  @media screen and (max-width: 250px) {
    .navbar-brand-logo .titulo {
      font-size: 15px;
      margin-left: 0.3em;
      text-align: center;
    }
  }
`;
