import styled from 'styled-components/macro';

export const TableHolder = styled.div`
  background: var(--light-secondary);
  border-radius: 24px;
  padding: 1.25rem 1.25rem 0.5625rem;
`;

export const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  color: var(--primary-text-color);
  tbody {
    tr:hover {
      cursor: pointer;
      td {
        transition: background var(--animation-speed) ease-in-out;
        background: var(--light);
        &:first-child {
          border-top-left-radius: 80px;
          border-bottom-left-radius: 80px;
        }
        &:last-child {
          border-top-right-radius: 80px;
          border-bottom-right-radius: 80px;
        }
      }
    }
  }
`;
