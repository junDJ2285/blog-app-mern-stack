import { Button, Form, Input, InputNumber, Modal, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import axios from "axios";
import React, { useEffect, useState } from "react";
import BlogsCard from "./BlogsCard";
import "./blogs.css"
import { BASE_URL } from "../../constant";
axios.defaults.baseURL = "http://localhost:4040";

const Blogs = () => {
    const [blogs, setBlogs] = useState([])
    console.log('blog', blogs)
    const allBlogs = async () => {
        try {
            const { data } = await axios.get(`${BASE_URL}/api/v1/blog/all-Blogs`)
            console.log("all blogs", data)
            if (data.success) {
                setBlogs(data.allBlogs)

            }
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        allBlogs()
    }, [])


    return (
        <div className="blogs-container">
            {
                blogs && blogs.map((blog) => {
                    return (
                        <BlogsCard
                            id={blog._id}

                            isUser={localStorage.getItem("userId") === blog.user._id}
                            title={blog.title}
                            description={blog.description}
                            image={blog.image}
                            userName={blog.user.userName}
                            time={blog.user.createdAt}
                        />
                    )
                })
            }
        </div>
    )
}

export default Blogs