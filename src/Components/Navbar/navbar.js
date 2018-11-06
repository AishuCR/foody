import React from "react";
import { Link } from "react-router-dom";
import "../../SCSS/input.css";
import Dashboard from '../Modal/AuthModal.js';
// import AuthModal from '../Modals/AuthModal';
//require("react-bootstrap/lib/NavbarHeader");

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = () => (
    <div className="navContent">
        <nav className="navbar">
            <div
                className={
                    window.location.pathname === "/" ||
                        window.location.pathname === "/about"
                        ? "nav-item active"
                        : "nav-item"
                }
            >
                <Link to="/about" className="nav-link link1">
                    Food Finder
          </Link>
            </div>

            <div className="login-button">
                <Dashboard />
            </div>
        </nav>
    </div>
);

export default Navbar;