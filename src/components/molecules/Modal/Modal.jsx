// TODO : fix modal leave animation

import React from 'react';
// eslint-disable-next-line no-unused-vars
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import { animated, useTransition } from 'react-spring';
import { Flex } from '../../../styles/helpers.styles';
import { CloseButton, ModalHeading, StyledDialogOverlay, StyledDialogContent, DialogCentered } from './Modal.styles';

const propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

function Modal({ isOpen, setIsOpen, title, children }) {
  const AnimatedDialogOverlay = animated(StyledDialogOverlay);
  const AnimatedDialogContent = animated(StyledDialogContent);
  const transitions = useTransition(isOpen, {
    from: { opacity: 0, y: -10 },
    enter: { opacity: 1, y: 0 },
    leave: { opacity: 0, y: 10 },
  });

  return (
    <div>
      {transitions(
        (styles, item) =>
          item && (
            <AnimatedDialogOverlay
              style={{ opacity: styles.opacity }}
              isOpen={isOpen}
              onDismiss={() => setIsOpen(false)}>
              <DialogCentered>
                <AnimatedDialogContent
                  aria-labelledby="dialog-title"
                  style={{
                    transform: styles.y.to(value => `translate3d(0px, ${value}px, 0px)`),
                  }}>
                  <Flex justify="space-between" align="center" nowrap>
                    <ModalHeading level={2}>{title}</ModalHeading>
                    <CloseButton
                      type="white"
                      htmlType="button"
                      shape="circle"
                      onClick={() => setIsOpen(!isOpen)}
                      size={46}
                      css="flex-shrink:0;">
                      <i className="icon-close" />
                    </CloseButton>
                  </Flex>
                  {children}
                </AnimatedDialogContent>
              </DialogCentered>
            </AnimatedDialogOverlay>
          ),
      )}
    </div>
  );
}

Modal.propTypes = propTypes;

export default Modal;
