import React from 'react';
import DetailsCard from '../components/molecules/DetailsCard';
import Grid from '../components/atoms/Grid';
import InfoCard from '../components/molecules/InfoCard';
import GlobalStyles from '../styles/GlobalStyles.styles';

export default {
  title: 'Cards',
  component: InfoCard,
};

const Template = ({ ...args }) => (
  <>
    <GlobalStyles />
    <DetailsCard>
      <Grid xs={1} sm={2} gap={20}>
        <InfoCard {...args} />
        <InfoCard {...args} />
      </Grid>
    </DetailsCard>
  </>
);

export const defaultCard = Template.bind({});
defaultCard.args = {
  title: 'Sender Bank Name',
  value: 'World Bank',
};

export const unstyled = Template.bind({});
unstyled.args = {
  title: 'Sender Bank Name',
  value: 'World Bank',
  $unStyled: true,
};
