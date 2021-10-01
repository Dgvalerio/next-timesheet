import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body, #__next {
    display: flex;
    flex-direction: column;

    min-height: 100vh;
  }
`;

export default GlobalStyle;
