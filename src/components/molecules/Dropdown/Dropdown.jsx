// TODO: fix calender positioning
import React from 'react';
// eslint-disable-next-line no-unused-vars
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

import {
  StyledListboxInput,
  ReachListBoxButton,
  StyledListboxPopover,
  StyledListboxList,
  StyledListboxOption,
  Title,
} from './Dropdown.styles';

const propTypes = {
  title: PropTypes.string,
  setValue: PropTypes.func,
  filter: PropTypes.bool,
  options: PropTypes.object,
  children: PropTypes.node,
  twoBtns: PropTypes.bool,
  type: PropTypes.string,
  size: PropTypes.string,
};

function Dropdown({ title, options, setValue, filter, children, twoBtns, type = 'light', size = 40 }) {
  return (
    <>
      {filter ? (
        <StyledListboxInput onChange={() => ''}>
          {({ isExpanded }) => (
            <>
              <ReachListBoxButton $type={type} $size={size} $shape="circle">
                {isExpanded ? <i className="icon-close" /> : <i className="icon-filter" />}
              </ReachListBoxButton>
              <StyledListboxPopover $calendar portal={false} $twoBtns={twoBtns}>
                {title && <Title>{title}</Title>}
                {children}
                {/* was acting buggy so added hidden list to fix */}
                <StyledListboxList>
                  <StyledListboxOption value="1" css="display:none;">
                    hidden list
                  </StyledListboxOption>
                </StyledListboxList>
              </StyledListboxPopover>
            </>
          )}
        </StyledListboxInput>
      ) : (
        <StyledListboxInput onChange={value => setValue(value)}>
          <ReachListBoxButton $type={type} $size={size} $shape="circle">
            <i className="icon-menu-vertical" />
          </ReachListBoxButton>
          <StyledListboxPopover portal={false} $twoBtns={twoBtns}>
            {title && <Title sm>{title}</Title>}
            <StyledListboxList>
              {Object.keys(options).map(option => (
                <StyledListboxOption key={option} value={options[option]} label={options[option]}>
                  {options[option]}
                </StyledListboxOption>
              ))}
            </StyledListboxList>
          </StyledListboxPopover>
        </StyledListboxInput>
      )}
    </>
  );
}

Dropdown.propTypes = propTypes;

export default Dropdown;
