import styled, { css } from 'styled-components/macro';

export const StyledAlert = styled.div`
  border-radius: 8px;
  padding: 1rem;
  display: flex;
  align-items: center;
  font-size: var(--font-size-sm);
  line-height: 1.25rem;
  @media (min-width: 768px) {
    padding: 1rem 3.9375rem 1rem 1rem;
  }

  ${({ $type }) =>
    $type === 'success' &&
    css`
      color: var(--success);
      background: #f2f9f0;
    `}

  ${({ $type }) =>
    $type === 'info' &&
    css`
      color: var(--info);
      background: var(--info);
      background: #f3f5fe;
    `}

    ${({ $type }) =>
    $type === 'error' &&
    css`
      color: var(--danger);
      background: #fef0f4;
    `}

    ${({ $type }) =>
    $type === 'warning' &&
    css`
      color: var(--warning);
      background: #fffaf2;
    `}
`;

export const Message = styled.p`
  color: inherit;
  margin: 0;
`;
