import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Link from '../components/atoms/Link';
import GlobalStyles from '../styles/GlobalStyles.styles';

export default {
  title: 'Typography/Links',
  component: Link,
};

const Template = ({ ...args }) => (
  <>
    <GlobalStyles />
    <Router>
      <Link {...args} />
    </Router>
  </>
);

export const Links = Template.bind({});
Links.args = {
  to: '/',
  children: 'React Link',
};

export const underlineLinks = Template.bind({});
underlineLinks.args = {
  to: '/',
  children: 'React Link',
  $underline: true,
};

export const Anchor = Template.bind({});
Anchor.args = {
  as: 'a',
  children: 'Link as a element',
  href: '/',
};
