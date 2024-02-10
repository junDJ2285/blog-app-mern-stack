// import { Layout } from "antd";
// import Header from "../Header/Header";
import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import "./layout.css"
import NavLinkHeader from "../navlinks/Navlink";
import Header from "../header/header";
import BlogsForm from "../../pages/Blogs/Blogs";
import Login from "../../pages/login/login";
import Blogs from "../../pages/Blogs/Blogs";

const Layout = () => {
    const user = useSelector((s) => s.user)
    return (<div className="layout">

        <Header />
        <div className="main-wraper">
            {/* <div className="main-container">
            </div> */}
            {user ? <Blogs /> : <Login />}
            <Outlet />
        </div>
    </div>

    )
}

export default Layout;