import React from 'react';
import Upload from '../components/molecules/Upload';

import GlobalStyles from '../styles/GlobalStyles.styles';

export default {
  title: 'Forms/upload',
  component: Upload,
};

const Template = ({ ...args }) => (
  <>
    <GlobalStyles />
    <Upload {...args} />
  </>
);

export const uploadField = Template.bind({});
uploadField.args = {
  label: 'Upload',
  icon: <i className="material-icons-outlined">cloud_upload</i>,
  uploadBtnText: 'Upload photo',
  name: 'uploadBtn',
};
