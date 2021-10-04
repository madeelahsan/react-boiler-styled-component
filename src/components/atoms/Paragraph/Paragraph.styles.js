import styled from 'styled-components/macro';

export const StyledParagraph = styled.p`
  font-size: var(--font-size-sm);
  line-height: var(--paragraph-line-height);
  color: var(--text-color-gray);
  margin: ${({ noMargin }) => (noMargin ? '' : '0 0 0.625rem')};

  @media (min-width: 576px) {
    margin: ${({ noMargin }) => (noMargin ? '' : '0 0 1.25rem')};
    font-size: ${({ xs, sm, lg, xl }) => {
      if (xs) return 'var(--font-size-xs)';
      if (sm) return 'var(--font-size-sm)';
      if (lg) return 'var(--font-size-lg)';
      if (xl) return 'var(--font-size-xl)';
      return 'var(--font-size-base)';
    }};
    line-height: ${({ xs, xl }) => {
      if (xs) return '0.9375rem';
      if (xl) return '1.5625rem';
      return '';
    }};
  }
`;
