import * as Yup from "yup";
import AuthForm from "../components/auth/AuthForm";
import AuthHeadText from "../components/auth/AuthHeadText";
import AuthInput from "../components/auth/AuthInput";
import { Formik } from "formik";
import { Lock } from "lucide-react";
import {useFormSubmitAction} from "../hooks/useFormSubmitAction.js";
import {updateUserPassword} from "../utils/api.js";

const validationSchema = Yup.object({
  auth: Yup.object().shape({
    password: Yup.string().required("Kindly enter a new password.").min(8, "Password must be at least 8 characters."),
    confirmPassword: Yup.string().when("password", {
      is: (val) => val && val.length > 0,
      then: (schema) => schema.required("Kindly confirm your new password.").oneOf([Yup.ref("password")], "Passwords must match."),
      otherwise: (schema) => schema.notRequired(),
    })
  }),
});

export default function PasswordResetPage() {
  const userId = JSON.parse(sessionStorage.getItem("PASSWORD_RESET_ID"));
  const submitAction = useFormSubmitAction();

  return (
    <>
      <AuthHeadText text={"Reset Password"} />
      <p className="text-xs md:text-base lg:text-xs text-center text-charcoal-black">At least 8 characters with uppercase and lowercase letters</p>
      <Formik
        initialValues={{
          auth: {
            password: "",
            confirmPassword: "",
          },
        }}
        onSubmit={async (values, { setSubmitting, resetForm }) => await submitAction(setSubmitting, resetForm, async () => await updateUserPassword(userId, values.auth.password), "/sign-in")}
        validationSchema={validationSchema}
        enableReinitialize={false}
        validateOnChange={false}
        validateOnBlur={false}
        validateOnMount={false}
      >
        {(formik) => (
          <AuthForm formik={formik} buttonText={"Reset Password"}>
            <AuthInput Icon={Lock} placeholder={"Enter New Password"} type={"password"} name={"auth.password"} />
            <AuthInput Icon={Lock} placeholder={"Enter Confirm Password"} type={"password"} name={"auth.confirmPassword"} />
          </AuthForm>
        )}
      </Formik>
    </>
  );
}
