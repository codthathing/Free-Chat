import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

const AuthInput = ({ type, name, value, onChange, placeholder }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      {type === "password" ? (
        <div className="py-1 px-3 md:px-4 rounded-md md:rounded-xl lg:rounded-lg bg-gray-light flex items-center lg:gap-y-1 text-gray-medium">
          <input type={showPassword ? "text" : "password"} placeholder="Password" name={name} value={value} onChange={onChange} className="border-none outline-none bg-transparent py-2 px-1 md:py-3 text-xs md:text-xl lg:text-sm w-full" />
          {showPassword ? <EyeOff onClick={() => setShowPassword(false)} className="w-3 md:w-8 lg:w-5 h-3 md:h-8 lg:h-5 cursor-pointer" /> : <Eye onClick={() => setShowPassword(true)} className="w-3 md:w-8 lg:w-5 h-3 md:h-8 lg:h-5 cursor-pointer" />}
        </div>
      ) : (
        <input type={type} placeholder={placeholder} name={name} value={value} onChange={onChange} className="border-none outline-none bg-gray-light rounded-md md:rounded-xl lg:rounded-lg py-3 px-4 md:py-4 md:px-5 text-gray-medium text-xs md:text-xl lg:text-sm" />
      )}
    </>
  );
};

export default AuthInput;
