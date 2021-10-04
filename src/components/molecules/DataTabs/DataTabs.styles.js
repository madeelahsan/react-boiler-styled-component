// eslint-disable-next-line no-unused-vars
import styled from 'styled-components/macro';
import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@reach/tabs';

export const StyledTabs = styled(Tabs)`
  flex-grow: 1;

  @media (min-width: 768px) {
    padding: 0 0 0 40px;
  }
`;

export const Wrap = styled.div`
  @media (max-width: 767px) {
    overflow-x: auto;
    margin: 0 -20px;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const StyledTabList = styled(TabList)`
  display: flex;
  white-space: nowrap;
  margin: 0;
  padding: 0 20px 10px;
  position: relative;

  @media (min-width: 768px) {
    white-space: normal;
    margin: 0;
    padding: 0;
  }

  &:after {
    content: '';
    position: absolute;
    left: -20px;
    right: -70px;
    bottom: 10px;
    height: 1px;
    background: #e6e8ec;
    z-index: -1;

    @media (min-width: 576px) {
      left: 0;
      right: 0;
    }
    @media (min-width: 768px) {
      left: 0;
      right: -110px;
      bottom: 0;
    }
  }
`;

export const TabBtn = styled.div`
  padding: 0 15px;

  &:first-child {
    padding-left: 0;
  }
`;

export const StyledTab = styled(Tab)`
  font-size: var(--font-size-sm);
  line-height: 16px;
  font-weight: 700;
  text-transform: capitalize;
  color: var(--text-color-gray);
  position: relative;
  padding: 25px 0;

  &:after {
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
    color: var(--secondary-text-color);

    &:after {
      visibility: visible;
      opacity: 1;
      width: 100%;
    }
  }
`;
export const StyledTabPanels = styled(TabPanels)`
  overflow: hidden;
  padding: 40px 0;

  @media (min-width: 768px) {
    padding: 50px 0;
  }
`;

export const StyledTabPanel = styled(TabPanel)`
  position: relative;
`;
