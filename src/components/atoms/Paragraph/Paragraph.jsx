import React from 'react';
import PropTypes from 'prop-types';
import { StyledParagraph } from './Paragraph.styles';

const propTypes = {
  children: PropTypes.node,
  noMargin: PropTypes.bool,
  xs: PropTypes.bool,
  sm: PropTypes.bool,
  lg: PropTypes.bool,
  xl: PropTypes.bool,
};

function Paragraph({ children, noMargin, xs, sm, lg, xl, ...props }) {
  return (
    <>
      <StyledParagraph noMargin={noMargin} xs={xs} sm={sm} lg={lg} xl={xl} {...props}>
        {children}
      </StyledParagraph>
    </>
  );
}

Paragraph.propTypes = propTypes;

export default Paragraph;
