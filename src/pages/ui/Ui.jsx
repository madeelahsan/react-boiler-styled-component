import React from 'react';
import { Link } from 'react-router-dom';
import { Grid } from 'sc-css-grid-system';
import { DemoHolder, ListItem, Card } from '../Demo/Demo.styles';
import { Button } from '../../components';

export default function Ui() {
  return (
    <>
      <DemoHolder>
        <Card>
          <Grid as="ul" xs={2} gap={20}>
            <ListItem>
              <Button type="primary" htmlType="button" as={Link} to="/ui/typography">
                Typography
              </Button>
            </ListItem>
            <ListItem>
              <Button type="primary" htmlType="button" as={Link} to="/ui/buttons">
                Buttons
              </Button>
            </ListItem>
            <ListItem>
              <Button type="primary" htmlType="button" as={Link} to="/ui/forms">
                Forms
              </Button>
            </ListItem>
            <ListItem>
              <Button type="primary" htmlType="button" as={Link} to="/ui/table">
                Table
              </Button>
            </ListItem>
            <ListItem>
              <Button type="primary" htmlType="button" as={Link} to="/ui/pagination">
                Pagination
              </Button>
            </ListItem>
            <ListItem>
              <Button type="primary" htmlType="button" as={Link} to="/ui/modal">
                Modal
              </Button>
            </ListItem>
            <ListItem>
              <Button type="primary" htmlType="button" as={Link} to="/ui/alerts">
                Alert
              </Button>
            </ListItem>
            <ListItem>
              <Button type="primary" htmlType="button" as={Link} to="/ui/toast">
                Toasts/Snackbar
              </Button>
            </ListItem>
            <ListItem>
              <Button type="primary" htmlType="button" as={Link} to="/ui/notifications">
                Notifications
              </Button>
            </ListItem>
            <ListItem>
              <Button type="primary" htmlType="button" as={Link} to="/ui/tooltips">
                Tooltips
              </Button>
            </ListItem>
            <ListItem>
              <Button type="primary" htmlType="button" as={Link} to="/ui/dropdown">
                Dropdown
              </Button>
            </ListItem>
            <ListItem>
              <Button type="primary" as={Link} to="/ui/message">
                Message
              </Button>
            </ListItem>
            <ListItem>
              <Button type="primary" as={Link} to="/ui/tabset">
                Tabset
              </Button>
            </ListItem>
          </Grid>
        </Card>
      </DemoHolder>
    </>
  );
}
