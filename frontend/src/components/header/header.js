import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button, } from "antd";
import { ArrowUpOutlined } from '@ant-design/icons';
import NavLinkHeader from "../navlinks/Navlink";
import { logOut } from "../../store/blogReducer";
import "./header.css";

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [showNewButton, setShowNewButton] = useState(false);
    const user = useSelector((s) => s.user);
    const dispatch = useDispatch();

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setScrolled(scrollY > 1);
            setShowNewButton(scrollY > 100);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleNewButtonClick = () => {
        // Scroll to the top when the "Show New" button is clicked
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
            <div className="nav-heading">

                <h1 className="">BLOG APP</h1>
                {showNewButton && (
                    <Link to="/" onClick={handleNewButtonClick}>
                        <Button type="dangar" className="new-button">
                            <ArrowUpOutlined />
                        </Button>
                    </Link>
                )}
            </div>
            <div className="header-btn">

                {user ? <NavLinkHeader /> : null}
                {user ? (
                    <Link to="/">
                        <Button
                            type=""
                            style={{ textDecoration: "none" }}
                            className="button"
                            onClick={() => {
                                dispatch(logOut());
                            }}
                        >
                            Logout
                        </Button>
                    </Link>
                ) : (
                    <>
                        <Link to="/sigin">
                            <Button type="" className="button">
                                Signup
                            </Button>
                        </Link>
                        <Link to="/Login">
                            <Button type="" className="button">
                                Login
                            </Button>
                        </Link>
                    </>
                )}

            </div>
        </header>
    );
};

export default Header;
