import styled, { css } from 'styled-components/macro';

const styles = css`
  text-align: ${({ center }) => (center ? 'center' : 'left')};
  padding: 1.125rem 0.9375rem;
  font-size: var(--font-size-xs);
  font-weight: bold;
  word-break: break-all;

  @media (min-width: 992px) {
    padding: ${({ sm }) => (sm ? '.75rem' : '1.375rem')};
  }
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
  @media (min-width: 992px) {
    padding: ${({ headSm }) => (headSm ? '.75rem' : '1.375rem')};
  }
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
