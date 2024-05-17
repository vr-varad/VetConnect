import React from 'react'
import {Form, Input, message} from 'antd'
// import '../styles/RegisterStyles.css'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {showLoading,removeLoading} from '../redux/features/alertSlice'

const Register = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const onFinishHandler = async(values)=>{
    if(values.password !== values.cnfpassword){
      alert('Password and Confirm Password does not match')
    }
    try {
      dispatch(showLoading())
      const {firstName,lastName,email,password} = values
      const response = await axios.post('/api/v1/user/register',{firstName,lastName,email,password})
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
    <>
    <div className='flex flex-col items-center justify-center h-screen'>
      <Form layout='vertical' onFinish={onFinishHandler} className='text-center border mx-10 md:mx-0 border-black w-full max-w-md p-8 rounded-lg shadow-md'>
        <h3 className='font-semibold text-2xl'>Register Form</h3>
        <Form.Item label='First Name' name='firstName' rules={[{required: true, message: 'Please input your first name!'}]}>
          <Input type='text' placeholder='First Name' />
        </Form.Item>
        <Form.Item label='Last Name' name='lastName' rules={[{required: true, message: 'Please input your first name!'}]}>
          <Input type='text' placeholder='Last Name' />
        </Form.Item>
        <Form.Item label='Email' name='email' rules={[{required: true, message: 'Please input your first name!'}]}>
          <Input type='email' placeholder='Email' />
        </Form.Item>
        <Form.Item label='Password' name='password' rules={[{required: true, message: 'Please input your first name!'}]}>
          <Input type='text' placeholder='Password' />
        </Form.Item>
        <Form.Item label='ConfirmPassword' name='cnfpassword' rules={[{required: true, message: 'Please input your first name!'}]}>
          <Input type='password' placeholder='Confirm Password' />
        </Form.Item>
        <button type='submit' className='rounded-md py-2 mx-[auto] w-40 lg:w-[20vw] bg-blue-400 text-white hover:bg-blue-800' >Register</button>
        <p>Already have an account? <a href='/login' className='text-blue-400 hover:text-blue-800'>Login</a></p>
      </Form>
    </div>
    </>
  )
}

export default Register