import { Button, Form, Input, InputNumber, Modal, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import axios from "axios";
import React, { useEffect, useState } from "react";
import BlogsCard from "./BlogsCard";
import "./blogs.css"
import { BASE_URL } from "../../constant";

axios.defaults.baseURL = "http://localhost:4040";
const MyBlogs = () => {
    const [blogs, setBlogs] = useState([])
    console.log('blog', blogs)
    const userBlogs = async () => {
        try {
            const _id = localStorage.getItem("userId")
            console.log("id", _id)
            const { data } = await axios.get(`${BASE_URL}/api/v1/blog/user-Blog/${_id}`)
            console.log("user blogs", data)
            setBlogs(data.user.blog)
            if (data.success) {

            }
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        userBlogs()
    }, [])


    return (
        <div className="blogs-container">
            {
                blogs && blogs.length > 0 ? (blogs.map((blog) => {
                    return (
                        <BlogsCard
                            id={blog._id}
                            isUser={true}
                            title={blog.title}
                            description={blog.description}
                            image={blog.image}
                            userName={blog.user.userName}
                            time={blog.createdAt}
                        />
                    )
                })) : (<h1>You havent to create Blogs</h1>)

            }
        </div>
    )
}

export default MyBlogs;