import AuthSection from "../components/auth/AuthSection";

const SigInPage = () => {
  return (
    <AuthSection>
      <h1>Welcome back!</h1>
      <p>To get started, sign in to your account</p>
      <div>
        <main>
          <i></i>
          <span>Sign in with Google</span>
        </main>
        <main>
          <i></i>
          <span>Sign in with Apple</span>
        </main>
      </div>
      <div className="flex items-center gap-x-2">
        <i className="border-b w-full"></i>
        <span className="text-sm text-nowrap">Or sign in with</span>
        <i className="border-b w-full"></i>
      </div>
      <form>
        <input type="email" name="" id="" />
        <div>
          <input type="password" name="" id="" />
          <i></i>
        </div>
        <p></p>
        <button type="submit"></button>
      </form>
    </AuthSection>
  );
};

export default SigInPage;