import React from 'react';
import { Link } from 'react-router-dom';
import { Grid } from 'sc-css-grid-system';
import { Button } from '../../components';
import { DemoHolder, ListItem, Card } from './Demo.styles';

function Demo() {
  return (
    <>
      <DemoHolder>
        <Card>
          <Grid as="ul" xs={2} gap={20}>
            <ListItem>
              <Button type="primary" as={Link} to="/login">
                Login
              </Button>
            </ListItem>
            <ListItem>
              <Button type="primary" as={Link} to="/ui">
                Ui
              </Button>
            </ListItem>
            <ListItem>
              <Button type="primary" as={Link} to="/onboarding">
                Onboarding
              </Button>
            </ListItem>
            <ListItem>
              <Button type="primary" as={Link} to="/dashboard">
                Dashboard
              </Button>
            </ListItem>
            <ListItem>
              <Button type="primary" as={Link} to="/free-credit-score-landing">
                Free Credit Score
              </Button>
            </ListItem>
          </Grid>
        </Card>
      </DemoHolder>
    </>
  );
}

export default Demo;
