import styled from 'styled-components/macro';

export const StyledInputIcon = styled.span`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: ${({ $prefix }) => $prefix && '23px'};
  right: ${({ $suffix }) => $suffix && '23px'};
  color: ${({ $invalid }) => ($invalid ? 'var(--danger)' : 'var(--secondary-text-color)')};
  font-size: var(--font-size-lg);
  background: none;
  border: none;
  padding: 0;
  i {
    display: block;
  }
`;
