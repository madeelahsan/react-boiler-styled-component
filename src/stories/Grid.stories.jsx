/* eslint-disable react/prop-types */
import React from 'react';
import Grid from '../components/atoms/Grid';
import GridCol from '../components/atoms/GridCol';

export default {
  title: 'Grid/grid',
  component: Grid,
  argTypes: {
    numberOfChildren: { type: 'number', defaultValue: 12 },
  },
};

const colCss = {
  backgroundColor: 'rgba(39,41,43,0.03)',
  border: '1px solid rgba(39,41,43,0.1)',
  padding: '.75rem',
  textAlign: 'center',
};

const Template = ({ numberOfChildren, ...args }) => (
  <Grid {...args}>
    {[...Array(numberOfChildren).keys()].map(n => (
      <GridCol style={colCss} key={n}>
        {n + 1}
      </GridCol>
    ))}
  </Grid>
);

export const GridStory = Template.bind({});
GridStory.args = {
  xs: 2,
  gap: 30,
};

export const NoSpacing = Template.bind({});
NoSpacing.args = {
  xs: 3,
};

export const Responsive = Template.bind({});
Responsive.args = {
  xs: 2,
  sm: 3,
  md: 4,
  lg: 6,
  xl: 12,
  gap: 30,
};

export const RowGap = Template.bind({});
RowGap.args = {
  xs: 4,
  gap: 30,
  rowGap: 50,
};

export const ColGap = Template.bind({});
ColGap.args = {
  xs: 4,
  gap: 30,
  colGap: 50,
};

export const ColWidth = Template.bind({});
ColWidth.args = {
  xs: 4,
  gap: 30,
  colWidth: 500,
};

export const ResponsiveGap = Template.bind({});
ResponsiveGap.args = {
  xs: 4,
  gap: { xs: 10, sm: 25, md: 40, lg: 60, xl: 80 },
};
