import React from 'react'
// Logo
import Logo from '../../assets/images/main-logo.png'
// Icons
import { BsSend, BsTelephone } from "react-icons/bs";
import { BiMap } from "react-icons/bi";
// css file
import "./footer.css"

const FooterIndex = () => {
    // const { display = "block", marginTop = "7rem" } = props;
    return (
        <>
            <footer className='footer-section'>
                <div className="footer_main container">

                    <div className="row footer_text_container">
                        {/* <div className="col-md-1"></div> */}
                        <div className="col-12 col-md-2 mr-5">
                            <img src={Logo} alt="footer img" className='footer-logo-main' />
                        </div>
                        <div className="col-md-8">

                            <div className="d-flex">
                                <div className="img_div_icon_twitter">
                                    <BsTelephone />
                                </div>
                                <p className="footer_text_color">
                                    Phone<br />
                                    111-222-3334</p>
                            </div>
                            <div className="d-flex">
                                <div className="img_div_icon_twitter">
                                    <BsSend />
                                </div>
                                <p className="footer_text_color">
                                    Email<br />Info@pizzamart.com</p>
                            </div>
                            <div className="d-flex">
                                <div className="img_div_icon_twitter">
                                    <BiMap />
                                </div>
                                <p className="footer_text_color">
                                    Address<br />
                                    Pizza Mart - Gulberg Greens, Islamabad
                                </p>
                            </div>
                        </div>
                        <div className="col-md-1"></div>
                    </div>

                    <div className="copyright_div">
                        <p className="copyright_text">
                            Copyright © 2024 Pizza Mart. All Rights Reserved.
                        </p>
                    </div>
                </div>

            </footer >
        </>
    )
}

export default FooterIndex
