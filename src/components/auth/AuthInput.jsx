import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Field } from "formik";

const AuthInput = ({ type, name, placeholder }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <div className="py-1 px-3 md:px-4 rounded-md md:rounded-xl has-[input:focus]:border-black lg:rounded-lg bg-[#F8F8F8] border-b-4 border-gray-light flex items-center lg:gap-y-1">
        <Field type={type === "password" ? (showPassword ? "text" : "password") : type} name={name} placeholder={placeholder} className="shadow-inset placeholder:text-[#C8C8C8] border-none outline-none bg-transparent py-2 px-1 md:py-3 lg:py-2 text-xs md:text-xl lg:text-sm w-full" />
        {type === "password" && (showPassword ? <EyeOff onClick={() => setShowPassword(false)} className="w-3 md:w-8 lg:w-5 h-3 md:h-8 lg:h-5 cursor-pointer text-gray-medium" /> : <Eye onClick={() => setShowPassword(true)} className="w-3 md:w-8 lg:w-5 h-3 md:h-8 lg:h-5 cursor-pointer text-gray-medium" />)}
      </div>
    </>
  );
};

export default AuthInput;
