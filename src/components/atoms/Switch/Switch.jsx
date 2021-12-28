import React from 'react';
import PropTypes from 'prop-types';
import { StyledSwitch, SwitchLabel, SwitchHolder, LabelHolder } from './Switch.styles';

const propTypes = {
  type: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  name: PropTypes.string,
  noMargin: PropTypes.bool,
};

function Switch({ label, name, noMargin, ...props }) {
  const switchProps = {
    id: name,
    name,
    ...props,
  };
  return (
    <>
      <SwitchHolder noMargin={noMargin}>
        <StyledSwitch type="checkbox" {...switchProps} />
        <SwitchLabel htmlFor={switchProps.id}>
          {label && <LabelHolder>{label}</LabelHolder>}
          <span />
        </SwitchLabel>
      </SwitchHolder>
    </>
  );
}

Switch.propTypes = propTypes;

export default Switch;
