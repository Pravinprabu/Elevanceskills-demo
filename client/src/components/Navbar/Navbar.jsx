import React from "react";
import logo from '../../Assets/logo.png';
import "./Navbar.css";
import Sidebar from "./Sidebar";

function Navbar(){
    return(
        <div>
            <nav className="nav1">
                <ul className="nav-container">
                    <div className="left-group">
                        <div className="img">
                            <img src={logo} alt="logo" />
                        </div>
                        <div className="elem">
                            <p id="int">Internships <i className="bi bi-caret-down-fill"></i></p>
                            <p>Jobs <i className="bi bi-caret-down-fill"></i></p>
                        </div>
                    </div>

                    <div className="right-group">
                        <div className="hire-talent">
                            Hire Talent
                        </div>
                        <div className="admin">
                            <button>Admin</button>
                        </div>
                        <div className="search">
                            <i className="bi bi-search"></i>
                            <input type="text" placeholder="Search" />
                        </div>
                        <div className="auth">
                            <button className="btn1">Login</button>
                            <button className="btn2">Register</button>
                        </div>
                    </div>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;