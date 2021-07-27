import styled from 'styled-components/macro';
import { darken, cssVar } from 'polished';
import { Centered } from '../../../styles/helpers.styles';

export const StyledBtn = styled.label`
  ${Centered}
  flex-direction: column;
  background: var(--light-secondary);
  border-radius: 14px;
  width: 100%;
  max-width: 9.6875rem;
  min-height: 7rem;
  font-size: var(--font-size-xs);
  line-height: 1.2;
  color: var(--text-color-gray);
  cursor: pointer;
  transition: background var(--animation-speed) ease-in-out;
  &:hover {
    background: ${darken(0.1, cssVar('--light-secondary'))};
  }
`;
