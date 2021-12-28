import styled from 'styled-components/macro';
import { darken, cssVar } from 'polished';
import { Centered } from '../../../styles/helpers.styles';

export const StyledBtn = styled.label`
  ${Centered}
  flex-direction: column;
  background-color: var(--light-secondary);
  border-radius: 14px;
  width: 100%;
  max-width: 9.6875rem;
  min-height: 7rem;
  font-size: var(--font-size-xs);
  line-height: 1.2;
  color: var(--text-color-gray);
  cursor: pointer;
  border: 1px solid transparent;
  transition: background var(--animation-speed) ease-in-out;
  &:hover {
    background-color: ${darken(0.1, cssVar('--light-secondary'))};
  }
`;

export const IconsHolder = styled.ul`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  visibility: hidden;
  transition: 0.3s linear;
  z-index: 2;
`;

export const ImgHolder = styled.div`
  position: relative;
  z-index: 1;
  overflow: hidden;
  border-radius: 14px;
  width: 100%;
  max-width: 9.6875rem;
  height: 7rem;
  &:hover {
    ${IconsHolder} {
      opacity: 1;
      visibility: visible;
    }
  }
`;

export const Icon = styled.li`
  color: var(--white);
  cursor: pointer;
  margin: 0 10px;
`;

export const StyledImage = styled.img`
  ${Centered}
  flex-direction: column;
  border-radius: 14px;
  width: 100%;
  max-width: 9.6875rem;
  min-height: 7rem;
  line-height: 1.2;
  cursor: pointer;
  height: 100%;
  object-fit: cover;
`;
