import styled from 'styled-components/macro';

export const TableRow = styled.tr`
  &:hover {
    td {
      transition: background var(--animation-speed) ease-in-out;
      background: var(--light);
      cursor: pointer;
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
`;

export default TableRow;
