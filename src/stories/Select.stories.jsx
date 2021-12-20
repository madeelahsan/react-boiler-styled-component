import React from 'react';
import Select from '../components/atoms/Select';

import GlobalStyles from '../styles/GlobalStyles.styles';

export default {
  title: 'Forms/select',
  component: Select,
};

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

const Template = ({ ...args }) => (
  <>
    <GlobalStyles />
    <Select {...args} />
  </>
);

export const reactSelect = Template.bind({});
reactSelect.args = {
  options,
  isSearchable: false,
  label: 'React Select',
};

export const selectSearchable = Template.bind({});
selectSearchable.args = {
  options,
  isSearchable: true,
  label: 'React Select',
};
