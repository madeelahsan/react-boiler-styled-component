// TODO: Fix type appearing in Dom as a result of assigning link to "as" prop
import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton, IconHolder } from './Button.styles';
import { ButtonLoader } from '../Loaders';

const propTypes = {
  children: PropTypes.node.isRequired,
  loading: PropTypes.bool,
  type: PropTypes.string,
  htmlType: PropTypes.string,
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  shape: PropTypes.string,
  size: PropTypes.number,
  iconMobile: PropTypes.bool,
  rounded: PropTypes.bool,
  sm: PropTypes.bool,
  width: PropTypes.number,
  unStyled: PropTypes.bool,
  color: PropTypes.string,
};

const Button = React.forwardRef(
  (
    {
      children,
      loading,
      prefix,
      suffix,
      htmlType,
      type,
      shape,
      size,
      unStyled,
      iconMobile,
      rounded,
      sm,
      width,
      color,
      ...rest
    },
    ref,
  ) => (
    <StyledButton
      $prefix={prefix}
      $suffix={suffix}
      type={htmlType}
      $type={type}
      $shape={shape}
      $size={size}
      $unStyled={unStyled}
      $iconMobile={iconMobile}
      $rounded={rounded}
      $width={width}
      $sm={sm}
      $color={color}
      ref={ref}
      {...rest}>
      {!loading ? (
        <>
          {prefix && <IconHolder>{prefix}</IconHolder>} {children} {suffix && <IconHolder>{suffix}</IconHolder>}
        </>
      ) : (
        <>
          <ButtonLoader />
          loading...
        </>
      )}
    </StyledButton>
  ),
);

Button.propTypes = propTypes;
Button.defaultProps = {
  htmlType: 'button',
};

export default Button;
