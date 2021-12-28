import { css } from 'styled-components/macro';

export const styles = css`
  color: var(--link-color);
  cursor: pointer;
  text-decoration: ${({ $underline }) => $underline && 'underline'};
  &:hover {
    text-decoration: none;
  }
`;
