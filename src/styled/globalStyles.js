import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${normalize}

    body {
        margin: 0;
        font-family: 'Roboto',
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: ${(props) => props.theme.fgColor};
        background-color: ${(props) => props.theme.bgColor};
        transition: color 0.3s ease, background-color 0.3s ease;
    }
`