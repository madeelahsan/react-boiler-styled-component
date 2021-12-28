import styled from 'styled-components/macro';
import ReactTooltip from 'react-tooltip';

export const StyledTooltip = styled(ReactTooltip)`
  &.__react_component_tooltip {
    /* white-space: nowrap; */
    width: 200px !important;
    text-align: center !important;
    font-size: 12px !important;
    line-height: 15px !important;
    padding: 8px 10px !important;
  }
  &.type-success {
    background: var(--success);
    &.place-top {
      &:after {
        border-top-color: var(--success) !important;
      }
    }
    &.place-right {
      &:after {
        border-right-color: var(--success) !important;
      }
    }
    &.place-bottom {
      &:after {
        border-bottom-color: var(--success) !important;
      }
    }
    &.place-left {
      &:after {
        border-left-color: var(--success) !important;
      }
    }
  }
  &.type-warning {
    background: var(--warning);
    &.place-top {
      &:after {
        border-top-color: var(--warning) !important;
      }
    }
    &.place-right {
      &:after {
        border-right-color: var(--warning) !important;
      }
    }
    &.place-bottom {
      &:after {
        border-bottom-color: var(--warning) !important;
      }
    }
    &.place-left {
      &:after {
        border-left-color: var(--warning) !important;
      }
    }
  }
  &.type-info {
    background: var(--info);
    &.place-top {
      &:after {
        border-top-color: var(--info) !important;
      }
    }
    &.place-right {
      &:after {
        border-right-color: var(--info) !important;
      }
    }
    &.place-bottom {
      &:after {
        border-bottom-color: var(--info) !important;
      }
    }
    &.place-left {
      &:after {
        border-left-color: var(--info) !important;
      }
    }
  }
  &.type-error {
    background: var(--danger);
    &.place-top {
      &:after {
        border-top-color: var(--danger) !important;
      }
    }
    &.place-right {
      &:after {
        border-right-color: var(--danger) !important;
      }
    }
    &.place-bottom {
      &:after {
        border-bottom-color: var(--danger) !important;
      }
    }
    &.place-left {
      &:after {
        border-left-color: var(--danger) !important;
      }
    }
  }
`;
