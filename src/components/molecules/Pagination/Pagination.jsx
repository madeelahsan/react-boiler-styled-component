import React from 'react';
// eslint-disable-next-line no-unused-vars
import { css } from 'styled-components/macro';
import PropTypes from 'prop-types';
import { UsePagination, PaginationDots as DOTS } from '../..';
import { PaginationList, PaginationButton } from './Pagination.styles';

const propTypes = {
  onPageChange: PropTypes.func,
  totalCount: PropTypes.number,
  siblingCount: PropTypes.number,
  currentPage: PropTypes.number,
  pageSize: PropTypes.number,
};

function Pagination(props) {
  const { onPageChange, totalCount, siblingCount = 1, currentPage, pageSize } = props;

  const paginationRange = UsePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  const lastPage = paginationRange[paginationRange.length - 1];
  return (
    <PaginationList>
      <li>
        <PaginationButton type="primary" shape="circle" onClick={onPrevious} disabled={currentPage === 1} size={28}>
          <i className="icon-chevron-left" />
        </PaginationButton>
      </li>
      {paginationRange.map((pageNumber, index) => {
        if (pageNumber === DOTS) {
          return (
            <li className="pagination-item dots" key={index}>
              &#8230;
            </li>
          );
        }

        return (
          <li key={index}>
            <PaginationButton
              type="white"
              shape="circle"
              size={28}
              css="color: var(--text-color-gray)"
              onClick={() => onPageChange(pageNumber)}
              className={`${(pageNumber === currentPage && 'selected') || ''}`}
              $pageNumBtn>
              {pageNumber}
            </PaginationButton>
          </li>
        );
      })}
      <li>
        <PaginationButton type="primary" shape="circle" onClick={onNext} disabled={currentPage === lastPage} size={28}>
          <i className="icon-chevron-right" />
        </PaginationButton>
      </li>
    </PaginationList>
  );
}

Pagination.propTypes = propTypes;

export default Pagination;
