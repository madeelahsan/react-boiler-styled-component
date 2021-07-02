import { createGlobalStyle } from 'styled-components/macro';
// fonts and other reset which aren't define in normalize.css

import PlusJakartaSansBold from '../assets/fonts/PlusJakartaSans-Bold.woff2';
import PlusJakartaSansMedium from '../assets/fonts/PlusJakartaSans-Medium.woff2';

export const GlobalStyles = createGlobalStyle`
  
  @font-face {
      font-family: 'Plus Jakarta Sans';
      src: url(${PlusJakartaSansBold}) format('woff2');
      font-weight: bold;
      font-style: normal;
      font-display: swap;
  }

  @font-face {
      font-family: 'Plus Jakarta Sans';
      src: url(${PlusJakartaSansMedium}) format('woff2');
      font-weight: 500;
      font-style: normal;
      font-display: swap;
  }

  html {
    box-sizing: border-box;

    /* variables */

    --gray: #999;
    --white: #fff;
    --black: #000;
    --light-blue: #39f;
  
    --base-font-sans-serif: 'Plus Jakarta Sans', 'Arial', 'Helvetica Neue', 'Helvetica', sans-serif;
    --base-font-serif: 'Times New Roman', 'Times', 'Baskerville', 'Georgia', serif;

    /* This is the default html and body font-size for the base rem value. */
    --rem-base: 16px;

    /* Body */
    --base-text-color: var(--black);
    --base-background-color: var(--white);
    --font-size-base: 16px;
    --line-height-base: 1.2;
    --base-font-family: var(--base-font-sans-serif);

    --vertical-rhythm: (var(--line-height-base) * 1em);

    --base-min-width: 320px;

    /*  Links */
    --base-link-color: var(--light-blue);

     /* Buttons  */
    --btn-color: var(--white);
    --btn-background: var(--light-blue);
    --btn-padding: 0.7em 0.7em;
    --btn-font-size: inherit;

    /*  Forms */
    --form-element-padding: 12px 27px;
    --form-element-border-color: var(--gray);
    --form-element-focus-border-color: var(--black);
    --placeholder-color: var(--gray);

    /* Headings */
    --h1-font-size: 60px;
    --h2-font-size: 27px;
    --h3-font-size: 24px;
    --h4-font-size: 21px;
    --h5-font-size: 17px;
    --h6-font-size: 15px;

    --headings-font-family: var(--base-font-serif);
    --headings-color: var(--black);

    --animation-speed: 0.3s;
  }
  
  /* Other Reset */

  *, *:before, *:after {
    box-sizing: inherit;
  }

  * {max-height: 1000000px;}

  body {
    color: var(--base-text-color);
    background: var(--base-background-color);
    font: var(--font-size-base)/var(--line-height-base) var(--base-font-family);
    min-width: var(--base-min-width);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  img {
    max-width: 100%;
    height: auto;
    vertical-align: top;
  }
  
  ul{
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

  a{
    text-decoration: none;
  }
  
`;
