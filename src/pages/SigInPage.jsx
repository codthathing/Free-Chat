import AuthSection from "../components/auth/AuthSection";
import { Eye, EyeOff } from "lucide-react";

const SigInPage = () => {
  return (
    <AuthSection className={"flex flex-col gap-y-7"}>
      <div className="flex flex-col gap-y-1">
        <h1 className="font-bold lg:text-lg">Welcome back!</h1>
        <p className="lg:text-sm text-gray-dark">To get started, sign in to your account</p>
      </div>
      <div className="flex flex-col gap-y-3">
        <main className="flex lg:gap-x-4 justify-center items-center border-gray-light lg:border-2 lg:rounded-2xl lg:p-4">
          <i></i>
          <span className="font-semibold">Sign in with Google</span>
        </main>
        <main className="flex lg:gap-x-4 justify-center items-center border-gray-light lg:border-2 lg:rounded-2xl lg:p-4">
          <i></i>
          <span className="font-semibold">Sign in with Apple</span>
        </main>
      </div>
      <div className="flex items-center lg:gap-x-2">
        <i className="border-b border-gray-light w-full"></i>
        <span className="lg:text-xs text-gray-medium text-nowrap">Or sign in with</span>
        <i className="border-b border-gray-light w-full"></i>
      </div>
      <form className="flex flex-col gap-y-6">
        <input className="border-none outline-none bg-gray-light rounded-lg lg:py-4 lg:px-5 text-gray-medium" placeholder="Enter your email" type="email" name="" id="" />
        <div className="lg:py-1 lg:px-4 rounded-lg bg-gray-light flex items-center lg:gap-y-1 text-gray-medium">
          <input className="border-none outline-none bg-transparent lg:py-3 lg:px-1 w-full" type="password" placeholder="Password" name="" id="" />
          <Eye className="lg:w-5 lg:h-5" />
        </div>
        <p className="lg:text-sm underline font-semibold self-end w-fit">Forgot password</p>
        <button type="submit" className="border-none outline-none bg-black text-white lg:rounded-lg lg:py-4 lg:text-sm">Sign in</button>
      </form>
    </AuthSection>
  );
};

export default SigInPage;