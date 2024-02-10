const express = require("express");
const { createBlog, allBlogs, updateBlog, deleteBlog, userBlog, getBlog } = require("../controllers/BlogControllers");
// const { router } = require("./userRoutes");

const router = express.Router();

router.get("/all-Blogs", allBlogs);

router.post("/create-Blog", createBlog);

router.put("/update-Blog/:id", updateBlog);

router.delete("/delete-Blog/:id", deleteBlog);

router.get("/user-Blog/:id", userBlog)

router.get("/get-Blog/:id", getBlog)

module.exports = router