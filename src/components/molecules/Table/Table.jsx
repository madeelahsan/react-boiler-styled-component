/* eslint-disable no-nested-ternary */

import React from 'react';
import PropTypes from 'prop-types';
import { TableRow, TableCell } from '../..';
import { StyledTable, TableHolder, TBody, TableScroll } from './Table.styles';

const propTypes = {
  loading: PropTypes.bool,
  columnNames: PropTypes.array.isRequired,
  rowsData: PropTypes.array.isRequired,
  height: PropTypes.number,
  center: PropTypes.bool,
  sm: PropTypes.bool,
};

// TODO:Remove nested ternary and add loading
function Table({ loading, columnNames, rowsData, height, center, sm, ...props }) {
  return (
    <>
      <TableHolder>
        <TableScroll>
          <StyledTable {...props}>
            <thead>
              <TableRow>
                {columnNames.map((item, index) => (
                  <TableCell heading key={index} center={center}>
                    {item}
                  </TableCell>
                ))}
              </TableRow>
            </thead>
            <TBody $height={height}>
              {loading ? (
                <tr>
                  <TableCell colSpan={columnNames?.length}>loading...</TableCell>
                </tr>
              ) : rowsData?.length ? (
                rowsData?.map((row, index) => (
                  <TableRow key={index}>
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
