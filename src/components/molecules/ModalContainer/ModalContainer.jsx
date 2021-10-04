import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Modal } from '../..';

const propTypes = {
  btnComponent: PropTypes.func,
  content: PropTypes.func,
  title: PropTypes.string,
  lg: PropTypes.bool,
  sm: PropTypes.bool,
  isClosable: PropTypes.bool,
  isOpen: PropTypes.bool,
};

function ModalContainer({ btnComponent, content, title, lg, sm, isClosable, isOpen }) {
  const [isVisible, setIsVisible] = useState(!!isOpen);

  const showModal = () => {
    setIsVisible(true);
  };

  const handleCancel = () => {
    setIsVisible(false);
  };

  return (
    <>
      {btnComponent({ onClick: showModal })}
      <Modal title={title} isOpen={isVisible} setIsOpen={setIsVisible} lg={lg} sm={sm} isClosable={isClosable}>
        {content({ onClose: handleCancel })}
      </Modal>
    </>
  );
}

ModalContainer.propTypes = propTypes;

export default ModalContainer;
