const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: [true, "user Name is required"]
    },
    email: {
        type: String,
        required: [true, "email is required"]
    },
    password: {
        type: String,
        required: [true, "password Name is required"]
    },
    blog: [
        {
            type: mongoose.Types.ObjectId,
            ref: "Blog"
        }
    ]
},
    {
        timestamps: true
    }
)

const userModel = mongoose.model("User", userSchema)

module.exports = userModel;