import { Button, Form, Input, InputNumber, Modal, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import axios from "axios";
import "./blogs.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constant";
axios.defaults.baseURL = "http://localhost:4040";
const BlogsForm = () => {
    const navigation = useNavigate()
    const [form] = Form.useForm();
    const [blogId, setBlogId] = useState("")
    const onFinish = async (values) => {
        try {
            const id = localStorage.getItem("userId")
            const { data } = await axios.post(`${BASE_URL}/api/v1/blog/create-Blog`, {
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
        } finally {
            form.setFieldsValue("")
        }
    }
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <div className="from">
            {/* <Button type="primary" onClick={showModal}>
                ADD BLOG
            </Button>
            <Modal title="ADD BLOG" footer={null} open={isModalOpen} onOk={handleOk} width={650} onCancel={handleCancel}> */}
            <Form
                form={form}
                name="basic"
                className="login-form"
                labelCol={{
                    span: 4,
                }}
                wrapperCol={{
                    span: 16,
                }}
                style={{
                    width: 600,
                    textAlign: "center"
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
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
                        {blogId ? "Update" : "Submit"}
                    </Button>

                </Form.Item>
            </Form>
            {/* </Modal> */}


        </div >
    )
}
export default BlogsForm;