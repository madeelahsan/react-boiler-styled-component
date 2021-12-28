import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal';

function ModalContainer({
  btnComponent,
  content,
  title,
  xxl,
  xl,
  lg,
  sm,
  isClosable,
  onModalClose = () => {},
  isOpen,
  imgPreview,
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
        xxl={xxl}
        xl={xl}
        lg={lg}
        sm={sm}
        isClosable={isClosable}
        imgPreview={imgPreview}>
        {content({ onClose: handleCancel })}
      </Modal>
    </>
  );
}

ModalContainer.propTypes = {
  btnComponent: PropTypes.func,
  content: PropTypes.func,
  title: PropTypes.string,
  xl: PropTypes.bool,
  lg: PropTypes.bool,
  sm: PropTypes.bool,
  xxl: PropTypes.bool,
  isClosable: PropTypes.bool,
  isOpen: PropTypes.bool,
  onModalClose: PropTypes.func,
  imgPreview: PropTypes.bool,
};

export default ModalContainer;
