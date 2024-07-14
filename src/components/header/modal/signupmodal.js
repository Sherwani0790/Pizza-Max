import React from "react";
import Modal from "react-bootstrap/Modal";
import "./modal.css";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string()
        .required("Email is required")
        .email("Invalid email address")
        .test("valid-email", "Invalid email address", (value) => {
            if (!value) return false; // Fail if the value is empty
            const atSymbolCount = (value.match(/@/g) || []).length;
            const dotSymbolCount = (value.match(/\./g) || []).length;
            return atSymbolCount === 1 && dotSymbolCount === 1;
        }),
    isCheck: Yup.boolean().test(
        "isChecked",
        "Terms agreement is required",
        (value) => value === true
    ),
});

const SignupModal = (props) => {
    const { setUserData, userData, setShowPassword, onHide, setShow } = props;

    // Context
    // const toast = useContext(ToastContext);

    // Handlers
    const formik = useFormik({
        validationSchema: validationSchema,
        initialValues: { email: "", firstName: "", lastName: "", isCheck: false },
        onSubmit: async (data) => {
            setUserData({
                ...userData,
                email: data.email,
                firstName: data.firstName,
                lastName: data.lastName,
            });
            setShowPassword(true);
            onHide();
        },
    });

    const isFormFieldValid = (name) => !!(formik.touched[name] && formik.errors[name]);
    const getFormErrorMessage = (name) => {
        return isFormFieldValid(name) && <small className="p-error">{formik.errors[name]}</small>;
    };

    console.log({ first: formik.values });

    return (
        <>
            <div>
                <Modal.Body>
                    <form onSubmit={formik.handleSubmit}>
                        <div className="text-center">
                            <h3>
                                <b>Register Now</b>
                            </h3>
                            <p>
                                Or,
                                <span
                                    className="create-account-text"
                                    onClick={() => {
                                        setShow(true);
                                        onHide();
                                    }}
                                >
                                    Sign Into Your Account
                                </span>
                            </p>
                        </div>

                        <div className="pt-3">
                            <div className="form-group">
                                <div className="">
                                    <div className="text_sign_wrapper">
                                        <input
                                            type="text"
                                            name="firstName"
                                            placeholder="First Name"
                                            className="input_text_signup_first"
                                            // onChange={inputHandler}
                                            onChange={formik.handleChange}
                                            maxLength={25}
                                        />
                                        {getFormErrorMessage("firstName")}
                                    </div>

                                    <div className="text_sign_wrapper">
                                        <input
                                            type="text"
                                            name="lastName"
                                            placeholder="Last Name"
                                            className="input_text_signup"
                                            // onChange={inputHandler}
                                            onChange={formik.handleChange}
                                            maxLength={25}
                                        />
                                        {getFormErrorMessage("lastName")}
                                    </div>
                                </div>

                                <>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email Address"
                                        className="input_text_login"
                                        // onChange={inputHandler}
                                        onChange={formik.handleChange}
                                        maxLength={40}
                                    />
                                    {getFormErrorMessage("email")}
                                </>

                                <div className="pt-2">
                                    <input
                                        type="checkbox"
                                        checked={formik.values.isCheck}
                                        value={formik.values.isCheck}
                                        name="isCheck"
                                        onChange={formik.handleChange}
                                    />

                                    <span className="ps-2">Agree to Terms & Condition</span>
                                </div>
                                {getFormErrorMessage("isCheck")}
                            </div>
                            <div className="pt-3 text-center">
                                <button className="btn cart-button" type="submit" onClick={() => formik.handleSubmit()}>
                                    Sign Up
                                </button>
                            </div>

                        </div>
                    </form>
                </Modal.Body>
            </div>
        </>
    );
};

export default SignupModal;
