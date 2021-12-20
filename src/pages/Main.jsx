import React from 'react';
// eslint-disable-next-line no-unused-vars
import styled from 'styled-components/macro';
import Heading from '../components/atoms/Heading';

export default function MainPage() {
  return (
    <>
      <Heading level={3} css="text-align: center; padding: 20px;">
        &quot;npm run storybook&quot; for components Demo.
      </Heading>
    </>
  );
}
