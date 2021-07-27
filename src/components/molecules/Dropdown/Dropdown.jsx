import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import onClickOutside from 'react-onclickoutside';
import { usePopper } from 'react-popper';
import { DDWrapper } from './Dropdown.styles';
import { DropdownList, DropdownItem, Button } from '../..';

const propTypes = {
  title: PropTypes.string,
  items: PropTypes.array,
  multiSelect: PropTypes.bool,
};

function Dropdown({ title, items, multiSelect = false }) {
  const container = useRef();
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, { placement: 'bottom' });

  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState([]);
  const toggle = () => setOpen(!open);
  Dropdown.handleClickOutside = () => setOpen(false);
  Dropdown.setClickOutsideRef = () => container.current;

  function handleOnClick(item) {
    if (!selection.some(current => current.id === item.id)) {
      if (!multiSelect) {
        setSelection([item]);
      } else if (multiSelect) {
        setSelection([...selection, item]);
      }
    } else {
      let selectionAfterRemoval = selection;
      selectionAfterRemoval = selectionAfterRemoval.filter(current => current.id !== item.id);
      setSelection([...selectionAfterRemoval]);
    }
  }

  function isItemInSelection(item) {
    if (selection.some(current => current.id === item.id)) {
      return true;
    }
    return false;
  }

  return (
    <>
      <DDWrapper ref={container}>
        <Button
          htmlType="button"
          type="light"
          tabIndex={0}
          size={40}
          shape="circle"
          ref={setReferenceElement}
          onKeyPress={() => toggle(!open)}
          onClick={() => toggle(!open)}>
          <i className="icon-menu-vertical" />
          {/* {title} */}
          {/* <span>{open ? <i className="icon-chevron-up" /> : <i className="icon-chevron-down" />}</span> */}
        </Button>
        {open && (
          <DropdownList ref={setPopperElement} style={styles.popper} {...attributes.popper}>
            <DropdownItem $title>{title}</DropdownItem>
            {items.map(item => (
              <DropdownItem key={item.id} selected={isItemInSelection(item)}>
                <button type="button" onClick={() => handleOnClick(item)}>
                  {item.value}
                </button>
              </DropdownItem>
            ))}
          </DropdownList>
        )}
      </DDWrapper>
    </>
  );
}

Dropdown.propTypes = propTypes;

const clickOutsideConfig = {
  handleClickOutside: () => Dropdown.handleClickOutside,
  setClickOutsideRef: () => Dropdown.setClickOutsideRef,
};

export default onClickOutside(Dropdown, clickOutsideConfig);
