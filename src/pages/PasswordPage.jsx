import * as Yup from "yup";
import AuthForm from "../components/auth/AuthForm";
import AuthHeadText from "../components/auth/AuthHeadText";
import AuthInput from "../components/auth/AuthInput";
import { Formik } from "formik";
import { Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";

const validationSchema = Yup.object({
  email: Yup.string().email("Kindly enter correct email format.").required("Kindly enter your email."),
});

export default function PasswordPage() {
  const navigate = useNavigate();

  return (
    <>
      <AuthHeadText text={"Verification Code"} />
      <p className="text-xs text-center text-charcoal-black">We sent 6 digit code to your email address please check & enter your code</p>
      <Formik
        initialValues={{ email: "" }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          console.log(values);
          navigate("/otp-verification");
          setSubmitting(false);
          resetForm();
        }}
        validationSchema={validationSchema}
        enableReinitialize={false}
        validateOnChange={false}
        validateOnBlur={false}
        validateOnMount={false}
      >
        {(formik) => (
          <AuthForm formik={formik} buttonText={"Send OTP"}>
            <AuthInput Icon={Mail} type={"email"} placeholder={"Enter Your Email"} name={"email"} />
          </AuthForm>
        )}
      </Formik>
    </>
  );
};
