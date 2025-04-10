import { useState } from "react";
import AuthSection from "../components/auth/AuthSection";
import AuthHeadText from "../components/auth/AuthHeadText";
import AuthSignInOpt from "../components/auth/AuthSignInOpt";
import AuthDivider from "../components/auth/AuthDivider";
import AuthForm from "../components/auth/AuthForm";
import AuthInput from "../components/auth/AuthInput";

const SigInPage = () => {
  const [ signInForm, setSignInForm ] = useState({ email: "", password: "" });
  const handleSignInForm = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setSignInForm({ ...signInForm, [name]: value });
  };

  return (
    <AuthSection>
      <AuthHeadText head={"Welcome back!"} text={"To get started, sign in to your account"} />
      <AuthSignInOpt />
      <AuthDivider text={"Or sign in with"} />
      <AuthForm buttonText={"Sign in"}>
        <AuthInput type={"email"} placeholder={"Enter your email"} name={"email"} value={signInForm.email} onChange={handleSignInForm} />
        <AuthInput type={"password"} name={"password"} value={signInForm.password} onChange={handleSignInForm} />
        <p className="text-xs md:text-xl lg:text-sm underline font-semibold self-end w-fit cursor-pointer">Forgot password</p>
      </AuthForm>
    </AuthSection>
  );
};

export default SigInPage;
