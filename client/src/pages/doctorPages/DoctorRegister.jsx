import React from "react";
import { Form, Input, Button, DatePicker,message } from "antd";
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {showLoading,removeLoading} from '../../redux/features/alertSlice'


const DoctorRegister = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const onFinishHandler = async(values)=>{
    if(values.password !== values.cnfpassword){
      alert('Password and Confirm Password does not match')
    }
    try {
      dispatch(showLoading())
      const response = await axios.post('/api/v1/doctor/register',values)
      dispatch(removeLoading())
      if(response.data.success){
        message.success(response.data.message)
        navigate('/login')
      }else{
        message.error(response.data.message)
      }
    } catch (error) {
      dispatch(removeLoading())
      message.error('Something went wrong')
    }

  }
  return (
    <div className="flex mt-20 mb-20 flex-row items-center justify-center">
      <Form
        layout="vertical"
        onFinish={onFinishHandler}
        className="text-center border mx-10 md:mx-0 border-black w-full max-w-lg p-8 rounded-lg shadow-md"
      >
        <h3 className="font-semibold text-2xl mb-2">Doctors' Registeration Form</h3>

        <Form.Item
          label="Full Name"
          name="fullName"
          rules={[{ required: true, message: "Please input your full name!" }]}
        >
          <Input type="text" placeholder="Dr. Emily Johnson" />
        </Form.Item>

        <Form.Item
          label="Phone Number"
          name="phoneNumber"
          rules={[
            { required: true, message: "Please input your phone number!" },
          ]}
        >
          <Input type="text" placeholder="123-456-7890" />
        </Form.Item>

        <Form.Item
          label="Email Address"
          name="emailAddress"
          rules={[
            { required: true, message: "Please input your email address!" },
          ]}
        >
          <Input type="email" placeholder="emily.johnson@example.com" />
        </Form.Item>

        <Form.Item
          label="License Number"
          name="licenseNumber"
          rules={[
            { required: true, message: "Please input your license number!" },
          ]}
        >
          <Input
            type="text"
            placeholder="$2a$10$52v.nm4jzmOKB7eBtSzoc.fb8.gRAKmr9SySfIyC45huHqByCGT6K"
          />
        </Form.Item>

        <Form.Item
          label="Veterinary School"
          name="veterinarySchool"
          rules={[
            { required: true, message: "Please input your veterinary school!" },
          ]}
        >
          <Input type="text" placeholder="University of Veterinary Medicine" />
        </Form.Item>

        <Form.Item
          label="Graduation Date"
          name="graduationDate"
          rules={[
            { required: true, message: "Please input your graduation date!" },
          ]}
        >
          <DatePicker format="YYYY-MM-DD" />
        </Form.Item>

        <Form.Item
          label="Additional Certifications"
          name="additionalCertifications"
          rules={[{ required: false }]}
        >
          <Input type="text" placeholder="Certification 1, Certification 2" />
        </Form.Item>

        <Form.Item
          label="Clinic"
          name="clinic"
          rules={[
            { required: true, message: "Please input your clinic name!" },
          ]}
        >
          <Input type="text" placeholder="City Animal Hospital" />
        </Form.Item>

        <Form.Item
          label="Practice Name"
          name="practiceName"
          rules={[
            { required: true, message: "Please input your practice name!" },
          ]}
        >
          <Input type="text" placeholder="Johnson Veterinary Clinic" />
        </Form.Item>

        <Form.Item
          label="Clinical Specialization"
          name="clinicalSpecialization"
          rules={[{ required: false }]}
        >
          <Input type="text" placeholder="Specialization 1, Specialization 2" />
        </Form.Item>

        <Form.Item
          label="License and Registration"
          name="licenseAndRegistration"
          rules={[{ required: false }]}
        >
          <Input type="text" placeholder="Registration 1, Registration 2" />
        </Form.Item>

        <Form.Item
          label="Liability Insurance Provider"
          name="liabilityInsurance_provider"
          rules={[
            {
              required: true,
              message: "Please input your insurance provider!",
            },
          ]}
        >
          <Input type="text" placeholder="ABC Insurance Company" />
        </Form.Item>

        <Form.Item
          label="Liability Insurance Policy Number"
          name="liabilityInsurance_policyNumber"
          rules={[
            { required: true, message: "Please input your policy number!" },
          ]}
        >
          <Input type="text" placeholder="12345XYZ" />
        </Form.Item>

        <Button
          type="primary"
          htmlType="submit"
          className="rounded-md mx-auto w-40 lg:w-20vw bg-blue-400 text-white hover:bg-blue-800"
        >
          Register
        </Button>
        <p>
          Already have an account?{" "}
          <a href="/login" className="text-blue-400 hover:text-blue-800">
            Login
          </a>
        </p>
      </Form>
    </div>
  );
};

export default DoctorRegister;
