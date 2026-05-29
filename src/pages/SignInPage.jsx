import { Formik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import google from "../assets/google.svg";
import apple from "../assets/apple.svg";
import AuthHeadText from "../components/auth/AuthHeadText";
import AuthDivider from "../components/auth/AuthDivider";
import AuthForm from "../components/auth/AuthForm";
import AuthInput from "../components/auth/AuthInput";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Lock, Mail } from "lucide-react";

const optArray = [
  { id: 0, icon: google },
  { id: 1, icon: apple },
];

const validationSchema = Yup.object({
  email: Yup.string().email("Kindly enter correct email format.").required("Kindly enter your email."),
  password: Yup.string().required("Kindly enter your password.").min(8, "Password must be at least 8 charamters."),
});

const SigInPage = () => {
  const [signInDetails, setSignInDetails] = useState({ values: {}, errors: {} });
  const navigate = useNavigate();

  return (
    <>
      <AuthHeadText head={"Sign in Your Account"} />
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setSignInDetails((prevState) => ({ ...prevState, values: values }));
          navigate("/messages");
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
            <AuthForm buttonText={"Sign In"}>
              <AuthInput Icon={Mail} iconClass={"w-5.5 h-5.5 shrink-0 border-r border-black pr-2"} type={"email"} placeholder={"Enter your Email"} name={"email"} />
              <AuthInput Icon={Lock} iconClass={"w-5.5 h-5.5 shrink-0 border-r border-black pr-2"} type={"password"} placeholder={"Enter Your Password"} name={"password"} />
              <div className="flex justify-between items-center">
                <div className="flex gap-x-2 items-center">
                  <input type="checkbox" name="remember" className="w-3 h-3 accent-charcoal-black" />
                  <span className="text-xs md:text-xl lg:text-sm text-charcoal-black">Remember me</span>
                </div>
                <p onClick={() => navigate("/forgot-password")} className="text-xs md:text-xl lg:text-sm text-heading-black font-semibold w-fit cursor-pointer">Forgot Password?</p>
              </div>
            </AuthForm>
          );
        }}
      </Formik>
      <AuthDivider text={"Or sign in with"} array={optArray} />
      <p className="text-sm text-charcoal-black">Don't have an account? <span className="font-bold text-heading-black cursor-pointer" onClick={() => navigate("/sign-up")}>Sign Up</span></p>
    </>
  );
};

export default SigInPage;
