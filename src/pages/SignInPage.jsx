import { Formik } from "formik";
import * as Yup from "yup";
import google from "../../public/google.svg";
import apple from "../../public/apple.svg";
import AuthHeadText from "../components/auth/AuthHeadText";
import AuthDivider from "../components/auth/AuthDivider";
import AuthForm from "../components/auth/AuthForm";
import AuthInput from "../components/auth/AuthInput";
import { useNavigate } from "react-router-dom";
import { Lock, User } from "lucide-react";
import {useFormSubmitAction} from "../hooks/useFormSubmitAction.js";
import {useDispatch} from "react-redux";
import {fetchUserWithUsername} from "../store/store.js";

const optArray = [
  { id: 0, icon: `${google}` },
  { id: 1, icon: `${apple}` },
];

const validationSchema = Yup.object({
  username: Yup.string().required("Kindly enter your username."),
  password: Yup.string().required("Kindly enter your password.").min(8, "Password must be at least 8 characters."),
});

export default function SigInPage() {
  const navigate = useNavigate();
  const submitAction = useFormSubmitAction();
  const dispatch = useDispatch();

  return (
    <>
      <AuthHeadText text={"Sign in Your Account"} />
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={async (values, { setSubmitting, resetForm }) => await submitAction(setSubmitting, resetForm, async () =>  await fetchUserWithUsername(values.username, values.password, dispatch), "/")}
        validationSchema={validationSchema}
        enableReinitialize={false}
        validateOnChange={false}
        validateOnBlur={false}
        validateOnMount={false}
      >
        {(formik) => (
          <AuthForm formik={formik} buttonText={"Sign In"}>
            <AuthInput Icon={User} iconClass={"w-5.5 h-5.5 shrink-0 border-r border-black pr-2"} type={"text"} placeholder={"Enter your Username"} name={"username"} />
            <AuthInput Icon={Lock} iconClass={"w-5.5 h-5.5 shrink-0 border-r border-black pr-2"} type={"password"} placeholder={"Enter Your Password"} name={"password"} />
            <div className="flex justify-between items-center">
              <div className="flex gap-x-2 items-center">
                <input type="checkbox" name="remember" className="w-3 h-3 accent-charcoal-black" />
                <span className="text-xs md:text-xl lg:text-sm text-charcoal-black">Remember me</span>
              </div>
              <p onClick={() => navigate("/forgot-password")} className="text-xs md:text-xl lg:text-sm text-heading-black font-semibold w-fit cursor-pointer">Forgot Password?</p>
            </div>
          </AuthForm>
        )}
      </Formik>
      <AuthDivider text={"Or sign in with"} array={optArray} />
      <p className="text-sm md:text-xl lg:text-sm text-charcoal-black">Don&#39;t have an account? <span className="font-bold text-heading-black cursor-pointer" onClick={() => navigate("/sign-up")}>Sign Up</span></p>
    </>
  );
};
