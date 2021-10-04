import React from 'react';
import PropTypes from 'prop-types';
import { StyledParagraph } from './Paragraph.styles';

const propTypes = {
  children: PropTypes.node.isRequired,
  xs: PropTypes.node,
  sm: PropTypes.node,
  lg: PropTypes.node,
  xl: PropTypes.node,
};

function Paragraph({ children, xs, sm, lg, xl, ...props }) {
  return (
    <>
      <StyledParagraph xs={xs} sm={sm} lg={lg} xl={xl} {...props}>
        {children}
      </StyledParagraph>
    </>
  );
}

Paragraph.propTypes = propTypes;

export default Paragraph;
