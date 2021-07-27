import styled, { keyframes } from 'styled-components/macro';

const loadingCircle = keyframes`
  to {
    transform: rotate(1turn);
  }
`;

export const BtnLoader = styled.span`
  margin-right: 12px;
  svg {
    animation: ${loadingCircle} 1s linear infinite;
  }
`;
