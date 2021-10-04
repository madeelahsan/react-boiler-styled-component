import styled from 'styled-components/macro';

export const MessageHolder = styled.div`
  background: #eff2f8;
  border-radius: 10px;
  text-align: center;
  padding: 20px;
  margin: 0 auto;
  font-weight: bold;
  max-width: ${({ $width }) => $width && `${$width}px`};
  p {
    @media (max-width: 765px) {
      font-size: var(--font-size-base);
      line-height: 20px;
    }
  }
`;
