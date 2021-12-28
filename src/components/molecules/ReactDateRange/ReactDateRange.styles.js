import styled from 'styled-components/macro';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

export const StyledDateRange = styled(DateRange)`
  max-width: 300px;
  @media (min-width: 576px) {
    max-width: none;
  }
  .rdrStartEdge,
  .rdrEndEdge {
    color: var(--primary) !important;
  }
  .rdrDateDisplayItemActive {
    border-color: var(--primary);
  }
  .rdrWeekDay {
    font-weight: bold;
    color: var(--text-color-gray);
  }
  .rdrMonth {
    padding: 0;
    @media (max-width: 575px) {
      width: auto;
    }
  }
  .rdrMonthAndYearPickers {
    select {
      line-height: normal;
    }
  }
`;

export const ButtonHolder = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 12px;
`;
