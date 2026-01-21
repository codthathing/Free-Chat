import * as Yup from "yup";
import { useState } from "react";
import AuthForm from "../components/auth/AuthForm";
import AuthHeadText from "../components/auth/AuthHeadText";
import AuthInput from "../components/auth/AuthInput";
import { useEffect } from "react";
import { Formik } from "formik";
import { Lock } from "lucide-react";

const validationSchema = Yup.object({
  auth: Yup.object().shape({
    password: Yup.string().required("Kindly input your preferred password").min(8, "Kindly enter at least 8 characters"),
    confirmPassword: Yup.string()
      .required("Kindly confirm your password")
      .oneOf([Yup.ref("password")], "Passwords must match"),
  }),
});

export default function PasswordResetPage() {
  const [resetDetails, setResetDetails] = useState({ values: {}, errors: {} });

  return (
    <>
      <AuthHeadText head={"Reset Password"} />
      <p className="text-xs text-center">At least 8 characters with uppercase and lowercase letters</p>
      <Formik
        initialValues={{
          auth: {
            password: "",
            confirmPassword: "",
          },
        }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setResetDetails((prevState) => ({ ...prevState, values: values }));
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
            if (Object.keys(formik.errors).length) setResetDetails((prevState) => ({ ...prevState, errors: formik.errors }));
          }, [formik.errors]);

          return (
            <AuthForm buttonText={"Reset Password"}>
              <AuthInput Icon={Lock} placeholder={"Enter New Password"} type={"password"} name={"auth.password"} />
              <AuthInput Icon={Lock} placeholder={"Enter Confirm Password"} type={"password"} name={"auth.confirmPassword"} />
            </AuthForm>
          );
        }}
      </Formik>
    </>
  );
}
