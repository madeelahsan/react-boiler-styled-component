import React, { useState } from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line no-unused-vars
import styled from 'styled-components/macro';
import { StyledFormGroup } from '../../../styles/helpers.styles';
import { Error, InputHolder } from './Field.styles';
import { Label, Input, InputIcon, FakeLabel, FakeInput } from '../..';

const propTypes = {
  name: PropTypes.string.isRequired,
  invalid: PropTypes.bool,
  rounded: PropTypes.bool,
  noMargin: PropTypes.bool,
  error: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  margin: PropTypes.string,
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  button: PropTypes.node,
  searchField: PropTypes.bool,
  onlyRead: PropTypes.bool,
};

const defaultProps = {
  type: 'text',
};

const Field = ({
  error,
  name,
  invalid,
  label,
  type,
  prefix,
  suffix,
  rounded,
  noMargin,
  margin,
  button,
  searchField,
  onlyRead,
  ...props
}) => {
  const [isRevealPwd, setIsRevealPwd] = useState(false);
  const inputProps = {
    id: name,
    name,
    type,
    invalid,
    'aria-describedby': `${name}Error`,
    ...props,
  };
  const renderInputFirst = type === 'checkbox' || type === 'radio';
  return (
    <StyledFormGroup
      noMargin={noMargin}
      css={`
        margin-bottom: ${margin};
      `}>
      {renderInputFirst && label && (
        <Label htmlFor={inputProps.id} $onlyRead={onlyRead} css="display: flex; align-items:center; margin-bottom:0;">
          <Input {...inputProps} />
          <FakeInput>{type === 'checkbox' && <i className="icon-check" />}</FakeInput>
          <FakeLabel>{label}</FakeLabel>
        </Label>
      )}

      {renderInputFirst || (
        <>
          {label && <Label htmlFor={inputProps.id}>{label}</Label>}
          <InputHolder $searchField={searchField}>
            {/* input left icon */}
            {prefix && (
              <InputIcon
                as={type === 'search' && 'button'}
                type={type === 'search' ? 'button' : undefined}
                $prefix={prefix}
                $invalid={invalid}
                css={type === 'search' && 'color: var(--primary)'}>
                {prefix}
              </InputIcon>
            )}
            {/* password field */}
            {type === 'password' ? (
              <>
                <Input
                  {...inputProps}
                  $prefix
                  $suffix
                  $invalid={invalid}
                  type={isRevealPwd ? 'text' : 'password'}
                  $rounded={rounded}
                  $button={button && true}
                  autoComplete="on"
                />
                <InputIcon $suffix css="cursor: pointer" onClick={() => setIsRevealPwd(prevState => !prevState)}>
                  {isRevealPwd ? <i className="icon-eye-open" /> : <i className="icon-eye-close" />}
                </InputIcon>
              </>
            ) : (
              <>
                {/* any other input type */}
                <Input
                  {...inputProps}
                  $prefix={prefix}
                  $suffix={suffix}
                  $invalid={invalid}
                  $rounded={rounded}
                  $button={button && true}
                />
                {/* input right icon */}
                {suffix && (
                  <InputIcon $suffix={suffix} $invalid={invalid}>
                    {suffix}
                  </InputIcon>
                )}
                {button && button}
              </>
            )}
          </InputHolder>
        </>
      )}
      {invalid && error && (
        <Error id={`${name}Error`} role="alert">
          {error}
        </Error>
      )}
    </StyledFormGroup>
  );
};

Field.propTypes = propTypes;

Field.defaultProps = defaultProps;

export default Field;
