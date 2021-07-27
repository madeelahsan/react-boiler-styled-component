import styled, { css } from 'styled-components/macro';
import { StyledAlert } from '../Alert/Alert.styles';

export const StyledNotification = styled(StyledAlert)`
  display: flex;
  align-items: center;
  border-left-width: 6px;
  border-left-style: solid;
  padding: 0.3125rem 1.25rem;
  ${props =>
    props.$type === 'success' &&
    css`
      border-color: var(--success);
    `}

  ${props =>
    props.$type === 'info' &&
    css`
      border-color: var(--info);
    `}

    ${props =>
    props.$type === 'error' &&
    css`
      border-color: var(--danger);
    `}

    ${props =>
    props.$type === 'warning' &&
    css`
      border-color: var(--warning);
    `}
`;

export const TextHolder = styled.div``;
