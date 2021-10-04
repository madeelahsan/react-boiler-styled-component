import styled, { css } from 'styled-components/macro';

const styles = css`
  font-size: var(--font-size-sm);
  line-height: 24px;
  margin: 0;
  padding-left: 1.3rem;
  color: var(--text-color-gray);
  li {
    margin-bottom: 15px;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const Ol = styled.ol`
  ${styles}
`;
export const Ul = styled.ul`
  ${styles}
  list-style-type: none;
  padding-left: 0;
`;
