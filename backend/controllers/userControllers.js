const userModel = require("../models/userSchema")
const bcrypt = require("bcrypt")
exports.registerController = async (req, res) => {
    try {
        const { userName, email, password } = req.body
        //   /validation
        if (!userName || !email || !password) {
            return res.status(400).send({
                success: false,
                message: "fill All fields"
            })
        }

        const existingUser = await userModel.findOne({ email })


        if (existingUser) {
            return res.status(401).send({
                success: true,
                message: "user already axist"
            })
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const newUser = new userModel({ userName, email, password: hashedPassword })
        console.log(newUser)
        await newUser.save()
        return res.status(200).send({
            success: true,
            message: "user Register Successfully",
            newUser
        })

    } catch (error) {
        console.log(error)
        return res.status(500).send({
            message: "Error in register  ",
            success: false,
            error
        })

    }
}

exports.getAllUsers = async (req, res) => {
    try {
        const allUsers = await userModel.find()
        return res.status(200).send({
            userCount: allUsers.length,
            success: true,
            allUsers
        })

    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success: false,
            message: "users not found",
            error

        })

    }

}
exports.userLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).send({
                success: false,
                message: "please provide email or passsword"
            })
        }

        const user = await userModel.findOne({ email })
        if (!user) {
            return res.status(200).send({
                success: false,
                message: "Email is not registerd"
            })
        }
        const isMatch = await bcrypt.compare(password, user.password)

        if (!isMatch) {
            return res.status(400).send({
                success: false,
                message: "Invalid email or Password"
            })
        }

        return res.status(200).send({
            success: true,
            message: "user login successfully",
            user
        })
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success: false,
            message: "Eroor in login",
            error
        })
    }
}