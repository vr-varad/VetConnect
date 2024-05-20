import React, { useState } from "react";
import { Checkbox, Form, Input, message } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showLoading, removeLoading } from "../redux/features/alertSlice";
import { setUser } from "../redux/features/userSlice";
import { setDoctor } from "../redux/features/doctorSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isDoctor, setIsDoc] = useState(false);
  //
  const onFinishHandler = async (values) => {
    try {
      dispatch(showLoading());
      if (!isDoctor) {
        const response = await axios.post("/api/v1/user/login", values);
        if (response.data.success) {
          //setting token
          message.success(response.data.message);
          localStorage.setItem("token", response.data.token);
          dispatch(removeLoading());
          //getting user data
          const user = await axios.get("/api/v1/user/", {
            headers: {
              authorization: `Bearer ${response.data.token}`,
            },
          });
          dispatch(setUser(user.data.data));
          navigate("/");
        } else {
          if (response.data.isUser) {
            message.error(response.data.message);
          } else {
            message.error(response.data.message);
            navigate("/register");
          }
          dispatch(removeLoading());
        }
      } else {
        const response = await axios.post("/api/v1/doctor/login", values);
        if (response.data.success) {
          //setting token
          if(response.data.result.verified){
            message.success(response.data.message);
            localStorage.setItem("token", response.data.token);
            dispatch(removeLoading());
            //getting user data
            const doctor = await axios.get("/api/v1/doctor/", {
              headers: {
                authorization: `Bearer ${response.data.token}`,
              },
            });
            dispatch(setDoctor(doctor.data.data));
            navigate("/");
          }else{
            message.error("Your registration is not verified yet");
            dispatch(removeLoading());
          }
          navigate("/");
        } else {
          if (response.data.isUser) {
            message.error(response.data.message);
          } else {
            message.error(response.data.message);
            navigate("/register");
          }
          dispatch(removeLoading());
      }
    }} catch (error) {
      message.error("Something went wrong");
      dispatch(removeLoading());
    }
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <Form
          layout="vertical"
          onFinish={onFinishHandler}
          className="text-center border mx-10 md:mx-0 border-black w-full max-w-md p-8 rounded-lg shadow-md"
        >
          <h3 className="font-semibold text-2xl">Login Form</h3>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please input your first name!" },
            ]}
          >
            <Input type="email" placeholder="Email" />
          </Form.Item>
          {isDoctor ?
            <Form.Item
              label="License Number"
              name="licenseNumber"
              rules={[
                { required: true, message: "Please input your first name!" },
              ]}
            >
              <Input type="text" placeholder="License Number" />
            </Form.Item> :
            <Form.Item
            label="Password"
            name="password"
            rules={[
              { required: true, message: "Please input your password!" },
            ]}
          >
            <Input type="password" placeholder="Password" />
          </Form.Item>
          }
          <Form.Item>
            <Checkbox onChange={() => setIsDoc((prev) => !prev)}>
              Are you a Vet?
            </Checkbox>
          </Form.Item>
          <button
            type="submit"
            className="rounded-md py-2 mb-6 mx-[auto] w-40 lg:w-[20vw] bg-blue-400 text-white hover:bg-blue-800"
          >
            Login
          </button>
          <p>
            New User?{" "}
            <a href="/register" className="text-blue-400 hover:text-blue-800">
              Register
            </a>
          </p>
          <p>
            New Vet?{" "}
            <a
              href="/doctoRegister"
              className="text-blue-400 hover:text-blue-800"
            >
              Apply as a Vet
            </a>
          </p>
        </Form>
      </div>
    </>
  );
};

export default Login;
