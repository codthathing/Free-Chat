import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Field } from "formik";

const AuthInput = ({ type, name, placeholder }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <div className="py-1 px-3 md:px-4 rounded-md md:rounded-xl lg:rounded-lg bg-gray-light flex items-center lg:gap-y-1 text-gray-medium">
        <Field type={type === "password" ? (showPassword ? "text" : "password") : type} name={name} placeholder={placeholder} className="shadow-inset border-none outline-none bg-transparent py-2 px-1 md:py-3 text-xs md:text-xl lg:text-sm w-full" />
        {type === "password" && (showPassword ? <EyeOff onClick={() => setShowPassword(false)} className="w-3 md:w-8 lg:w-5 h-3 md:h-8 lg:h-5 cursor-pointer" /> : <Eye onClick={() => setShowPassword(true)} className="w-3 md:w-8 lg:w-5 h-3 md:h-8 lg:h-5 cursor-pointer" />)}
      </div>
    </>
  );
};

export default AuthInput;
