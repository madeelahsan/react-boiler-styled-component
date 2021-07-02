import React from 'react';
import { Link } from 'react-router-dom';

import { DemoHolder, DemoList, ListItem, Card } from './Demo.styles';
import Button from '../../components/Button';

function Demo() {
  return (
    <>
      <DemoHolder>
        <Card>
          <DemoList>
            <ListItem>
              <Button as={Link} to="/login">
                Login
              </Button>
            </ListItem>
          </DemoList>
        </Card>
      </DemoHolder>
    </>
  );
}

export default Demo;
