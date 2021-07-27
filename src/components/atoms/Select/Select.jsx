import React from 'react';
import { components } from 'react-select';
import PropTypes from 'prop-types';

import { StyledFormGroup } from '../../../styles/helpers.styles';
import { StyledSelect } from './Select.styles';
import { InputIcon, Label } from '../..';

const propTypes = {
  label: PropTypes.string,
  options: PropTypes.array,
};

const DropdownIndicator = props =>
  components.DropdownIndicator && (
    <components.DropdownIndicator {...props}>
      <InputIcon $suffix>
        <i className="icon-chevron-down" />
      </InputIcon>
    </components.DropdownIndicator>
  );

function Component({ options, label, ...props }) {
  return (
    <StyledFormGroup>
      <Label>{label}</Label>
      <StyledSelect
        {...props}
        options={options}
        classNamePrefix="react-select"
        components={{ DropdownIndicator, IndicatorSeparator: () => null }}
      />
    </StyledFormGroup>
  );
}

Component.propTypes = propTypes;

export default Component;
