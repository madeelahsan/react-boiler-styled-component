/* eslint-disable no-nested-ternary */

import React from 'react';
import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';
import { StyledTable, TableHolder, TBody, TableScroll } from './Table.styles';
import { TableRow } from '../../atoms/TableRow';
import TableCell from '../../atoms/TableCell';

const propTypes = {
  loading: PropTypes.bool,
  columnNames: PropTypes.array,
  rowsData: PropTypes.array,
  height: PropTypes.number,
  center: PropTypes.bool,
  sm: PropTypes.bool,
  headSm: PropTypes.bool,
  noPadding: PropTypes.bool,
  onClick: PropTypes.func,
};

// TODO:Remove nested ternary and add loading
function Table({
  loading,
  columnNames,
  rowsData,
  height,
  center,
  sm,
  headSm,
  onClick = () => {},
  noPadding,
  ...props
}) {
  return (
    <>
      <TableHolder noPadding={noPadding}>
        <TableScroll>
          <StyledTable {...props}>
            <thead>
              <TableRow>
                {columnNames.map((item, index) => (
                  <TableCell heading key={index} center={center} headSm={headSm}>
                    {item}
                  </TableCell>
                ))}
              </TableRow>
            </thead>
            <TBody $height={height}>
              {loading ? (
                Array(10)
                  .fill()
                  .map((item, i) => (
                    <TableRow key={i}>
                      {columnNames?.map(index => (
                        <TableCell key={index}>
                          <Skeleton width={100} height={15} />
                        </TableCell>
                      ))}
                    </TableRow>
                  ))
              ) : rowsData?.length ? (
                rowsData?.map((row, index) => (
                  <TableRow key={index} onClick={() => onClick(row)}>
                    {row?.map((el, i) => (
                      <TableCell key={i} center={center} sm={sm}>
                        {el}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <tr>
                  <TableCell colSpan={columnNames?.length} className="text-center">
                    No Record Found
                  </TableCell>
                </tr>
              )}
            </TBody>
          </StyledTable>
        </TableScroll>
      </TableHolder>
    </>
  );
}

Table.propTypes = propTypes;

export default Table;
