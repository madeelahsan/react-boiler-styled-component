import React from 'react';
import styled from 'styled-components/macro';

import { Heading, Field, Switch, Select, Upload, InputButton } from '../../components';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

function Forms() {
  return (
    <>
      <div css="padding: 1.3rem">
        <Title level={1}>Forms</Title>
        <form>
          <Field type="email" placeholder="Simple Input" label="Simple Input" name="exampleOne" />
          <Field type="text" label="Input with Left Icon" name="exampleTwo" prefix={<i className="icon-email" />} />
          <Field type="text" label="Input with Right Icon" name="exampleThree" suffix={<i className="icon-email" />} />
          <Field
            label="Input with left and Right Icon"
            type="text"
            name="exampleFour"
            prefix={<i className="icon-email" />}
            suffix={<i className="icon-email" />}
          />
          <Field label="Password Field" type="password" name="password" prefix={<i className="icon-lock" />} />
          <Field
            label="Input with Error"
            type="text"
            name="errorExample"
            prefix={<i className="icon-card" />}
            error="Error Message"
            invalid
          />
          <Field
            type="search"
            label="Search Form"
            name="search"
            button={
              <InputButton type="primary" size={40} shape="circle" unStyled>
                <i className="icon-search" />
              </InputButton>
            }
            rounded
          />
          <Field
            type="text"
            label="Field with button"
            name="text"
            button={
              <InputButton type="primary" size={40} shape="circle">
                <i className="icon-file" />
              </InputButton>
            }
            rounded
          />
          <Upload
            label="Upload"
            icon={<i className="icon-cloud-upload" />}
            uploadBtnText="Upload photo"
            name="uploadBtn"
          />
          <Select options={options} isSearchable={false} label="React Select" />
          <Select options={options} label="React Select Searchable" />
          <Field type="textarea" label="Textarea" rows={3} name="textarea" />
          <Field type="checkbox" label="Checkbox" name="checkbox1" />
          <Field type="radio" label="Option 1 " id="radio1" name="radio1" />
          <Field type="radio" label="Option 2" id="radio2" name="radio1" />
          <Switch name="switch" />
          <Switch label="Switch with label" name="switch2" />
        </form>
      </div>
    </>
  );
}

const Title = styled(Heading)`
  text-align: center;
`;

export default Forms;
