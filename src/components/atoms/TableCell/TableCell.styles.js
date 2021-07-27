import styled, { css } from 'styled-components/macro';

const styles = css`
  text-align: left;
  padding: 1.375rem;
  font-size: var(--font-size-xs);
  font-weight: bold;
  &:first-child {
    padding-left: 1.875rem;
  }
  &:last-child {
    padding-right: 1.875rem;
  }
`;

export const Th = styled.th`
  ${styles}
  background: var(--white);
  &:first-child {
    border-top-left-radius: 80px;
    border-bottom-left-radius: 80px;
  }
  &:last-child {
    border-top-right-radius: 80px;
    border-bottom-right-radius: 80px;
  }
`;
export const Td = styled.td`
  ${styles}
`;
