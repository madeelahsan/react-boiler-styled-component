import React, { useState } from 'react';
import Dropdown from '../components/molecules/Dropdown';

import GlobalStyles from '../styles/GlobalStyles.styles';

export default {
  title: 'Dropdown',
  component: Dropdown,
};

const options = { one: 'One option', two: 'Another option' };

const Template = ({ ...args }) => {
  // eslint-disable-next-line no-unused-vars
  const [value, setValue] = useState(options.one);
  return (
    <>
      <GlobalStyles />
      <Dropdown options={options} setValue={setValue} {...args} />
    </>
  );
};

export const dropdown = Template.bind({});
dropdown.args = {};
