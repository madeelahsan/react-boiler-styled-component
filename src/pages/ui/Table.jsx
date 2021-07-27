import React from 'react';
import styled from 'styled-components/macro';
import { Table, Heading } from '../../components';
import { productsMockRes } from '../../helpers/mockResponse';

export default function TableUi() {
  const rowsData = productsMockRes.map(product => [
    product?.item_id,
    product?.product_name,
    '-',
    product?.brand?.brand_name,
    product?.sub_brand?.sub_brand_name,
    product?.barcode_number,
    '-',
    '-',
    '-',
    '-',
  ]);

  const columnNames = [
    `Item Id`,
    `Product Name`,
    `Category`,
    `Brand`,
    `Sub Brand`,
    `UPC`,
    `Status`,
    `Image`,
    `Validation Status`,
    `Action`,
  ];

  return (
    <div css="padding: 1.3rem">
      <Title level={1}>Table</Title>
      <Table rowsData={rowsData} columnNames={columnNames} />
    </div>
  );
}

const Title = styled(Heading)`
  text-align: center;
`;
