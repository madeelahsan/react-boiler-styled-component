import React from 'react';
import { Link } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import styled from 'styled-components/macro';

export default function MainPage() {
  return (
    <>
      <span>
        Go to{' '}
        <Link to="/demo" css="color: var(--light-blue);">
          Demo <i className="icon-chevron-right" />
        </Link>
      </span>
    </>
  );
}
