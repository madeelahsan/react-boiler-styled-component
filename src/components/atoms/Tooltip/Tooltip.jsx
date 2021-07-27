import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import { StyledTooltip } from './Tooltip.styles';

const propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  type: PropTypes.string,
};

function Tooltip({ children, title, type }) {
  const id = v4();
  return (
    <>
      <span data-for={id} data-tip data-iscapture="true">
        {children}
      </span>
      <StyledTooltip id={id} place="top" type={type} effect="solid">
        {title}
      </StyledTooltip>
    </>
  );
}

Tooltip.propTypes = propTypes;

export default Tooltip;
