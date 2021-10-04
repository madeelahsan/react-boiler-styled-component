import { createGlobalStyle, css } from 'styled-components/macro';
import { normalize } from 'polished';
import Variables from './css/variables.css';
import Fonts from './Fonts';
import Icons from './css/custom-icons.css';

const Styling = css`
  /* theme css variables */
  ${Variables}

  /* Fonts = Plus Jakarta Sans */
  ${Fonts}

  /* custom icons */
  ${Icons}

  /* (normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css) */
  ${normalize()}

  /* Other Reset that aren't define in normalize.css*/
  html {
    box-sizing: border-box;
    font-size: 100%;
    scroll-behavior: smooth;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    color: var(--base-text-color);
    background: var(--base-background-color);
    font: var(--font-size-base) / var(--line-height-base) var(--base-font-family);
    font-weight: 500;
    position: relative;
    min-width: var(--base-min-width);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &.nav-active {
      @media (max-width: 575px) {
        overflow: hidden;
      }
    }

    &.panel-active {
      overflow: hidden;
      &:before {
        display: block;
      }
    }

    &:before {
      display: none;
      content: '';
      position: absolute;
      top: 0;
      bottom: -10%;
      left: 0;
      right: 0;
      backdrop-filter: blur(4px);
      background: rgba(50, 59, 75, 0.3);
      z-index: 9;
    }
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

  button {
    padding: 0;
    border: none;
    background: none;
    outline: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0 0 1.25rem;
  }

  p {
    margin: 0;
  }

  /************* custom scrollbar styles ************/

  /* This will work on Firefox */
  * {
    scrollbar-width: thin;
    scrollbar-color: var(--primary) #eceaf9;
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
    border-radius: 30px;
  }

  /* Remove Arrows/Spinners from input type number */

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type='number'] {
    appearance: textfield;
  }
`;

const HelperClasses = css`
  .hidden {
    display: none;
  }
  .mb-0 {
    margin-bottom: 0;
  }
  .text-center {
    text-align: center;
  }
  .font-bold {
    font-weight: bold;
  }
  .font-medium {
    font-weight: 500;
  }
  .wrapper {
    position: relative;
    overflow: hidden;
  }
  .text-dark {
    color: var(--secondary-text-color);
  }
  .text-primary {
    color: var(--primary-text-color);
  }
  .truncate-sm {
    @media (max-width: 575px) {
      display: inline-block;
      vertical-align: middle;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
  .truncate-md {
    @media (min-width: 768px) {
      display: inline-block;
      vertical-align: middle;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
  .mb-20 {
    margin-bottom: 20px;
  }
`;

const GlobalStyles = createGlobalStyle`
  ${Styling}
  ${HelperClasses}
`;

export default GlobalStyles;
