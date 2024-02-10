const express = require("express")
const cors = require("cors")
const colors = require("colors")
const dotenv = require("dotenv")
const morgan = require("morgan")
const connectDB = require("./mongo")
// confib .env
dotenv.config()

// import routers 
const userRoutes = require("./routes/userRoutes")
const blogRoutes = require("./routes/blogRouters")
//rest OBJECTS

connectDB()

const app = express();
//meddlewars
app.use(cors());

app.use(express.json())
app.use(morgan("dev"))

//routes 

app.use(`/api/v1/user`, userRoutes);
app.use("/api/v1/blog", blogRoutes)

const PORT = process.env.PORT || 4040

app.listen(PORT, () => {
    console.log(`Server is ${process.env.DEV_MODE} Running on PORT : ${PORT}`.bgCyan.white)
    // console.log(`server is running`)
})