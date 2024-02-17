
import "./signin.css";
import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

axios.defaults.baseURL = "http://localhost:4040/";
// import { Button, Checkbox, Form, Input } from 'antd';

const Signup = () => {
    const navigation = useNavigate()
    const onFinish = async (values) => {
        try {
            const { data } = await axios.post('/api/v1/user/register', {
                userName: values.userName,
                email: values.email,
                password: values.password,
            });
            if (data.success) {
                alert("User register Successfully")
                navigation("/")
            }

            // const res = await fetch(`http://localhost:4040/api/v1/user/register`, {
            //     method: "POST",
            //     body: JSON.stringify({
            //         userName: values.userName,
            //         email: values.email,
            //         password: values.password,
            //     }),
            //     headers: {
            //         "Content-type": "application/json",
            //     },
            // });
        } catch (error) {
            console.error('Registration failed:', error);
        }


        const exitedvalues = JSON.parse(localStorage.getItem("signup")) || [];

        const updatedValues = [...exitedvalues, values];
        localStorage.setItem("signup", JSON.stringify(updatedValues));



        console.log('signup:', updatedValues);

    }
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);

    };
    return (
        <div className="form">
            <Form
                className="login-form"
                name="signup"
                labelCol={{
                    span: 5,
                }}
                wrapperCol={{
                    span: 18,
                }}

                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="on"
            >
                <Form.Item
                    label="Name"
                    name="userName"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your name!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your userEmail!',
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

        </div>
    )
}


export default Signup;
