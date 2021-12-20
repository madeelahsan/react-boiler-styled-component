/* eslint-disable react/prop-types */
import React from 'react';
import Grid from '../components/atoms/Grid';
import GridCol from '../components/atoms/GridCol';

export default {
  title: 'Grid/grid col',
  component: GridCol,
};

const colCss = {
  backgroundColor: 'rgba(39,41,43,0.03)',
  border: '1px solid rgba(39,41,43,0.1)',
  padding: '.75rem',
  textAlign: 'center',
};

const Template = ({ numberOfChildren, ...args }) => (
  <Grid xs={12} gap={30}>
    <GridCol style={colCss}>1</GridCol>
    <GridCol {...args} style={colCss}>
      2
    </GridCol>
    <GridCol style={colCss}>3</GridCol>
    <GridCol style={colCss}>4</GridCol>
    <GridCol style={colCss}>5</GridCol>
    <GridCol style={colCss}>6</GridCol>
    <GridCol style={colCss}>7</GridCol>
    <GridCol style={colCss}>8</GridCol>
    <GridCol style={colCss}>9</GridCol>
    <GridCol style={colCss}>10</GridCol>
    <GridCol style={colCss}>11</GridCol>
    <GridCol style={colCss}>12</GridCol>
  </Grid>
);

export const Span = Template.bind({});
Span.args = {
  xs: 2,
};

export const Responsive = Template.bind({});
Responsive.args = {
  xs: 2,
  sm: 4,
  md: 5,
  lg: 6,
  xl: 8,
};
