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
        return 'icon-error-circle';
      case 'warning':
        return 'icon-warning';
      case 'success':
        return 'icon-check-circle';
      default:
        return 'icon-info-circle';
    }
  };
  return (
    <>
      <StyledIcon $type={$type}>
        <i className={iconType()} />
      </StyledIcon>
    </>
  );
}

AlertIcon.propTypes = propTypes;

export default AlertIcon;
