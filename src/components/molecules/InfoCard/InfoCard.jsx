import React from 'react';
import PropTypes from 'prop-types';
import { StyledInfoCard, Title, Value } from './InfoCard.styles';

const propTypes = {
  title: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.node]),
  fontbase: PropTypes.bool,
};

function InfoCard({ title, value, fontbase, ...props }) {
  return (
    <StyledInfoCard {...props}>
      <Title fontbase={fontbase}>{title}</Title>
      <Value fontbase={fontbase}>{value}</Value>
    </StyledInfoCard>
  );
}

InfoCard.propTypes = propTypes;

export default InfoCard;
