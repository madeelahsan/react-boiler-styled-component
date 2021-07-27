import React from 'react';
import PropTypes from 'prop-types';
import { StyledBtn } from './Upload.styles';
import { Label, UploadIcon } from '../..';
import { StyledFormGroup } from '../../../styles/helpers.styles';

const propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  uploadBtnText: PropTypes.string,
  icon: PropTypes.node,
};

function Upload({ label, name, uploadBtnText, icon, ...props }) {
  return (
    <StyledFormGroup>
      <Label as="span">{label}</Label>
      <input type="file" id={name} {...props} className="hidden" />
      <StyledBtn htmlFor={name}>
        <UploadIcon icon={icon} /> {uploadBtnText}
      </StyledBtn>
    </StyledFormGroup>
  );
}

Upload.propTypes = propTypes;

export default Upload;
