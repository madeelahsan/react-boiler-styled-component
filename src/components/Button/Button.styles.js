import styled from 'styled-components/macro';

export const StyledButton = styled.button`
  border: none;
  display: block;
  width: 100%;
  background: var(--btn-background);
  text-align: center;
  padding: var(--btn-padding);
  cursor: pointer;
  color: var(--white);
  border-radius: 5px;
  &:hover {
    opacity: 0.8;
  }
`;
