/* eslint-disable no-nested-ternary */

import React from 'react';
import PropTypes from 'prop-types';
import { TableRow, TableCell } from '../..';
import { StyledTable, TableHolder } from './Table.styles';

const propTypes = {
  loading: PropTypes.bool,
  columnNames: PropTypes.array.isRequired,
  rowsData: PropTypes.array.isRequired,
};

// TODO:Remove nested ternary
function Table({ loading, columnNames, rowsData, ...props }) {
  return (
    <>
      <TableHolder>
        <StyledTable {...props}>
          <thead>
            <TableRow>
              {columnNames.map((item, index) => (
                <TableCell heading key={index}>
                  {item}
                </TableCell>
              ))}
            </TableRow>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <TableCell colSpan={columnNames?.length}>loading...</TableCell>
              </tr>
            ) : rowsData?.length ? (
              rowsData?.map((row, index) => (
                <TableRow key={index}>
                  {row?.map((el, i) => (
                    <TableCell key={i}>{el}</TableCell>
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
          </tbody>
        </StyledTable>
      </TableHolder>
    </>
  );
}

Table.propTypes = propTypes;

export default Table;
