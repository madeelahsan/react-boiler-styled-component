import styled, { css } from 'styled-components/macro';

export const StyledGridCol = styled.div`
  ${({ xs }) =>
    xs &&
    css`
      grid-column: span ${xs} / span ${xs};
    `}

  ${({ sm }) =>
    sm &&
    css`
      @media (min-width: 576px) {
        grid-column: span ${sm} / span ${sm};
      }
    `}

  ${({ md }) =>
    md &&
    css`
      @media (min-width: 768px) {
        grid-column: span ${md} / span ${md};
      }
    `}

  ${({ lg }) =>
    lg &&
    css`
      @media (min-width: 992px) {
        grid-column: span ${lg} / span ${lg};
      }
    `}

  ${({ xl }) =>
    xl &&
    css`
      @media (min-width: 1200px) {
        grid-column: span ${xl} / span ${xl};
      }
    `}
`;
