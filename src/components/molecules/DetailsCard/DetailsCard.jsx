import React from 'react';
import PropTypes from 'prop-types';
import { StyledDetailsCard } from './DetailsCard.styles';
import Heading from '../../atoms/Heading';

const propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

function DetailsCard({ title, children, ...props }) {
  return (
    <StyledDetailsCard {...props}>
      <>
        {title && <Heading level={4}>{title}</Heading>}
        {children}
      </>
    </StyledDetailsCard>
  );
}

DetailsCard.propTypes = propTypes;

export default DetailsCard;
