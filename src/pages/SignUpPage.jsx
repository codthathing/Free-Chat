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
    <section className="h-[80vh] rounded-tl-4xl rounded-tr-4xl bg-white w-full p-8 flex flex-col items-center gap-y-4.5">
      <AuthHeadText head={"Create An Account"} />
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
              <AuthInput Icon={User} type={"text"} placeholder={"Full Name"} name={"name"} />
              <AuthInput Icon={Mail} type={"text"} placeholder={"Email"} name={"email"} />
              <AuthInput Icon={Lock} type={"password"} placeholder={"Password"} name={"auth.password"} />
              <AuthInput Icon={Lock} type={"password"} placeholder={"Confirm Password"} name={"auth.confirmPassword"} />
              <div className="flex gap-x-2 items-center">
                <input type="checkbox" name="remember" className="w-3 h-3 accent-black" />
                <span className="text-xs md:text-xl lg:text-sm">I agree to the <span className="text-green-500">Terms & Condition</span> and <span className="text-green-500">Privacy Policy</span></span>
              </div>
            </AuthForm>
          );
        }}
      </Formik>
      <AuthDivider text={"Or sign up with"} array={optArray} />
      <p className="text-sm">
        Already have an account?{" "}
        <span className="text-green-500 cursor-pointer" onClick={() => navigate("/sign-in")}>
          Sign In
        </span>
      </p>
    </section>
  );
};

export default SignUpPage;
