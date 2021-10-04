import styled from 'styled-components/macro';

const Label = styled.label`
  font-size: var(--font-size-sm);
  line-height: 1;
  color: var(--secondary-text-color);
  margin-bottom: 0.625rem;
  display: block;
  pointer-events: ${({ $onlyRead }) => $onlyRead && 'none'};
`;

export default Label;
