import { Formik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import google from "../assets/google.svg";
import apple from "../assets/apple.svg";
import AuthSection from "../components/auth/AuthSection";
import AuthHeadText from "../components/auth/AuthHeadText";
import AuthSignInOpt from "../components/auth/AuthSignInOpt";
import AuthDivider from "../components/auth/AuthDivider";
import AuthForm from "../components/auth/AuthForm";
import AuthInput from "../components/auth/AuthInput";
import AuthNavText from "../components/auth/AuthNavText";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const optArray = [
  { id: 0, icon: google, text: "Sign in with Google" },
  { id: 1, icon: apple, text: "Sign in with Apple" },
];

const validationSchema = Yup.object({
  email: Yup.string().email("Kindly enter the correct email format").required("Kindly enter your email"),
  password: Yup.string().required("Kindly enter your password"),
});

const SigInPage = () => {
  const [signInDetails, setSignInDetails] = useState({ values: {}, errors: {} });
  const navigate = useNavigate();

  return (
    <AuthSection className={"mt-24"} navigateLink={"/"} showBackIcon={true}>
      <AuthHeadText head={"Welcome back!"} text={"To get started, sign in to your account"} />
      <AuthSignInOpt array={optArray} />
      <AuthDivider text={"Or sign in with"} />
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setSignInDetails((prevState) => ({ ...prevState, values: values }));
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
            if (Object.keys(formik.errors).length) setSignInDetails((prevState) => ({ ...prevState, errors: formik.errors }));
          }, [formik.errors]);

          return (
            <AuthForm buttonText={"Sign in"}>
              <AuthInput type={"email"} placeholder={"Enter your email"} name={"email"} />
              <AuthInput type={"password"} placeholder={"Password"} name={"password"} />
              <AuthNavText onClick={() => navigate("/password")} text={"Forgot password"} />
            </AuthForm>
          );
        }}
      </Formik>
    </AuthSection>
  );
};

export default SigInPage;
