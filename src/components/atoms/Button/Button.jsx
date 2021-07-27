// TODO: Fix type appearing in Dom as a result of assigning link to "as" prop
import React from 'react';
import PropTypes from 'prop-types';
import StyledButton from './Button.styles';
import { ButtonLoader } from '../Loaders';

const propTypes = {
  children: PropTypes.node.isRequired,
  loading: PropTypes.bool,
  type: PropTypes.string.isRequired,
  htmlType: PropTypes.string.isRequired,
  prefix: PropTypes.node,
  suffix: PropTypes.node,
};

const Button = React.forwardRef(({ children, loading, prefix, suffix, htmlType, type, ...rest }, ref) => (
  <StyledButton $prefix={prefix} $suffix={suffix} {...rest} type={htmlType} $type={type} ref={ref}>
    {!loading ? (
      <>
        {prefix && <span>{prefix}</span>} {children} {suffix && <span>{suffix}</span>}
      </>
    ) : (
      <>
        <ButtonLoader />
        loading...
      </>
    )}
  </StyledButton>
));

Button.propTypes = propTypes;

export default Button;
