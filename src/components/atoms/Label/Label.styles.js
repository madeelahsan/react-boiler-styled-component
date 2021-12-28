import styled, { css } from 'styled-components/macro';

export const StyledLabel = styled.label`
  font-size: var(--font-size-sm);
  line-height: 1;
  color: var(--secondary-text-color);
  margin-bottom: 0.625rem;
  display: block;
  pointer-events: ${({ $onlyRead }) => $onlyRead && 'none'};
  ${({ labelIcon }) =>
    labelIcon &&
    css`
      display: flex;
      align-items: center;
    `}
`;

export const RequiredAsterisk = styled.span`
  color: var(--danger);
  margin-right: 3px;
`;
