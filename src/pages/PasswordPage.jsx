import * as Yup from "yup";
import { useState } from "react";
import AuthForm from "../components/auth/AuthForm";
import AuthHeadText from "../components/auth/AuthHeadText";
import AuthInput from "../components/auth/AuthInput";
import AuthSection from "../components/auth/AuthSection";
import { useEffect } from "react";
import { Formik } from "formik";

const validationSchema = Yup.object({
  email: Yup.string().email("Kindly enter the correct email format").required("Kindly enter your email"),
});

const PasswordPage = () => {
  const [emailDetails, setEmailDetails] = useState({ values: {}, errors: {} });

  return (
    <AuthSection className={"mt-24"} navigateLink={"/sign-in"} showBackIcon={true}>
      <AuthHeadText head={"Forgot Password?"} text={"Enter your email to reset your password."} />
      <Formik
        initialValues={{ email: "" }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setEmailDetails((prevState) => ({ ...prevState, values: values }));
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
            if (Object.keys(formik.errors).length) setEmailDetails((prevState) => ({ ...prevState, errors: formik.errors }));
          }, [formik.errors]);

          return (
            <AuthForm buttonText={"Send Reset Link"}>
              <AuthInput type={"email"} placeholder={"Enter your email"} name={"email"} />
            </AuthForm>
          );
        }}
      </Formik>
    </AuthSection>
  );
};

export default PasswordPage;
