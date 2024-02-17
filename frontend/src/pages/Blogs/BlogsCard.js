import React from 'react';
import { Col, Row } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const { Meta } = Card;


const BlogsCrad = ({ title, description, image, userName, profileImage, time, id, isUser }) => {
    const navigation = useNavigate()
    const editBlog = () => {
        navigation(`/BlogUpdate/${id}`)
    }
    const deleteBlog = async (id) => {
        try {
            // navigation("/blogs")
            const { data } = await axios.delete(`/api/v1/blog/delete-Blog/${id}`)
            if (data.success) {
                alert("blog deleted")
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <Row gutter={16}>
            <Col span={8}>
                < Card
                    key={id}
                    avatar={<Avatar src={profileImage} />}
                    style={{
                        width: 290,
                        margin: "13px 5px",
                        // borderRadius: "2px",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
                    }}
                    cover={
                        <img
                            alt="example"
                            src={image} style={{ height: "230px", objectFit: "cover" }}
                        />
                    }
                    actions={
                        isUser && ([

                            // <SettingOutlined key="setting" />,
                            <EditOutlined key="edit" onClick={() => editBlog()} />,
                            <EllipsisOutlined key="ellipsis" onClick={() => deleteBlog(id)} />,
                        ])
                    }

                >
                    <div>
                        <span>{time}</span>
                        <h2 className='lora-medium'>{title}</h2>
                        <p className='lora-para'>{description}</p>

                    </div>
                    <Meta
                        avatar={<Avatar src={profileImage} />}
                        title={userName}
                    />
                </Card>

            </Col>

        </Row >
    )
};
export default BlogsCrad;