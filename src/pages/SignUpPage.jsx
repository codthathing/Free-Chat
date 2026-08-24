import {Formik} from "formik";
import * as Yup from "yup";
import google from "../assets/google.svg";
import apple from "../assets/apple.svg";
import AuthHeadText from "../components/auth/AuthHeadText";
import AuthDivider from "../components/auth/AuthDivider";
import AuthForm from "../components/auth/AuthForm";
import AuthInput from "../components/auth/AuthInput";
import {useNavigate} from "react-router-dom";
import {Lock, Mail, User} from "lucide-react";
import {createUser, updateActionState} from "../store/store.js";
import {useFormSubmitAction} from "../hooks/useFormSubmitAction.js";

const optArray = [
  {id: 0, icon: `${google}`},
  {id: 1, icon: `${apple}`},
];

const validationSchema = Yup.object({
  username: Yup.string().required("Kindly enter your username."),
  email: Yup.string().email("Kindly enter correct email format.").required("Kindly enter your email."),
  password: Yup.string().required("Kindly enter a password.").min(8, "Password must be at least 8 characters."),
});

export default function SignUpPage() {
  const navigate = useNavigate();
  const submitAction = useFormSubmitAction();

  return (
    <>
      <AuthHeadText text={"Create An Account"}/>
      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "",
        }}
        onSubmit={async (values, {setSubmitting, resetForm}) => await submitAction(setSubmitting, resetForm, createUser({username: values.username, email: values.email, password: values.password}), "/sign-in", updateActionState({ status: true, type: "success", message: "Account created successfully." }))}
        validationSchema={validationSchema}
        enableReinitialize={false}
        validateOnChange={false}
        validateOnBlur={false}
        validateOnMount={false}
      >
        {(formik) => (
          <AuthForm formik={formik} buttonText={"Sign Up"}>
            <AuthInput Icon={User} type={"text"} placeholder={"Username"} name={"username"} />
            <AuthInput Icon={Mail} type={"email"} placeholder={"Enter Your Email"} name={"email"} />
            <AuthInput Icon={Lock} type={"password"} placeholder={"Password"} name={"password"} />
            <div className="flex gap-x-2 items-center">
              <input type="checkbox" name="remember" className="w-3 h-3 accent-black" />
              <span className="text-xs md:text-xl lg:text-sm text-charcoal-black">I agree to the <span className="font-bold cursor-pointer">Terms & Condition</span> and <span className="font-bold cursor-pointer">Privacy Policy</span></span>
            </div>
          </AuthForm>
        )}
      </Formik>
      <AuthDivider text={"Or sign up with"} array={optArray}/>
      <p className="text-sm md:text-xl lg:text-sm text-charcoal-black">Already have an account? <span className="font-bold cursor-pointer" onClick={() => navigate("/sign-in")}>Sign In</span></p>
    </>
  );
};
