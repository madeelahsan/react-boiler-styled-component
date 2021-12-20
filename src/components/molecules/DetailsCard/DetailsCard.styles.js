import styled from 'styled-components/macro';

export const StyledDetailsCard = styled.div`
  background: ${({ gray }) => (gray ? 'var(--light-secondary)' : 'var(--white)')};
  border-radius: 10px;
  box-shadow: ${({ gray }) => !gray && '0px 23px 44px rgba(176, 183, 195, 0.14)'};
  padding: 1.25rem;
  margin-bottom: 0.625rem;
`;
