import React from 'react';
import DetailsCard from '../components/molecules/DetailsCard';
import Grid from '../components/atoms/Grid';
import InfoCard from '../components/molecules/InfoCard';
import GlobalStyles from '../styles/GlobalStyles.styles';

export default {
  title: 'Cards/GrayCard',
  component: DetailsCard,
};

const Template = ({ ...args }) => (
  <>
    <GlobalStyles />
    <DetailsCard {...args}>
      <Grid xs={1} sm={2} gap={20}>
        <InfoCard title="Sender Name" value="Larry Taylor " $unStyled />
        <InfoCard title="Sender Name" value="Larry Taylor " $unStyled />
      </Grid>
    </DetailsCard>
  </>
);

export const GrayCard = Template.bind({});
GrayCard.args = {
  gray: true,
};
