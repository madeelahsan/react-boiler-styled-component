import { createGlobalStyle, css } from 'styled-components/macro';
import { normalize } from 'polished';
import Fonts from './Fonts';

const Styling = css`
  // (normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css)
  ${normalize()}

  // Fonts = Plus Jakarta Sans
  ${Fonts}

  /* Other Reset that aren't define in normalize.css*/
  html {
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  * {
    max-height: 1000000px;
  }

  body {
    color: var(--base-text-color);
    background: var(--base-background-color);
    font: var(--font-size-base) / var(--line-height-base) var(--base-font-family);
    min-width: var(--base-min-width);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  img {
    max-width: 100%;
    height: auto;
    vertical-align: top;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  textarea {
    resize: vertical;
    vertical-align: top;
  }

  button,
  input[type='button'],
  input[type='reset'],
  input[type='file'],
  input[type='submit'] {
    cursor: pointer;
  }

  form,
  fieldset {
    margin: 0;
    padding: 0;
    border-style: none;
  }

  a {
    text-decoration: none;
  }
`;

const GlobalStyles = createGlobalStyle`
  ${Styling}
`;

export default GlobalStyles;
