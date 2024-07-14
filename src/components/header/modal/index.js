import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import "./modal.css";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
    email: Yup.string()
        .required("Email is required")
        .email("Invalid email address")
        .test("valid-email", "Invalid email address", (value) => {
            if (!value) return false; // Fail if the value is empty
            const atSymbolCount = (value.match(/@/g) || []).length;
            const dotSymbolCount = (value.match(/\./g) || []).length;
            return atSymbolCount === 1 && dotSymbolCount === 1;
        }),
    password: Yup.string()
        .required("Password is required")
        .min(6, "Password must be at least 6 characters"),
});
const LoginModal = ({ onHide, setShowForgotModal, setShowSignup, setIsDeactivate }) => {

    const [showPassword, setShowPassword] = useState(false);
    // const [user, setUser] = useState({
    //     email: "",
    //     password: "",
    // });
    const formik = useFormik({
        validationSchema: validationSchema,
        initialValues: { email: "", password: "" },
        onSubmit: async (data) => {
            // try {
            //     let resp = await login(data);
            //     if (resp.data.status) {
            //         if (resp.data.account) {
            //             toast.showMessage("Success", "User has been login successfully.", "success");
            //             localStorage.setItem("accessToken", resp.data.access_token);
            //             localStorage.setItem("Id", resp.data.user._id);
            //             onHide();
            //             window.location.reload();
            //         } else {
            //             onHide();
            //             setIsDeactivate(true);
            //         }
            //     } else {
            //         // Handle login failure
            //         toast.showMessage("Error", "Invalid user credentials", "error");
            //     }
            // } catch (error) {
            //     toast.showMessage(
            //         "Error",
            //         "Sorry, we are unable to process your request at this time.",
            //         "error"
            //     );
            // }
        },
    });

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const isFormFieldValid = (name) => !!(formik.touched[name] && formik.errors[name]);
    const getFormErrorMessage = (name) => {
        return isFormFieldValid(name) && <small className="p-error">{formik.errors[name]}</small>;
    };
    return (
        <div>
            <Modal.Body>
                <form onSubmit={formik.handleSubmit}>
                    <div className="text-center">
                        <h3>
                            <b>Sign In</b>
                        </h3>
                        <p>
                            Or,
                            <span
                                className="create-account-text"
                                onClick={() => {
                                    setShowSignup(true);
                                    onHide();
                                }}
                            >
                                Register Now
                            </span>
                        </p>
                    </div>

                    <div className="pt-3">
                        <div className="form-group">
                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                className="input_text_login"
                                // onChange={inputHandler}
                                maxLength={40}
                                onChange={formik.handleChange}
                                autoFocus
                            />
                            {getFormErrorMessage("email")}


                            <div className="custom_position">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    placeholder="Enter New Password"
                                    className="input_text_login"
                                    maxLength={20}
                                    onChange={formik.handleChange}
                                // onChange={inputHandler}
                                />

                                <button type="button" onClick={togglePasswordVisibility} className="new_pass">
                                    {showPassword ? <IoIosEyeOff /> : <IoIosEye />}
                                </button>
                                {getFormErrorMessage("password")}
                            </div>

                            {/* <div className="pt-2 forgot_text">
                                <div
                                    className="forgot_text"
                                // onClick={() => {
                                //     setShowForgotModal(true);
                                //     onHide();
                                // }}
                                >
                                    Forgot your password?
                                </div>
                            </div> */}
                        </div>
                        <div className="pt-3 text-center">
                            <button className="btn cart-button" type="submit">
                                Sign In
                            </button>
                        </div>
                        <div className="pt-2 pb-2">
                            <hr className="hr_clas"></hr>
                            <span className="or_clas">OR</span>
                            <hr className="hr_clas"></hr>
                        </div>
                        <div className="pt-3 text-center">
                            <button className="btn cart-button" type="submit">
                                Order as  Guest
                            </button>
                        </div>
                    </div>
                </form>
            </Modal.Body>
        </div>
    );
};

export default LoginModal
