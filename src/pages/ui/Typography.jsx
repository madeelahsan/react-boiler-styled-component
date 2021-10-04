import React from 'react';
import styled from 'styled-components/macro';

import { Heading, Paragraph, Link, List } from '../../components';

export default function Typography() {
  return (
    <>
      <div css="padding: 1.3rem">
        <Title level={1}>Typography</Title>

        <Heading level={1}>h1 Heading</Heading>
        <Heading level={2}>h2 Heading</Heading>
        <Heading level={3}>h3 Heading</Heading>
        <Heading level={4}>h4 Heading</Heading>
        <hr />
        <Link to="/">React Link element</Link>
        <br />
        <Link to="/" $underline>
          An underlined react Link element
        </Link>
        <br />
        <Link as="a" href="/">
          Link as &quot;a&quot; element
        </Link>
        <hr />
        <Paragraph xs>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis laboriosam sequi, consequatur, aperiam
          itaque nihil unde culpa quisquam eos aut, quis natus corrupti voluptatibus ea voluptates omnis. Tenetur,
          impedit ut?
        </Paragraph>
        <Paragraph sm>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis laboriosam sequi, consequatur, aperiam
          itaque nihil unde culpa quisquam eos aut, quis natus corrupti voluptatibus ea voluptates omnis. Tenetur,
          impedit ut?
        </Paragraph>
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis laboriosam sequi, consequatur, aperiam
          itaque nihil unde culpa quisquam eos aut, quis natus corrupti voluptatibus ea voluptates omnis. Tenetur,
          impedit ut?
        </Paragraph>
        <Paragraph lg>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis laboriosam sequi, consequatur, aperiam
          itaque nihil unde culpa quisquam eos aut, quis natus corrupti voluptatibus ea voluptates omnis. Tenetur,
          impedit ut?
        </Paragraph>
        <Paragraph xl>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis laboriosam sequi, consequatur, aperiam
          itaque nihil unde culpa quisquam eos aut, quis natus corrupti voluptatibus ea voluptates omnis. Tenetur,
          impedit ut?
        </Paragraph>
        <hr />
        <List ordered>
          <li>item 1 </li>
          <li>item 2 </li>
          <li>item 3 </li>
        </List>
        <List>
          <li>item 1 </li>
          <li>item 2 </li>
          <li>item 3 </li>
        </List>
      </div>
    </>
  );
}

const Title = styled(Heading)`
  text-align: center;
`;
