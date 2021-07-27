import React, { useState, useMemo } from 'react';
import styled from 'styled-components/macro';
import { Table, Heading, Pagination } from '../../components';
import { productsMockRes } from '../../helpers/mockResponse';

const PageSize = 3;

export default function TableUi() {
  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return productsMockRes.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  const rowsData = currentTableData.map(product => [
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
      <Title level={1}>Pagination</Title>

      <TableHolder>
        <Table rowsData={rowsData} columnNames={columnNames} />
        <Pagination
          className="pagination-bar"
          currentPage={currentPage}
          totalCount={productsMockRes.length}
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
