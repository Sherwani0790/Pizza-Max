import React from 'react'
import { Link } from "react-router-dom";
import "./navbar.css"
import Logo from '../../../assets/images/main-logo.png'
const NavBar = () => {
    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light nav-height">
            <div className="container">
                <Link to="/" className="navbar-brand">
                    <img src={Logo} alt='Pizza Mart' className='nav-logo-main' />
                    Pizza Mart
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    {/*
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/" className="nav-link active" aria-current="page">Home</Link>
                        </li>
                         <li className="nav-item ms-2">
                            <Link className="nav-link">Link</Link>
                        </li> */}
                    {/* <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link className="dropdown-item">Action</Link></li>
                                <li><Link className="dropdown-item">Another action</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item">Something else here</Link></li>
                            </ul>
                        </li> */}
                    {/* <li className="nav-item">
                            <Link className="nav-link disabled" tabindex="-1" aria-disabled="true">Disabled</Link>
                        </li> 
                    </ul>
                        */}
                    <div className="d-flex me-auto ms-auto">
                        <div className='navbar-serach-text'>
                            <p>
                                Search text to click
                            </p>
                        </div>
                    </div>
                    <div className="d-flex">
                        <button className="btn cart-button me-2" type="button">Sign In / Register </button >
                        <button className="btn secondary-button" type="button">View Cart</button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
