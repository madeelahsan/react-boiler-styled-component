import styled from 'styled-components/macro';
import { Button } from '../..';

export const PaginationList = styled.ul`
  display: flex;
  position: absolute;
  bottom: 1.875rem;
  right: 1.875rem;
  background: var(--white);
  border-radius: 50px;
  padding: 0.625rem;
`;

export const PaginationButton = styled(Button)`
  font-size: 0.625rem;
  line-height: 1;
  border: none;
  &:hover,
  &.selected {
    box-shadow: none;
    color: var(--primary);
  }
`;
