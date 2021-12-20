import styled, { css } from 'styled-components/macro';

export const StyledInfoCard = styled.div`
  ${({ $unStyled }) =>
    !$unStyled &&
    css`
      background: var(--light-secondary);
      border-radius: 10px;
      padding: 16px;
    `}
`;

export const Title = styled.strong`
  font-size: ${({ fontbase }) => (fontbase ? 'var(--font-size-base)' : 'var(--font-size-sm)')};
  line-height: 1.125rem;
  display: block;
  margin-bottom: 0.375rem;
`;

export const Value = styled.span`
  font-size: ${({ fontbase }) => (fontbase ? 'var(--font-size-base)' : 'var(--font-size-xs)')};
  line-height: 0.9375rem;
  color: var(--text-color-gray);
`;
