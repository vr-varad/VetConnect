import React, { useState } from 'react';
import { Form, Input, Button, Upload, Avatar, Card, Row, Col } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const UserProfile = () => {
  const [form] = Form.useForm();
  const [avatarUrl, setAvatarUrl] = useState('');

  const handleAvatarUpload = ({ file }) => {
    const reader = new FileReader();
    reader.onload = () => {
      setAvatarUrl(reader.result);
    };
    reader.readAsDataURL(file.originFileObj);
  };

  const userData = {
    name: "Varad Gupta",
    email: "varadgupta21@gmail.com",
  };

  return (
    <Card className='w-full mt-60 max-w-md mx-auto p-8 rounded-lg shadow-md'>
      <Row gutter={[16, 16]}>
        <Col xs={24} className='text-center'>
          <Avatar size={128} src={avatarUrl} className='mb-4' />
          <Upload showUploadList={false} beforeUpload={() => false} onChange={handleAvatarUpload}>
            <Button icon={<UploadOutlined />}>Upload Picture</Button>
          </Upload>
        </Col>
        <Col xs={24}>
          <Form layout='vertical' form={form} initialValues={userData}>
            <h3 className='font-semibold text-2xl mb-4'>User Profile</h3>

            <Form.Item label='Name' name='name'>
              <Input disabled />
            </Form.Item>

            <Form.Item label='Email' name='email'>
              <Input disabled />
            </Form.Item>

          </Form>
        </Col>
      </Row>
    </Card>
  );
};

export default UserProfile;
