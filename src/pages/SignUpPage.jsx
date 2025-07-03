import { Formik } from "formik";
import * as Yup from "yup";
import google from "../assets/google.svg";
import apple from "../assets/apple.svg";
import AuthSection from "../components/auth/AuthSection";
import AuthHeadText from "../components/auth/AuthHeadText";
import AuthSignInOpt from "../components/auth/AuthSignInOpt";
import AuthDivider from "../components/auth/AuthDivider";
import AuthForm from "../components/auth/AuthForm";
import AuthInput from "../components/auth/AuthInput";
import AuthNavText from "../components/auth/AuthNavText";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const optArray = [
  { id: 0, icon: google, text: "Sign up with Google" },
  { id: 1, icon: apple, text: "Sign up with Apple" },
];

const validationSchema = Yup.object({
  name: Yup.string().required("Kindly input your name"),
  email: Yup.string().email("Kindly enter the correct email format").required("Kindly input your email"),
  auth: Yup.object().shape({
    password: Yup.string().required("Kindly input your preferred password").min(8, "Kindly enter at least 8 characters"),
    confirmPassword: Yup.string()
      .required("Kindly confirm your password")
      .oneOf([Yup.ref("password"), null], "Password must match"),
  }),
});

const SignUpPage = () => {
  const [signUpDetails, setSignUpDetails] = useState({ values: {}, errors: {} });
  const navigate = useNavigate();

  return (
    <AuthSection className={"mt-8"}>
      <AuthHeadText head={"Create an Account"} />
      <AuthSignInOpt array={optArray} />
      <AuthDivider text={"Or sign up with"} />
      <Formik
        initialValues={{
          name: "",
          email: "",
          auth: {
            password: "",
            confirmPassword: "",
          },
        }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setSignUpDetails((prevState) => ({ ...prevState, values: values }));
          setSubmitting(false);
          resetForm();
        }}
        validationSchema={validationSchema}
        enableReinitialize={false}
        validateOnChange={false}
        validateOnBlur={false}
        validateOnMount={false}
      >
        {(formik) => {
          useEffect(() => {
            if (Object.keys(formik.errors).length) setSignUpDetails((prevState) => ({ ...prevState, errors: formik.errors }));
          }, [formik.errors]);

          return (
            <AuthForm buttonText={"Sign Up"}>
              <AuthInput type={"text"} placeholder={"Full Name"} name={"name"} />
              <AuthInput type={"email"} placeholder={"Email"} name={"email"} />
              <AuthInput type={"password"} placeholder={"Password"} name={"auth.password"} />
              <AuthInput type={"password"} placeholder={"Confirm Password"} name={"auth.confirmPassword"} />
            </AuthForm>
          );
        }}
      </Formik>
      <AuthNavText onClick={() => navigate("/sign-in")} text={"Already have an account? Sign In"} />
    </AuthSection>
  );
};

export default SignUpPage;
