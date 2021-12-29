/* eslint-disable react/prop-types */
import React from 'react';
import ModalContainer from '../components/molecules/ModalContainer';
import Button from '../components/atoms/Button';
import '@reach/dialog/styles.css';
import GlobalStyles from '../styles/GlobalStyles.styles';

export default {
  title: 'Modal',
  component: ModalContainer,
};

const Template = ({ ...args }) => (
  <>
    <GlobalStyles />
    <ModalContainer {...args} />
  </>
);

export const defaultModal = Template.bind({});
defaultModal.args = {
  title: 'Modal Title',
  btnComponent: ({ onClick }) => (
    <Button type="primary" onClick={onClick}>
      Open Modal
    </Button>
  ),
  content: () => <span>component goes here</span>,
};

export const largeModal = Template.bind({});
largeModal.args = {
  title: ' Large Modal',
  btnComponent: ({ onClick }) => (
    <Button type="primary" onClick={onClick}>
      Large Modal
    </Button>
  ),
  content: () => <span>component goes here</span>,
  lg: true,
};

export const smallModal = Template.bind({});
smallModal.args = {
  title: ' small Modal',
  btnComponent: ({ onClick }) => (
    <Button type="primary" onClick={onClick}>
      Small Modal
    </Button>
  ),
  content: () => <span>component goes here</span>,
  sm: true,
};

export const customWidth = Template.bind({});
customWidth.args = {
  title: ' Custom Width Modal',
  btnComponent: ({ onClick }) => (
    <Button type="primary" onClick={onClick}>
      Custom Width Modal
    </Button>
  ),
  content: () => <span>component goes here</span>,
  width: 1100,
};

export const unclosable = Template.bind({});
unclosable.args = {
  title: 'Modal Title',
  btnComponent: ({ onClick }) => (
    <Button type="primary" onClick={onClick}>
      Modal unclosable
    </Button>
  ),
  content: () => <span>You can not close this modal</span>,
  isClosable: false,
};
