import React, { forwardRef, lazy, useState, Suspense } from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line no-unused-vars
import styled from 'styled-components/macro';
import { StyledFormGroup } from '../../../styles/helpers.styles';
import { Error, InputHolder } from './Field.styles';

const Label = lazy(() => import('../../atoms/Label'));
const Input = lazy(() => import('../../atoms/Input'));
const InputIcon = lazy(() => import('../../atoms/InputIcon'));
const FakeLabel = lazy(() => import('../../atoms/FakeLabel'));
const FakeInput = lazy(() => import('../../atoms/FakeInput'));

const propTypes = {
  value: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
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
  rules: PropTypes.array,
  labelIcon: PropTypes.node,
  disabled: PropTypes.bool,
};

const defaultProps = {
  type: 'text',
};

const Field = forwardRef(
  (
    {
      rules,
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
      labelIcon,
      disabled,
      ...props
    },
    ref,
  ) => {
    const [isRevealPwd, setIsRevealPwd] = useState(false);
    const inputProps = {
      id: props.id ?? name,
      name,
      type,
      invalid,
      'aria-describedby': `${name}Error`,
      ...props,
    };
    const renderInputFirst = type === 'checkbox' || type === 'radio';

    return (
      <Suspense fallback="loading...">
        <StyledFormGroup
          noMargin={noMargin}
          css={`
            margin-bottom: ${margin};
          `}>
          {renderInputFirst && label && (
            <Label
              htmlFor={inputProps.id}
              labelIcon={labelIcon}
              onlyRead={onlyRead}
              css="display: flex !important; align-items:center; margin-bottom:0 !important;">
              <Input
                {...inputProps}
                ref={ref}
                disabled={disabled}
                $invalid={invalid || error}
                checked={inputProps?.value}
                // eslint-disable-next-line no-shadow
                onChange={({ target: { name, checked } }) =>
                  inputProps?.onChange?.({ target: { name, value: checked } })
                }
              />
              <FakeInput>{type === 'checkbox' && <i className="icon-check" />}</FakeInput>
              <FakeLabel required={rules?.filter(({ required }) => required).length}>{label}</FakeLabel>
            </Label>
          )}

          {renderInputFirst || (
            <>
              {label && (
                <Label
                  labelIcon={labelIcon}
                  htmlFor={inputProps.id}
                  required={rules?.filter(({ required }) => required).length}>
                  {label}
                </Label>
              )}
              <InputHolder $searchField={searchField}>
                {/* input left icon */}
                {prefix && (
                  <InputIcon
                    disabled={disabled}
                    as={type === 'search' && 'button'}
                    type={type === 'search' ? 'button' : undefined}
                    prefix={prefix}
                    invalid={invalid || error}
                    css={type === 'search' && 'color: var(--primary)'}>
                    {prefix}
                  </InputIcon>
                )}
                {/* password field */}
                {type === 'password' ? (
                  <>
                    <Input
                      ref={ref}
                      {...inputProps}
                      $prefix
                      $suffix
                      $invalid={invalid || error}
                      type={isRevealPwd ? 'text' : 'password'}
                      $rounded={rounded}
                      disabled={disabled}
                      $button={button && true}
                      autoComplete="on"
                    />
                    <InputIcon
                      disabled={disabled}
                      suffix
                      css="cursor: pointer"
                      onClick={() => setIsRevealPwd(prevState => !prevState)}>
                      {isRevealPwd ? <i className="icon-eye-open" /> : <i className="icon-eye-close" />}
                    </InputIcon>
                  </>
                ) : (
                  <>
                    {/* any other input type */}
                    <Input
                      ref={ref}
                      {...inputProps}
                      $prefix={prefix}
                      disabled={disabled}
                      $suffix={suffix}
                      $invalid={invalid || error}
                      $rounded={rounded}
                      $button={button && true}
                    />
                    {/* input right icon */}
                    {suffix && (
                      <InputIcon suffix={suffix} disabled={disabled} invalid={invalid || error}>
                        {suffix}
                      </InputIcon>
                    )}
                    {button && button}
                  </>
                )}
              </InputHolder>
            </>
          )}
          {invalid ||
            (error && (
              <Error id={`${name}Error`} role="alert">
                {error}
              </Error>
            ))}
        </StyledFormGroup>
      </Suspense>
    );
  },
);

Field.propTypes = propTypes;

Field.defaultProps = defaultProps;

export default Field;
