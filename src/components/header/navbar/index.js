import React from 'react'
import { Link } from "react-router-dom";
import "./navbar.css"
import Logo from '../../../assets/images/main-logo.png'
const NavBar = () => {
    return (

        <nav class="navbar navbar-expand-lg navbar-light bg-light nav-height">
            <div class="container">
                <Link to="/" class="navbar-brand">
                    <img src={Logo} alt='Pizza Mart' className='nav-logo-main' />
                    Pizza Mart
                </Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    {/*
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link to="/" class="nav-link active" aria-current="page">Home</Link>
                        </li>
                         <li class="nav-item ms-2">
                            <Link class="nav-link">Link</Link>
                        </li> */}
                    {/* <li class="nav-item dropdown">
                            <Link class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </Link>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link class="dropdown-item">Action</Link></li>
                                <li><Link class="dropdown-item">Another action</Link></li>
                                <li><hr class="dropdown-divider" /></li>
                                <li><Link class="dropdown-item">Something else here</Link></li>
                            </ul>
                        </li> */}
                    {/* <li class="nav-item">
                            <Link class="nav-link disabled" tabindex="-1" aria-disabled="true">Disabled</Link>
                        </li> 
                    </ul>
                        */}
                    <div class="d-flex me-auto ms-auto">
                        <div className='navbar-serach-text'>
                            <p>
                                Search text to click
                            </p>
                        </div>
                    </div>
                    <div class="d-flex">
                        <button class="btn primary-button me-2" type="button">Sign In / Register </button >
                        <button class="btn secondary-button" type="button">View Cart</button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
