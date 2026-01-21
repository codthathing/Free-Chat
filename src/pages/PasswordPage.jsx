import * as Yup from "yup";
import { useState } from "react";
import AuthForm from "../components/auth/AuthForm";
import AuthHeadText from "../components/auth/AuthHeadText";
import AuthInput from "../components/auth/AuthInput";
import { useEffect } from "react";
import { Formik } from "formik";
import { Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";

const validationSchema = Yup.object({
  email: Yup.string().email("Kindly enter the correct email format").required("Kindly enter your email"),
});

const PasswordPage = () => {
  const [emailDetails, setEmailDetails] = useState({ values: {}, errors: {} });
  const navigate = useNavigate();

  return (
    <>
      <AuthHeadText head={"Verification Code"} />
      <p className="text-xs text-center">We sent 6 digit code to your email address please check & enter your code</p>
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
            <AuthForm buttonText={"Send OTP"} onClick={() => navigate("/otp-verification")}>
              <AuthInput Icon={Mail} type={"email"} placeholder={"Enter Your Email"} name={"email"} />
            </AuthForm>
          );
        }}
      </Formik>
    </>
  );
};

export default PasswordPage;
