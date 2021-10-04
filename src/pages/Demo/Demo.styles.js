import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';

export const Card = styled.div`
  background: var(--white);
  box-shadow: 0 5.4px 3.6px rgba(0, 0, 0, 0.028), 0 9.9px 9px rgba(0, 0, 0, 0.043), 0 14.2px 18.4px rgba(0, 0, 0, 0.052),
    0 20.7px 38px rgba(0, 0, 0, 0.063), 0 41px 104px rgba(0, 0, 0, 0.1);
  padding: 30px;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  border-radius: 8px;
`;

export const DemoHolder = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ListItem = styled.li``;

export const ListItemLink = styled(Link)``;
