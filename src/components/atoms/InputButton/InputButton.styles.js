/* eslint-disable no-console */
import { lazy } from 'react';
import styled from 'styled-components/macro';

const Button = lazy(() => import('../Button'));

export const StyledButton = styled(Button)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: ${({ unStyled }) => (unStyled ? '20px' : '10px')};
  color: ${({ unStyled }) => unStyled && 'var(--primary)'};
  z-index: 10;
`;
