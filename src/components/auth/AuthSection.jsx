import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AuthSection = ({ className, navigateLink, showBackIcon, children }) => {
  const navigate = useNavigate();

  return (
    <section className="h-full md:h-screen md:flex md:justify-center md:items-center md:bg-gray-light">
      {showBackIcon && <ArrowLeft className="absolute left-3 top-4 md:left-8 md:top-10 lg:left-10 lg:top-10 h-5 w-5 md:h-8 md:w-8 lg:w-6 lg:h-6 cursor-pointer" onClick={() => navigate(navigateLink)} />}
      <main className={`h-full md:h-fit md:w-[70%] lg:w-[25%] bg-white md:rounded-3xl lg:rounded-2xl flex flex-col px-4 ${className} md:mt-0 md:p-8 lg:p-6 gap-y-6 md:gap-y-10 lg:gap-y-7`}>{children}</main>
    </section>
  );
};

export default AuthSection;
