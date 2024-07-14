import React, { useState } from 'react'
// Router Dom
import { Link } from "react-router-dom";
// Logo main
import Logo from '../../../assets/images/main-logo.png'
// BootStrap Component
import Modal from "react-bootstrap/Modal";
import { Offcanvas, ListGroup, ListGroupItem } from "react-bootstrap";
// Css File
import "./navbar.css"
// components
import LoginModal from '../modal';
import SignupModal from '../modal/signupmodal';
import { B2B_DATA, PROTECTED_PAGE } from '../../../data/data';
import { BsHandbag } from 'react-icons/bs';
const NavBar = () => {
    // States
    const [show, setShow] = useState(false);
    const [showsignup, setShowSignup] = useState(false);
    const [showpassword, setShowPassword] = useState(false);
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(true);
    const closeSidebar = () => setSidebar(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleSignUpClose = () => setShowSignup(false);
    const handleSignupShow = () => setShowSignup(true);
    const [userData, setUserData] = useState({
        firstName: "",
        lastName: "",
        email: "",
    });
    const [data2, setData2] = useState(B2B_DATA);

    return (
        <>
            {/* Modal Sign In */}
            <Modal show={show} onHide={handleClose}>
                <LoginModal
                    onHide={handleClose}
                    // setShowForgotModal={setShowForgotModal}
                    setShowSignup={setShowSignup}
                // setIsDeactivate={setIsDeactivate}
                />
            </Modal>

            {/* Modal Sign Up */}
            <Modal show={showsignup} onHide={handleSignUpClose}>
                <SignupModal
                    onHide={handleSignUpClose}
                    setUserData={setUserData}
                    userData={userData}
                    setShowPassword={setShowPassword}
                    setShow={setShow}
                />
            </Modal>

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
                            <button className="btn cart-button me-2" type="button" onClick={handleShow}>Sign In / Register </button >
                            <button className="btn secondary-button" type="button" onClick={showSidebar}>View Cart</button>
                        </div>
                    </div>
                </div>
            </nav>
            {/* Sidebar */}

            <Offcanvas placement="end" show={sidebar} onHide={closeSidebar} className="custom-offcanvas">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>
                        <Link to="/">
                            <img src={Logo} alt="footer img" className='cart-logo' />
                        </Link>
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ListGroup>
                        <div className='row'>

                            {data2.map((item, index) => (
                                <>
                                    <div className='col-md-12' key={index}>
                                        <div className='chart-card'>
                                            <div className='card-img'>
                                                <img className='card-img-style' src={item.img} alt='Product' />
                                                <div className='card-img-text'>
                                                    <div className='dp-flex justify-content-between align-items-center'>
                                                        <h4 className='card-title'>{item.mainHeading}</h4>

                                                    </div>
                                                    <div>
                                                        <p className='card-text'>{item.description}</p>
                                                    </div>
                                                    <div className='card-price'>
                                                        <p>{item.price}</p>
                                                    </div>
                                                </div>
                                                <div className='dp-flex justify-content-center'>
                                                    <button className='btn cart-button dp-flex'> <BsHandbag /> Add To Cart</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ))}
                        </div>
                    </ListGroup>
                </Offcanvas.Body>
            </Offcanvas>
            {/* Sidebar */}
        </>
    )
}

export default NavBar
