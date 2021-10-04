import React from 'react';
import styled from 'styled-components/macro';
import moment from 'moment';
import { Table, Heading } from '../../components';
import { TransactionMockRes } from '../../helpers/mockResponse';

export default function TableUi() {
  const columnNames = [`Transaction Date`, `Transaction Status`, `Description`, `Credit`, `Debit`, `Reward`];

  const rowsData = TransactionMockRes.map(item => [
    moment(item?.created_at.split('T')[0]).parseZone().format('DD-MM-YYYY'),
    item.SettlementStatus,
    item.Description,
    `$${parseFloat(item.TransactionAmount).toFixed(2)}`,
    `$${parseFloat(item.TransactionAmount).toFixed(2)}`,
    item.RewardPoints,
  ]);

  return (
    <>
      <div css="padding: 1.3rem">
        <Title level={1}>Table</Title>
        <Table rowsData={rowsData} columnNames={columnNames} height={250} />
      </div>

      <div css="padding: 1.3rem">
        <Title level={1}>Centered Table</Title>
        <Table rowsData={rowsData} columnNames={columnNames} height={250} center />
      </div>
    </>
  );
}

const Title = styled(Heading)`
  text-align: center;
`;
