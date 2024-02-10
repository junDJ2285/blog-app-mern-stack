import React from "react";
import "./header.css"
import { useDispatch, useSelector } from "react-redux";
import { Button } from "antd";
import { Link } from "react-router-dom";
import NavLinkHeader from "../navlinks/Navlink";
import { logOut } from "../../store/blogReducer";

const Header = () => {
    const user = useSelector((s) => s.user);

    const dispatch = useDispatch();
    return (
        <header className="navbar">
            <h1 className="nav-heading">BLOG APP</h1>
            {/* <Navbar/> */}
            {user ? <NavLinkHeader /> : null}
            <div className="header-btn">

                {user ? (
                    < Link to="/">

                        <Button
                            type="primary" className="button" onClick={() => {
                                dispatch(logOut())
                            }}
                        >
                            Logout
                        </Button>
                    </Link>

                ) : (
                    <>
                        <Link to="/sigin">
                            <Button type="primary" className="button">Signup</Button>
                        </Link>
                        <Link to="/">
                            <Button type="primary" className="button">Login</Button>
                        </Link>
                    </>
                )}
            </div>
        </header>
    )
}

export default Header;