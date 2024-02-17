import { useSelector } from "react-redux";
import "./home.css"
import { Carousel } from "antd";
import Blogs from "../Blogs/Blogs";
import { NavLink } from "react-router-dom";



const Home = () => {
    const user = useSelector((s) => s.user)
    return (
        <>
            <Carousel autoplay pauseOnHover={true} pauseOnDotsHover={true} draggable>
                <div className="home">
                    <div className="home-container">
                        <div className="home-content">
                            <h2 className="lora">Dark light</h2>
                            <h1 className="lora-heading">Richird Norton photorealistic rendering as real photos</h1>
                            <div className="home-para-flex lora-para">
                                <span>08:06:2071 </span> <span className="line"></span>
                                <p >Progressively incentivize cooperative systems through technically sound functionalities. The credibly productivate seamless data.</p>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="home-slide-2">

                    <div className="home-container">
                        <div className="home-content">
                            <h2 className="">Sea View</h2>
                            <h1 className="lora-heading">Richird Norton photorealistic rendering as real photos</h1>
                            <div className="home-para-flex lora-para">
                                <span>08:06:2071 </span> <span className="line"></span>
                                <p >Progressively incentivize cooperative systems through technically sound functionalities. The credibly productivate seamless data.</p>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="home-slide-3">

                    <div className="home-container">
                        <div className="home-content">
                            <h2 className="">Fire Forest</h2>
                            <h1 className="lora-heading">Richird Norton photorealistic rendering as real photos</h1>
                            <div className="home-para-flex lora-para">
                                <span>08:06:2071 </span> <span className="line"></span>
                                <p >Progressively incentivize cooperative systems through technically sound functionalities. The credibly productivate seamless data.</p>

                            </div>
                        </div>
                    </div>
                </div >
            </Carousel>

            {user ? (<div className="popular-blogs">
                <h1 className="lora-heading"> Popular Blogs</h1>
                <div >
                    <Blogs />
                </div>
                <div className="home-blogs">

                    <NavLink to={"/Blogs"}
                        className="blog-btn">
                        View More...
                    </NavLink>
                </div>

            </div>) : ("")}
        </>
    )
}

export default Home;