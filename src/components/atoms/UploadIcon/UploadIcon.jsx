import React from 'react';
import PropTypes from 'prop-types';
import { IconHolder } from './UploadIcon.styles';

const propTypes = {
  icon: PropTypes.node,
};
function UploadIcon({ icon }) {
  return <IconHolder>{icon}</IconHolder>;
}

UploadIcon.propTypes = propTypes;

export default UploadIcon;
