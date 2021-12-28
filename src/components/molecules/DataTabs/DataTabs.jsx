import React from 'react';
import PropTypes from 'prop-types';
import { StyledTabs, Wrap, StyledTabList, TabBtn, StyledTab, StyledTabPanels, StyledTabPanel } from './DataTabs.styles';

const propTypes = {
  data: PropTypes.array,
};

function DataTabs({ data }) {
  return (
    <>
      <StyledTabs>
        <Wrap>
          <StyledTabList>
            {data.map((tab, index) => (
              <TabBtn key={index}>
                <StyledTab>{tab.label}</StyledTab>
              </TabBtn>
            ))}
          </StyledTabList>
        </Wrap>

        <StyledTabPanels>
          {data.map((tab, index) => (
            <StyledTabPanel key={index}>{tab.content}</StyledTabPanel>
          ))}
        </StyledTabPanels>
      </StyledTabs>
    </>
  );
}

DataTabs.propTypes = propTypes;

export default DataTabs;
