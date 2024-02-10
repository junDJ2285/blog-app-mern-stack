const mongoose = require("mongoose")

const blogSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, "title is required"]
    },
    description: {
        type: String,
        required: [true, "Description is required"]
    },
    image: {
        type: String,
        required: [true, "image  is required"]
    },
    profileImage: {
        type: String,
        required: [true, "image is required"]
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        require: [true, "user id is required"]
    }

})

const blogModel = mongoose.model("Blog", blogSchema)

module.exports = blogModel;