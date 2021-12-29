// eslint-disable-next-line no-unused-vars
import styled from 'styled-components/macro';
import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@reach/tabs';

export const StyledTabs = styled(Tabs)`
  flex-grow: 1;
`;

export const Wrap = styled.div`
  overflow-x: auto;
  border-bottom: 1px solid #e6e8ec;
  position: relative;

  &::-webkit-scrollbar {
    height: 8px;
    border-radius: 0;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
  }
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.3);
  }
`;

export const StyledTabList = styled(TabList)`
  display: flex;
  white-space: nowrap;
  margin: 0 0 3px;
  position: relative;
  z-index: 1;
`;

export const TabBtn = styled.div`
  padding: 0 5px;
  flex-shrink: 0;
  @media (min-width: 768px) {
    padding: 0 5px;
  }
  &:first-child {
    padding-left: 0;
  }
`;

export const StyledTab = styled(Tab)`
  font-size: var(--font-size-sm);
  line-height: calc(var(--font-size-sm) + 0.3125rem);
  font-weight: 700;
  text-transform: capitalize;
  color: var(--text-color-gray);
  position: relative;
  padding: 20px 5px;
  border-radius: 6px;
  @media (min-width: 768px) {
    padding: 14px 10px;
  }

  &:after {
    display: none;
    visibility: hidden;
    opacity: 0;
    transition: ease-in-out 0.5s;
    content: '';
    position: absolute;
    left: 50%;
    right: 0;
    bottom: 0;
    transform: translateX(-50%);
    height: 1px;
    width: 0;
    background: var(--secondary-text-color);
  }

  &:hover,
  &[data-selected] {
    background: var(--primary);
    color: var(--white);

    &:after {
      visibility: visible;
      opacity: 1;
      width: 100%;
    }
  }
`;

export const StyledTabPanels = styled(TabPanels)`
  overflow: hidden;
  padding: 20px 0 20px;

  @media (min-width: 768px) {
    padding: 30px 0;
  }
`;

export const StyledTabPanel = styled(TabPanel)`
  position: relative;
`;
