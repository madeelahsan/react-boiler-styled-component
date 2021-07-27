import { css } from 'styled-components/macro';

export const styles = css`
  color: var(--link-color);
  text-decoration: ${props => props.$underline && 'underline'};
  &:hover {
    text-decoration: none;
  }
`;
