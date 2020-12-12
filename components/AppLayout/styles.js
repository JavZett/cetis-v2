import css from 'styled-jsx/css';
import { fuentes } from '../../styles/theme';

export const globalStyles = css.global`
  * {
    box-sizing: border-box;
    font-family: ${fuentes.base};
    font-size: 16px;
    margin: 0;
    padding: 0;
  }

  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  ::-webkit-scrollbar-thumb {
    background: #640431;
  }
  ::selection {
    background: rgba(100, 4, 49, 0.3);
  }
`;
