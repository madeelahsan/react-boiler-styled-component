import { createGlobalStyle, css } from 'styled-components/macro';
import { normalize } from 'polished';
import Variables from './css/variables.css';
import Fonts from './Fonts';
import Icons from './css/custom-icons.css';

const Styling = css`
  //theme css variables
  ${Variables}

  // Fonts = Plus Jakarta Sans
  ${Fonts}

  //custom icons
  ${Icons}

  // (normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css)
  ${normalize()}

  /* Other Reset that aren't define in normalize.css*/
  html {
    box-sizing: border-box;
    font-size: 100%;
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

  input[type='search']::-webkit-search-decoration,
  input[type='search']::-webkit-search-cancel-button,
  input[type='search']::-webkit-search-results-button,
  input[type='search']::-webkit-search-results-decoration {
    display: none;
  }

  a,
  button {
    transition: opacity var(--animation-speed) ease-in-out, background var(--animation-speed) ease-in-out,
      visibility var(--animation-speed) ease-in-out, border var(--animation-speed) ease-in-out,
      color var(--animation-speed) ease-in-out;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0 0 20px;
  }

  /************* custom scrollbar styles ************/

  /* This will work on Firefox */
  * {
    scrollbar-width: thin;
    scrollbar-color: #13b1e6 #25214f;
  }

  /* Targtes on Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  *::-webkit-scrollbar-track {
    border-radius: 30px;
    background: #eceaf9;
  }

  *::-webkit-scrollbar-thumb {
    background: var(--primary);
    box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.03);
    border-radius: 3px;
  }
`;

const HelperClasses = css`
  .hidden {
    display: none;
  }
  .mb-0 {
    margin-bottom: 0;
  }
`;

const GlobalStyles = createGlobalStyle`
  ${Styling}
  ${HelperClasses}
`;

export default GlobalStyles;
