const mongoose = require("mongoose")

const connectDB = async () => {
    try {
        mongoose.connect(process.env.MONGO_URL)
        console.log(`DB connect Successfully `)

    } catch (error) {
        console.log(`BD ERROR ${error}`)
    }
}

module.exports = connectDB;