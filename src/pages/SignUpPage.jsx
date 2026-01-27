import { Formik } from "formik";
import * as Yup from "yup";
import google from "../assets/google.svg";
import apple from "../assets/apple.svg";
import AuthHeadText from "../components/auth/AuthHeadText";
import AuthDivider from "../components/auth/AuthDivider";
import AuthForm from "../components/auth/AuthForm";
import AuthInput from "../components/auth/AuthInput";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Lock, Mail, User } from "lucide-react";

const optArray = [
  { id: 0, icon: google },
  { id: 1, icon: apple },
];

const validationSchema = Yup.object({
  name: Yup.string().required("Kindly enter your name."),
  email: Yup.string().email("Kindly enter correct email format.").required("Kindly enter your email."),
  password: Yup.string().required("Kindly enter a password.").min(8, "Password must be at least 8 characters."),
});

const SignUpPage = () => {
  const [signUpDetails, setSignUpDetails] = useState({ values: {}, errors: {} });
  const navigate = useNavigate();

  return (
    <>
      <AuthHeadText head={"Create An Account"} />
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
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
              <AuthInput Icon={User} type={"text"} placeholder={"Username"} name={"name"} />
              <AuthInput Icon={Mail} type={"text"} placeholder={"Enter Your Email"} name={"email"} />
              <AuthInput Icon={Lock} type={"password"} placeholder={"Password"} name={"password"} />
              <div className="flex gap-x-2 items-center">
                <input type="checkbox" name="remember" className="w-3 h-3 accent-black" />
                <span className="text-xs md:text-xl lg:text-sm text-charcoal-black">
                  I agree to the <span className="font-bold cursor-pointer">Terms & Condition</span> and <span className="font-bold cursor-pointer">Privacy Policy</span>
                </span>
              </div>
            </AuthForm>
          );
        }}
      </Formik>
      <AuthDivider text={"Or sign up with"} array={optArray} />
      <p className="text-sm text-charcoal-black">Already have an account? <span className="font-bold cursor-pointer" onClick={() => navigate("/sign-in")}>Sign In</span></p>
    </>
  );
};

export default SignUpPage;
