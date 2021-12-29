import React from 'react';

import InputButton from '../components/atoms/InputButton';
// import Switch from '../components/atoms/Switch';
import Field from '../components/molecules/Field';
import GlobalStyles from '../styles/GlobalStyles.styles';

export default {
  title: 'Forms/fields',
  component: Field,
};

const Template = ({ ...args }) => (
  <>
    <GlobalStyles />
    <Field {...args} />
  </>
);

export const simpleInput = Template.bind({});
simpleInput.args = {
  type: 'text',
  label: 'Simple Input',
  name: 'simpleInput',
};

export const inputWithLeftIcon = Template.bind({});
inputWithLeftIcon.args = {
  type: 'text',
  label: 'Input with Left Icon',
  name: 'name',
  prefix: <i className="material-icons-outlined">email</i>,
};

export const inputWithRightIcon = Template.bind({});
inputWithRightIcon.args = {
  type: 'text',
  label: 'Input with Right Icon',
  name: 'name',
  suffix: <i className="material-icons-outlined">email</i>,
};

export const inputWithLeftRightIcon = Template.bind({});
inputWithLeftRightIcon.args = {
  type: 'text',
  label: 'Input with left and Right Icon',
  name: 'name',
  prefix: <i className="material-icons-outlined">email</i>,
  suffix: <i className="material-icons-outlined">email</i>,
};

export const passwordField = Template.bind({});
passwordField.args = {
  type: 'password',
  label: 'Password Field',
  name: 'password',
  prefix: <i className="material-icons-outlined">lock</i>,
};

export const errorField = Template.bind({});
errorField.args = {
  type: 'text',
  label: 'Input with Error',
  name: 'error',
  error: 'Error Message',
  prefix: <i className="material-icons-outlined">credit_card</i>,
};

export const searchField = Template.bind({});
searchField.args = {
  type: 'search',
  label: 'Search Form',
  name: 'search',
  button: (
    <InputButton type="primary" size={40} shape="circle" unStyled>
      <i className="material-icons-outlined">search</i>
    </InputButton>
  ),
};

export const roundedField = Template.bind({});
roundedField.args = {
  type: 'text',
  label: 'Rounded Field',
  name: 'rounded',
  rounded: true,
};

export const fieldWithButton = Template.bind({});
fieldWithButton.args = {
  type: 'text',
  label: 'Field with button',
  name: 'name',
  button: (
    <InputButton type="primary" size={40} shape="circle">
      <i className="material-icons-outlined">content_copy</i>
    </InputButton>
  ),
};

export const textarea = Template.bind({});
textarea.args = {
  type: 'textarea',
  label: 'Textarea',
  name: 'textarea',
  rows: 3,
};

export const disabledInput = Template.bind({});
disabledInput.args = {
  type: 'text',
  label: 'Disabled Input',
  name: 'disabledInput',
  disabled: true,
};

export const checkbox = Template.bind({});
checkbox.args = {
  type: 'checkbox',
  label: 'Checkbox',
  name: 'Checkbox',
};

export const radio = Template.bind({});
radio.args = {
  type: 'radio',
  label: 'radio',
  name: 'radio',
  id: 'radio1',
};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
  type: 'checkbox',
  label: 'Checkbox',
  name: 'Checkbox',
  onlyRead: true,
};
