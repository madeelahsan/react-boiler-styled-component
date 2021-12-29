// eslint-disable-next-line no-unused-vars
import styled from 'styled-components/macro';
import React from 'react';
import { components } from 'react-select';
import PropTypes from 'prop-types';
import { StyledFormGroup } from '../../../styles/helpers.styles';
import { Error } from '../../molecules/Field/Field.styles';
import { StyledSelect } from './Select.styles';
import InputIcon from '../InputIcon';
import Label from '../Label';

const propTypes = {
  label: PropTypes.string,
  noMargin: PropTypes.bool,
  options: PropTypes.array,
  error: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  rules: PropTypes.array,
};

const DropdownIndicator = props =>
  components.DropdownIndicator && (
    <components.DropdownIndicator {...props}>
      <InputIcon $suffix>
        <i className="material-icons-outlined">expand_more</i>
      </InputIcon>
    </components.DropdownIndicator>
  );

function Component({ options, label, noMargin, error, rules, ...props }) {
  return (
    <StyledFormGroup noMargin={noMargin}>
      {label && <Label required={rules?.filter(({ required }) => required).length}>{label}</Label>}
      <StyledSelect
        {...props}
        options={options}
        classNamePrefix="react-select"
        error={error}
        components={{ DropdownIndicator, IndicatorSeparator: () => null }}
        onChange={_ => {
          props.onChange({ target: { value: _, name: props.name } });
        }}
      />

      {error && (
        <Error id={`${props.name}Error`} role="alert">
          {error}
        </Error>
      )}
    </StyledFormGroup>
  );
}

Component.propTypes = propTypes;

export default Component;
