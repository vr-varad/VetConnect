import React, { useState } from 'react';
import { Form, Input, Button, DatePicker, Upload, Avatar, Card, Row, Col } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';

const ProfilePage = () => {
  const {doctor} = useSelector(state => state.doctor);
  console.log(doctor);
  const [form] = Form.useForm();
  const [avatarUrl, setAvatarUrl] = useState('');

  const handleAvatarUpload = ({ file }) => {
    const reader = new FileReader();
    reader.onload = () => {
      setAvatarUrl(reader.result);
    };
    reader.readAsDataURL(file.originFileObj);
  };

  return (
    <Card className='w-full max-w-4xl mx-auto p-8 rounded-lg shadow-md'>
      <Row gutter={[16, 16]}>
        <Col xs={24} md={8} className='text-center'>
          <Avatar size={128} src={avatarUrl} className='mb-4' />
          <Upload showUploadList={false} beforeUpload={() => false} onChange={handleAvatarUpload}>
            <Button icon={<UploadOutlined />}>Upload Picture</Button>
          </Upload>
        </Col>
        <Col xs={24} md={16}>
          <Form layout='vertical' form={form}>
            <h3 className='font-semibold text-2xl mb-4'>Doctor Profile</h3>

            <Form.Item label='Full Name' name='fullName'>
              <Input defaultValue={doctor.name} />
            </Form.Item>

            <Form.Item label='Phone Number' name='phoneNumber'>
              <Input disabled />
            </Form.Item>

            <Form.Item label='Email Address' name='emailAddress'>
              <Input disabled />
            </Form.Item>

            <Form.Item label='License Number' name='licenseNumber'>
              <Input disabled />
            </Form.Item>

            <Form.Item label='Veterinary School' name='veterinarySchool'>
              <Input disabled />
            </Form.Item>

            <Form.Item label='Graduation Date' name='graduationDate'>
              <DatePicker format='YYYY-MM-DD' disabled />
            </Form.Item>

            <Form.Item label='Additional Certifications' name='additionalCertifications'>
              <Input.TextArea disabled />
            </Form.Item>

            <Form.Item label='Clinic' name='clinic'>
              <Input disabled />
            </Form.Item>

            <Form.Item label='Practice Name' name='practiceName'>
              <Input disabled />
            </Form.Item>

            <Form.Item label='Clinical Specialization' name='clinicalSpecialization'>
              <Input.TextArea disabled />
            </Form.Item>

            <Form.Item label='License and Registration' name='licenseAndRegistration'>
              <Input.TextArea disabled />
            </Form.Item>

            <Form.Item label='Liability Insurance Provider' name='liabilityInsurance_provider'>
              <Input disabled />
            </Form.Item>

            <Form.Item label='Liability Insurance Policy Number' name='liabilityInsurance_policyNumber'>
              <Input disabled />
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </Card>
  );
};

export default ProfilePage;
