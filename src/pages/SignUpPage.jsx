import AuthSection from "../components/auth/AuthSection";
import AuthHeadText from "../components/auth/AuthHeadText";
import AuthSignInOpt from "../components/auth/AuthSignInOpt";
import AuthDivider from "../components/auth/AuthDivider";
import AuthForm from "../components/auth/AuthForm";
import AuthInput from "../components/auth/AuthInput";
import AuthNavText from "../components/auth/AuthNavText";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const [signUpForm, setSignUpForm] = useState({ name: "", email: "", password: "" });
  const handleSignUpForm = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setSignUpForm({ ...signUpForm, [name]: value });
  };
  const navigate = useNavigate();

  return (
    <AuthSection className={"mt-8"}>
      <AuthHeadText head={"Create an Account"} />
      <AuthSignInOpt />
      <AuthDivider />
      <AuthForm buttonText={"Sign Up"}>
        <AuthInput type={"text"} placeholder={"Full Name"} name={"name"} value={signUpForm.name} onChange={handleSignUpForm} />
        <AuthInput type={"email"} placeholder={"Email"} name={"email"} value={signUpForm.email} onChange={handleSignUpForm} />
        <AuthInput type={"password"} placeholder={"Password"} name={"password"} value={signUpForm.password} onChange={handleSignUpForm} />
      </AuthForm>
      <AuthNavText onClick={() => navigate("/sign-in")} text={"Already have an account? Sign In"} />
    </AuthSection>
  );
};

export default SignUpPage;
