import styled, { css } from 'styled-components/macro';

export const StyledGrid = styled.div`
  display: grid;

  ${({ gap }) =>
    gap &&
    typeof gap !== 'number' &&
    css`
      ${gap.xs &&
      css`
        gap: ${gap.xs}px;
      `}

      ${gap.sm &&
      css`
        @media (min-width: 576px) {
          gap: ${gap.sm}px;
        }
      `}

      ${gap.md &&
      css`
        @media (min-width: 768px) {
          gap: ${gap.md}px;
        }
      `}

      ${gap.lg &&
      css`
        @media (min-width: 992px) {
          gap: ${gap.lg}px;
        }
      `}

      ${gap.xl &&
      css`
        @media (min-width: 1200px) {
          gap: ${gap.xl}px;
        }
      `}
    `}

  ${({ gap }) =>
    gap &&
    typeof gap === 'number' &&
    css`
      gap: ${gap}px;
    `}

  ${({ rowGap }) =>
    rowGap &&
    typeof rowGap !== 'number' &&
    css`
      ${rowGap.xs &&
      css`
        row-gap: ${rowGap.xs}px;
      `}

      ${rowGap.sm &&
      css`
        @media (min-width: 576px) {
          row-gap: ${rowGap.sm}px;
        }
      `}

      ${rowGap.md &&
      css`
        @media (min-width: 768px) {
          row-gap: ${rowGap.md}px;
        }
      `}

      ${rowGap.lg &&
      css`
        @media (min-width: 992px) {
          row-gap: ${rowGap.lg}px;
        }
      `}

      ${rowGap.xl &&
      css`
        @media (min-width: 1200px) {
          row-gap: ${rowGap.xl}px;
        }
      `}
    `}

  ${({ rowGap }) =>
    rowGap &&
    typeof rowGap === 'number' &&
    css`
      row-gap: ${rowGap}px;
    `}

  ${({ colGap }) =>
    colGap &&
    typeof colGap !== 'number' &&
    css`
      ${colGap.xs &&
      css`
        column-gap: ${colGap.xs}px;
      `}

      ${colGap.sm &&
      css`
        @media (min-width: 576px) {
          column-gap: ${colGap.sm}px;
        }
      `}

      ${colGap.md &&
      css`
        @media (min-width: 768px) {
          column-gap: ${colGap.md}px;
        }
      `}

      ${colGap.lg &&
      css`
        @media (min-width: 992px) {
          column-gap: ${colGap.lg}px;
        }
      `}

      ${colGap.xl &&
      css`
        @media (min-width: 1200px) {
          column-gap: ${colGap.xl}px;
        }
      `}
    `}

  ${({ colGap }) =>
    colGap &&
    typeof colGap === 'number' &&
    css`
      column-gap: ${colGap}px;
    `}

  ${({ xs, colWidth }) =>
    xs &&
    css`
      grid-template-columns: repeat(${xs}, minmax(${colWidth || 0}px, 1fr));
    `}

  ${({ sm, colWidth }) =>
    sm &&
    css`
      @media (min-width: 576px) {
        grid-template-columns: repeat(${sm}, minmax(${colWidth || 0}px, 1fr));
      }
    `}

  ${({ md, colWidth }) =>
    md &&
    css`
      @media (min-width: 768px) {
        grid-template-columns: repeat(${md}, minmax(${colWidth || 0}px, 1fr));
      }
    `}

  ${({ lg, colWidth }) =>
    lg &&
    css`
      @media (min-width: 992px) {
        grid-template-columns: repeat(${lg}, minmax(${colWidth || 0}px, 1fr));
      }
    `}

  ${({ xl, colWidth }) =>
    xl &&
    css`
      @media (min-width: 1200px) {
        grid-template-columns: repeat(${xl}, minmax(${colWidth || 0}px, 1fr));
      }
    `}
`;
