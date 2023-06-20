import React from "react";
import { NavLink } from "react-router-dom";

function Menu() {
    return(
        <nav className="navbar navbar-expand-md navbar-dark bg-secondary">
            <div className="container">
                <NavLink to={`/`} className="navbar-brand"> React Context </NavLink>

                <button className="navbar-toggler" data-bs-toggle='collapse' data-bs-target="#menu">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="menu">
                    <ul className="navbar-nav">
                        <li className="navbar-item">
                            <NavLink to={`/personal`} className="nav-link">Personal</NavLink>
                        </li>
                        <li className="navbar-item">
                            <NavLink to={`/professional`} className="nav-link">Professional</NavLink>
                        </li>
                        <li className="navbar-item">
                            <NavLink to={`/company`} className="nav-link">Company</NavLink>
                        </li>
                        <li className="navbar-item">
                            <NavLink to={`/address`} className="nav-link">Address</NavLink>
                        </li>
                        <li className="navbar-item">
                            <NavLink to={`/bank`} className="nav-link">Bank</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Menu