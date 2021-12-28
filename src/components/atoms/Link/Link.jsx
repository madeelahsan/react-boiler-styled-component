import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import { Link as ReactLink } from 'react-router-dom';
import { styles } from './Link.styles';

const StyledLink = styled(({ ...props }) => <ReactLink {...props} />)`
  ${styles}
`;

const Anchor = styled.a`
  ${styles}
`;

const Link = ({ ...props }) => {
  const { to, underline } = props;
  if (to) {
    return <StyledLink $underline={underline} {...props} />;
  }
  return <Anchor $underline={underline} {...props} />;
};

Link.propTypes = {
  underline: PropTypes.bool,
  to: PropTypes.string,
};

export default Link;
