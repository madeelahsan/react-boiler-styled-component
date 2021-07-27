import { rgba, cssVar } from 'polished';
import styled, { css } from 'styled-components/macro';

export const StyledAlert = styled.div`
  border-radius: 8px;
  padding: 1rem 3.9375rem 1rem 1rem;
  display: flex;
  align-items: center;
  line-height: 1.25rem;

  p {
    color: inherit;
    margin: 0;
  }

  ${props =>
    props.$type === 'success' &&
    css`
      color: var(--success);
      background: ${rgba(cssVar('--success'), 0.08)};
    `}

  ${props =>
    props.$type === 'info' &&
    css`
      color: var(--info);
      background: var(--info);
      background: ${rgba(cssVar('--info'), 0.08)};
    `}

    ${props =>
    props.$type === 'error' &&
    css`
      color: var(--danger);
      background: ${rgba(cssVar('--danger'), 0.08)};
    `}

    ${props =>
    props.$type === 'warning' &&
    css`
      color: var(--warning);
      background: ${rgba(cssVar('--warning'), 0.08)};
    `}
`;
