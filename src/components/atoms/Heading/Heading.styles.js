import styled, { css } from 'styled-components/macro';

const HeadingColor = css`
  color: var(--headings-color);
`;

export const H1 = styled.h1`
  ${HeadingColor}
  font-size: 1.5rem;
  line-height: 1.875rem;
  margin-bottom: 0.625rem;
  @media (min-width: 768px) {
    font-size: var(--h1-font-size);
    line-height: var(--h1-line-height);
    margin-bottom: 1.25rem;
  }
`;

export const H2 = styled.h2`
  ${HeadingColor}
  font-size: var(--h2-font-size);
  line-height: var(--h2-line-height);
`;

export const H3 = styled.h3`
  ${HeadingColor}
  font-size: var(--h3-font-size);
  line-height: var(--h3-line-height);
`;

export const H4 = styled.h4`
  ${HeadingColor}
  font-size: var(--h4-font-size);
  line-height: var(--h4-line-height);
`;

export const H5 = styled.h5`
  ${HeadingColor}
  font-size: var(--h5-font-size);
  line-height: var(--h5-line-height);
`;
