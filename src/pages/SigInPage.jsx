import { useState } from "react";
import AuthSection from "../components/auth/AuthSection";
import AuthHeadText from "../components/auth/AuthHeadText";
import AuthSignInOpt from "../components/auth/AuthSignInOpt";
import AuthDivider from "../components/auth/AuthDivider";
import AuthForm from "../components/auth/AuthForm";
import AuthInput from "../components/auth/AuthInput";
import AuthNavText from "../components/auth/AuthNavText";
import { useNavigate } from "react-router-dom";

const SigInPage = () => {
  const [signInForm, setSignInForm] = useState({ email: "", password: "" });
  const handleSignInForm = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setSignInForm({ ...signInForm, [name]: value });
  };
  const navigate = useNavigate();

  return (
    <AuthSection className={"mt-24"} navigateLink={"/"} showBackIcon={true}>
      <AuthHeadText head={"Welcome back!"} text={"To get started, sign in to your account"} />
      <AuthSignInOpt />
      <AuthDivider text={"Or sign in with"} />
      <AuthForm buttonText={"Sign in"}>
        <AuthInput type={"email"} placeholder={"Enter your email"} name={"email"} value={signInForm.email} onChange={handleSignInForm} />
        <AuthInput type={"password"} placeholder={"Password"} name={"password"} value={signInForm.password} onChange={handleSignInForm} />
        <AuthNavText onClick={() => navigate("/password")} text={"Forgot password"} />
      </AuthForm>
    </AuthSection>
  );
};

export default SigInPage;
