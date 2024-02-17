import { Button, Form, Input, InputNumber, Modal, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import axios from "axios";
import React, { useEffect, useState } from "react";
import BlogsCard from "./BlogsCard";
import "./blogs.css"
import { useNavigate, useParams } from "react-router-dom";

axios.defaults.baseURL = "http://localhost:4040";

const BlogUpdate = () => {
    const [form] = Form.useForm();
    const [blogs, setBlogs] = useState([])
    console.log('blog', blogs)
    const navigation = useNavigate()
    const _id = useParams().id
    console.log("ooooo", _id)
    const allBlogs = async () => {
        try {
            const { data } = await axios.get(`${BASE_URL}/api/v1/blog/get-Blog/${_id}`)
            console.log("set blo9gs", data.blog)
            if (data?.success) {
                setBlogs(data?.blog)
                // navigation("/BlogUpdate")
                form.setFieldsValue({
                    title: data.blog.title,
                    image: data.blog.image,
                    description: data.blog.description,
                    profileImage: data.blog.profileImage,
                })
            }
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        allBlogs()
    }, [_id])
    const onFinish = async (values) => {
        try {
            const id = localStorage.getItem("userId")
            const { data } = await axios.put(`${BASE_URL}/api/v1/blog/update-Blog/${_id}`, {
                title: values.title,
                image: values.image,
                description: values.description,
                profileImage: values.profileImage,
                user: id

            });
            console.log("ffaaaa", data)
            if (data.success) {
                alert("bllogs create successFully")
                navigation("/MyBlogs")


            }
        } catch (error) {
            console.log(error)
        }
        finally {
            form.setFieldsValue("")

        }
    }
    return (
        <div className="blogs-from">
            {/* <Button type="primary" onClick={showModal}>
                ADD BLOG
            </Button> */}
            {/* <Modal title="ADD BLOG" footer={null} open={isModalOpen} onOk={handleOk} width={650} onCancel={handleCancel}> */}
            <Form
                form={form}
                name="basic"
                labelCol={{
                    span: 4,
                }}
                wrapperCol={{
                    // span: 16,
                }}
                style={{
                    width: 600,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                // onFinishFailed={onFinishFailed}
                autoComplete="on"
            >
                <Form.Item
                    label="Title"
                    name="title"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Title',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Image"
                    name="image"
                    rules={[
                        {
                            required: true,
                            message: 'Please select image',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Profile Image"
                    name="profileImage"
                    rules={[
                        {
                            required: true,
                            message: 'Please select image',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Description"
                    name="description"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Discription',
                        },
                    ]}
                >
                    <TextArea />

                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Update
                    </Button>

                </Form.Item>
            </Form>
            {/* </Modal> */}


        </div>
    )
}

export default BlogUpdate;