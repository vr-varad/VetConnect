import React from "react";
import { Form, Input, message } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showLoading, removeLoading } from "../redux/features/alertSlice";
import { setUser } from "../redux/features/userSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onFinishHandler = async (values) => {
    try {
      dispatch(showLoading());
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
    } catch (error) {
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
          <Form.Item
            label="Password"
            name="password"
            rules={[
              { required: true, message: "Please input your first name!" },
            ]}
          >
            <Input type="password" placeholder="Password" />
          </Form.Item>
          <button
            type="submit"
            className="rounded-md py-2 mx-[auto] w-40 lg:w-[20vw] bg-blue-400 text-white hover:bg-blue-800"
          >
            Login
          </button>
          <p>
            New User?{" "}
            <a href="/register" className="text-blue-400 hover:text-blue-800">
              Register
            </a>
          </p>
        </Form>
      </div>
    </>
  );
};

export default Login;
