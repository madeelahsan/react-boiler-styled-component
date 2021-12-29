import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal';

const propTypes = {
  btnComponent: PropTypes.func,
  content: PropTypes.func,
  title: PropTypes.string,
  xl: PropTypes.bool,
  lg: PropTypes.bool,
  sm: PropTypes.bool,
  isClosable: PropTypes.bool,
  isOpen: PropTypes.bool,
  onModalClose: PropTypes.func,
  imgPreview: PropTypes.bool,
  width: PropTypes.number,
};
function ModalContainer({
  btnComponent,
  content,
  title,
  xl,
  lg,
  sm,
  isClosable,
  onModalClose = () => {},
  isOpen,
  imgPreview,
  width,
}) {
  const [isVisible, setIsVisible] = useState(!!isOpen);
  const showModal = () => {
    setIsVisible(true);
  };

  const handleCancel = () => {
    setIsVisible(false);
  };
  useEffect(() => {
    if (!isVisible) {
      onModalClose();
    }
  }, [isVisible]);

  return (
    <>
      {btnComponent && btnComponent({ onClick: showModal })}
      <Modal
        title={title}
        isOpen={isVisible}
        setIsOpen={setIsVisible}
        xl={xl}
        lg={lg}
        sm={sm}
        width={width}
        isClosable={isClosable}
        imgPreview={imgPreview}>
        {content({ onClose: handleCancel })}
      </Modal>
    </>
  );
}

ModalContainer.propTypes = propTypes;

export default ModalContainer;
