import { css } from 'styled-components/macro';

import PlusJakartaSansBold from '../assets/fonts/plus-jakarta-sans/PlusJakartaSans-Bold.woff2';
import PlusJakartaSansMedium from '../assets/fonts/plus-jakarta-sans/PlusJakartaSans-Medium.woff2';

const Fonts = css`
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
`;

export default Fonts;
