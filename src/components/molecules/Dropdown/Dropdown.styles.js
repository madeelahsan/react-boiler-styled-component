import styled, { css } from 'styled-components/macro';
import { ListboxInput, ListboxOption, ListboxPopover, ListboxList } from '@reach/listbox';
import { StyledListBoxButton } from '../../atoms/Button/Button.styles';

const MenuListStyles = css`
  box-shadow: 3px 18px 44px rgba(176, 183, 195, 0.28);
  padding: 1rem;
  border-radius: 0.875rem;
  background: var(--white);
  color: var(--primary-text-color);
  border: none;
  min-width: min-content;
  position: absolute;
  top: calc(100% + 13px);
  z-index: var(--z-30);
  ${({ $calendar }) =>
    $calendar
      ? css`
          right: ${({ $twoBtns }) => ($twoBtns ? '-21px' : '-63px')};
          @media (min-width: 576px) {
            right: 0;
          }
        `
      : 'right: 0;'}
`;

export const StyledListboxPopover = styled(ListboxPopover)`
  ${MenuListStyles}
`;

export const Title = styled.strong`
  margin-bottom: 1rem;
  display: block;
  ${({ sm }) =>
    sm
      ? css`
          font-size: 0.75rem;
          line-height: 1rem;
        `
      : css`
          font-size: 0.875rem;
          line-height: 1rem;
        `}
`;

export const StyledListboxOption = styled(ListboxOption)`
  padding: 0.625rem 0.875rem;
  width: 100%;
  text-align: left;
  background-color: ${({ selected }) => (selected ? 'var(--light-secondary)' : 'transparent')};
  border: none;
  border-radius: 40px;
  margin-bottom: 3px;
  color: var(--primary-text-color);
  font-size: 0.6875rem;
  line-height: 0.75rem;
  min-width: max-content;
  &:hover,
  &:focus,
  &[data-current-selected] {
    cursor: pointer;
    background-color: var(--light-secondary);
    color: var(--primary-text-color);
  }
  &:last-child {
    margin-bottom: 0;
  }
`;

export const ReachListBoxButton = styled(StyledListBoxButton)`
  &[aria-expanded='true'] {
    background: var(--primary);
    color: var(--white);
  }
`;

export const StyledListboxInput = styled(ListboxInput)`
  position: relative;
`;

export const StyledListboxList = styled(ListboxList)`
  outline: none;
`;
