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
        const { data } = await axios.delete(`/ap//v1/blog/delete-Blog/${id}`)
    }
    return (
        <Row gutter={16}>
            <Col span={8}>

                < Card
                    avatar={<Avatar src={profileImage} />}
                    title={userName} bordered={false}
                    time={time}
                    style={{
                        width: 300,
                    }}
                    cover={
                        <img
                            alt="example"
                            src={image}
                        />
                    }
                    actions={
                        isUser && ([

                            <SettingOutlined key="setting" />,
                            <EditOutlined key="edit" onClick={() => editBlog()} />,
                            <EllipsisOutlined key="ellipsis" onClick={() => deleteBlog(id)} />,
                        ])
                    }

                >
                    <Meta
                        avatar={<Avatar src={profileImage} />}
                        title={title}
                        description={description}
                    />
                </Card>

            </Col>

        </Row >
    )
};
export default BlogsCrad;