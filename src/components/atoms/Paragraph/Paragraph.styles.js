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
    line-height: ${({ xs, sm, lg, xl }) => {
      if (xs) return `calc(var(--font-size-xs) + 0.3125rem);`;
      if (sm) return `calc(var(--font-size-sm) + 0.3125rem);`;
      if (lg) return `calc(var(--font-size-lg) + 0.3125rem);`;
      if (xl) return `calc(var(--font-size-xl) + 0.3125rem);`;
      return 'calc(var(--font-size-base) + 0.3125rem);';
    }};
  }
`;
