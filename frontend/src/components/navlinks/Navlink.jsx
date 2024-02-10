import { NavLink } from "react-router-dom";
import React from "react";
import "./navlink.css"
const NavLinkHeader = () => {
    return (
        <div className="nav-link-wraper">
            <NavLink to={"/Blogs"}
                className={({ isActive }) =>
                    `nav-link ${isActive ? "active-link" : ""}`
                }>
                Blogs
            </NavLink>
            <NavLink to={"/MyBlogs"}
                className={({ isActive }) =>
                    `nav-link ${isActive ? "active-link" : ""}`
                }>
                My Blogs
            </NavLink>
            <NavLink to={"/BlogsForm"}
                className={({ isActive }) =>
                    `nav-link ${isActive ? "active-link" : ""}`
                }>
                Create Blog
            </NavLink>
        </div>
    )
}

export default NavLinkHeader