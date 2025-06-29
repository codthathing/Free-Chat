import { useState } from "react";
import AuthForm from "../components/auth/AuthForm";
import AuthHeadText from "../components/auth/AuthHeadText";
import AuthInput from "../components/auth/AuthInput";
import AuthSection from "../components/auth/AuthSection";

const PasswordPage = () => {
  const [email, setEmail] = useState("");

  return (
    <AuthSection className={"mt-24"} navigateLink={"/sign-in"} showBackIcon={true}>
      <AuthHeadText head={"Forgot Password?"} text={"Enter your email to reset your password."} />
      <AuthForm buttonText={"Send Reset Link"}>
        <AuthInput type={"email"} placeholder={"Enter your email"} name={"email"} value={email} onChange={(e) => setEmail(e.target.value)} />
      </AuthForm>
    </AuthSection>
  );
};

export default PasswordPage;
