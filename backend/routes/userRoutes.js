
const express = require("express")
const {
    getAllUsers,
    registerController,
    userLogin
} = require("../controllers/userControllers")

const router = express.Router();

router.get(`/all-users`, getAllUsers)

router.post(`/register`, registerController)

router.post(`/login`, userLogin)

module.exports = router