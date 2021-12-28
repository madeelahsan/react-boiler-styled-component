import styled from 'styled-components/macro';

export const Error = styled.span`
  margin-top: 0.625rem;
  display: block;
  color: var(--danger);
  &:first-letter {
    text-transform: uppercase;
  }
`;

export const InputHolder = styled.div`
  @media (min-width: 576px) {
    position: relative;
  }
  @media (max-width: 575px) {
    position: ${({ $searchField }) => !$searchField && 'relative'};
  }
`;
