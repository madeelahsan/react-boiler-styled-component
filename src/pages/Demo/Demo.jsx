import React from 'react';
import { Link } from 'react-router-dom';

import { DemoHolder, DemoList, ListItem, Card } from './Demo.styles';
import { Button } from '../../components';

function Demo() {
  return (
    <>
      <DemoHolder>
        <Card>
          <DemoList>
            <ListItem>
              <Button type="primary" htmlType="button" as={Link} to="/login">
                Login
              </Button>
            </ListItem>
            <ListItem>
              <Button type="primary" htmlType="button" as={Link} to="/ui">
                Ui
              </Button>
            </ListItem>
          </DemoList>
        </Card>
      </DemoHolder>
    </>
  );
}

export default Demo;
