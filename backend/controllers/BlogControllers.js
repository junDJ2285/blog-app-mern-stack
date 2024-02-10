const mongoose = require("mongoose");
const blogModel = require("../models/blogSchma");
const userModel = require("../models/userSchema");
exports.allBlogs = async (req, res) => {
    try {
        const allBlogs = await blogModel.find({}).populate("user");
        if (!allBlogs) {
            return res.status(400).send({
                success: false,
                message: "Blogs not found"
            })
        }
        return res.status(200).send({
            blogCount: allBlogs.length,
            success: true,
            message: "all Blogs",
            allBlogs,
        })
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success: true,
            message: "Blog not found"
        })
    }
}
exports.createBlog = async (req, res) => {
    try {
        const { title, description, image, profileImage, user } = req.body;

        if (!title || !description || !image) {
            return res.status(400).send({
                success: false,
                message: "please provide All fields",
            })
        }
        const existingUser = await userModel.findById(user)
        if (!existingUser) {
            return res.status(500).send({
                success: false,
                message: "user not found"
            })
        }
        const createNew = new blogModel({ title, description, image, profileImage, user })
        const session = await mongoose.startSession();
        session.startTransaction();
        await createNew.save({ session });
        existingUser.blog.push(createNew)
        await existingUser.save({ session });
        await session.commitTransaction();
        await createNew.save()
        console.log(createNew)
        return res.status(200).send({
            message: "Blog created  successfully",
            success: true,
            createNew
        })
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success: false,
            message: "Blog not found",
            error
        })
    }
}
exports.updateBlog = async (req, res) => {
    try {
        const { id } = req.params;
        const update = await blogModel.findByIdAndUpdate(id, { ...req.body }, { new: true })
        return res.status(200).send({
            success: true,
            message: "blog updated",
            update
        })
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success: true,
            message: "Blog not found"
        })
    }
}
exports.deleteBlog = async (req, res) => {
    try {
        const blog = await blogModel.findByIdAndDelete(req.params.id).populate("user")
        console.log("blog delete", blog);
        await blog.user.blog.pull(blog);
        await blog.user.save()

        return res.status(200).send({
            success: true,
            message: "blog deleted"
        })

    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success: false,
            message: "Blog not found",
            error
        })
    }
}
exports.userBlog = async (req, res) => {
    try {
        const user = await userModel.findById(req.params.id).populate("blog");
        if (!user) {
            return res.status(404).send({
                success: true,
                message: "Blogs not found in this user id"
            })
        }
        return res.status(200).send({
            success: true,
            message: "user all blogs on this id",
            user
        })
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success: true,
            message: "Blog not found",
            error
        })
    }
}
exports.getBlog = async (req, res) => {
    try {
        const blog = await blogModel.findById(req.params.id)

        if (!blog) {
            return res.status(404).send({
                success: true,
                message: "Blogs not found in this id"
            })
        }
        return res.status(200).send({
            success: true,
            message: "blog on this id",
            blog
        })

    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success: true,
            message: "Blog not found",
            error
        })
    }
}
