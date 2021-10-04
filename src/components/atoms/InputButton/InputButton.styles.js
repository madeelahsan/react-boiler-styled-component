/* eslint-disable no-console */
import styled from 'styled-components/macro';
import { Button } from '../..';

export const StyledButton = styled(Button)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: ${({ unStyled }) => (unStyled ? '20px' : '10px')};
  color: ${({ unStyled }) => unStyled && 'var(--primary)'};
  z-index: 10;
`;
