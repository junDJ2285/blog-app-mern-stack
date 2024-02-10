
import "./login.css";
import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { useDispatch } from "react-redux";
import { loginUser } from "../../store/blogReducer";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { loginUser } from "../../../store/libraryreducer";


const Login = () => {
    const navigation = useNavigate()
    const dispatch = useDispatch();

    const onFinish = async (values) => {
        try {
            const { data } = await axios.post("/api/v1/user/login", {
                email: values.email,
                password: values.password,
            })

            if (data.success) {
                alert("Login successfully");
                localStorage.setItem("userId", data.user._id)
                navigation("/Blogs")
                dispatch(loginUser(data));
            }

        } catch (error) {

        }

        // const signupData = JSON.parse(localStorage.getItem("signup"));
        // localStorage.setItem("signupData", JSON.stringify(values))


        // if (signupData) {
        //     const user = signupData.find((userData) => {
        //         return userData.email === values.email && userData.password === values.password;
        //     });

        //     if (user) {

        //         navigation("/BlogsForm")
        //     } else {
        //         alert("Invalid credentials");
        //     }
        // } else {
        //     alert("User not found");
        // }

        console.log('login:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);

    };
    return (
        <Form
            className="login-form"
            name="basic"
            labelCol={{
                span: 4,
            }}
            wrapperCol={{
                span: 20,
            }}

            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="on"
        >
            <Form.Item
                label="Username"
                name="email"
                rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
            >
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
            >
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    )
};
export default Login;
