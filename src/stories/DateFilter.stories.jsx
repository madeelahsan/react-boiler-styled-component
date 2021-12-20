import React, { useState } from 'react';
import Dropdown from '../components/molecules/Dropdown';
import ReactDateRange from '../components/molecules/ReactDateRange';

import GlobalStyles from '../styles/GlobalStyles.styles';

export default {
  title: 'DateRangeFilter',
  component: ReactDateRange,
};

const Template = ({ ...args }) => {
  const [dateState, setDateState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: 'selection',
    },
  ]);
  return (
    <>
      <GlobalStyles />
      <Dropdown filter title="Filter" {...args}>
        <ReactDateRange
          onChange={item => setDateState([item.selection])}
          moveRangeOnFirstSelection={false}
          ranges={dateState}
        />
      </Dropdown>
    </>
  );
};

export const dateFilter = Template.bind({});
dateFilter.args = {};
