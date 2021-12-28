import styled, { css } from 'styled-components/macro';

const styles = css`
  font-size: var(--font-size-sm);
  line-height: 24px;
  margin: 0;
  padding-left: 1.3rem;
  color: var(--text-color-gray);

  li {
    margin-bottom: 15px;
    position: relative;

    &:last-child {
      margin-bottom: 0;
    }

    a {
      color: $primary;
      font-weight: 800;
    }
  }

  ${({ bullets }) =>
    bullets &&
    css`
      font-size: var(--font-size-xs);
      line-height: 20px;

      li {
        margin-bottom: 3px;
        padding: 0 0 0 9px;

        &:before {
          content: '';
          position: absolute;
          top: 8px;
          left: 0;
          width: 4px;
          height: 4px;
          border-radius: 50px;
          background: #000;
        }
      }
    `}
`;

export const Ol = styled.ol`
  ${styles}
`;
export const Ul = styled.ul`
  ${styles}
  list-style-type: none;
  padding-left: 0;
`;
