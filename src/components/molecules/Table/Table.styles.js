import styled from 'styled-components/macro';

export const TableHolder = styled.div`
  background: var(--light-secondary);
  padding: 1.25rem 1.25rem 0.5625rem;
  border-radius: 0 0 24px 24px;
`;

export const TableScroll = styled.div`
  @media (max-width: 991px) {
    overflow-x: auto;
  }
`;

export const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  color: var(--primary-text-color);
  thead,
  tbody tr {
    display: table;
    table-layout: fixed;
    width: 100%;
  }
`;

export const TBody = styled.tbody`
  display: block;
  overflow-y: auto;
  max-height: ${({ $height }) => $height && $height}px;
  min-height: 300px;
  @media (max-width: 991px) {
    width: 900px;
  }
`;
