import React, { useState, useMemo } from 'react';
import styled from 'styled-components/macro';
import moment from 'moment';
import { Table, Heading, Pagination } from '../../components';
import { TransactionMockRes } from '../../helpers/mockResponse';

const PageSize = 3;

export default function PaginationUi() {
  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return TransactionMockRes.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  const columnNames = [`Transaction Date`, `Transaction Status`, `Description`, `Credit`, `Debit`, `Reward`];
  const rowsData = currentTableData.map(item => [
    moment(item?.created_at.split('T')[0]).parseZone().format('DD-MM-YYYY'),
    item.SettlementStatus,
    item.Description,
    `$${parseFloat(item.TransactionAmount).toFixed(2)}`,
    `$${parseFloat(item.TransactionAmount).toFixed(2)}`,
    item.RewardPoints,
  ]);

  return (
    <div css="padding: 1.3rem">
      <Title level={1}>Pagination</Title>

      <TableHolder>
        <Table rowsData={rowsData} columnNames={columnNames} />
        <Pagination
          className="pagination-bar"
          currentPage={currentPage}
          totalCount={TransactionMockRes.length}
          pageSize={PageSize}
          onPageChange={page => setCurrentPage(page)}
        />
      </TableHolder>
    </div>
  );
}

const Title = styled(Heading)`
  text-align: center;
`;

const TableHolder = styled.div`
  position: relative;
`;
