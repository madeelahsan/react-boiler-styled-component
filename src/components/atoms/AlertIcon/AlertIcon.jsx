import React from 'react';
import PropTypes from 'prop-types';
import { StyledIcon } from './AlertIcon.styles';

const propTypes = {
  $type: PropTypes.string,
};

function AlertIcon({ $type }) {
  const iconType = () => {
    switch ($type) {
      case 'error':
        return 'error_outline';
      case 'info-red':
        return 'info';
      case 'warning':
        return 'warning';
      case 'success':
        return 'check_circle_outline';
      default:
        return 'info';
    }
  };
  return (
    <>
      <StyledIcon $type={$type}>
        <span className="material-icons-outlined">{iconType()}</span>
      </StyledIcon>
    </>
  );
}

AlertIcon.propTypes = propTypes;

export default AlertIcon;
