import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { ErrorMessage, Field } from "formik";
import PropTypes from "prop-types";

export default function AuthInput({ type, name, placeholder, Icon }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col gap-y-0.5">
      <main className="py-1 px-3 md:px-4 rounded-md md:rounded-xl has-[input:focus]:border-charcoal-black lg:rounded-lg bg-input-gray border-b-4 border-soft-lavender flex items-center gap-x-1.5 lg:gap-y-1">
        <Icon className={"w-5.5 h-5.5 shrink-0 border-r border-soft-lavender text-charcoal-black pr-2"} />
        <Field type={type === "password" ? (showPassword ? "text" : "password") : type} name={name} placeholder={placeholder} className="shadow-inset placeholder:text-charcoal-black bg-none text-charcoal-black border-none outline-none py-2 px-1 md:py-4 lg:py-2 text-xs md:text-xl lg:text-sm w-full" />
        {type === "password" && (showPassword ? <EyeOff onClick={() => setShowPassword(false)} className="w-3 md:w-8 lg:w-5 h-3 md:h-8 lg:h-5 cursor-pointer text-charcoal-black" /> : <Eye onClick={() => setShowPassword(true)} className="w-3 md:w-8 lg:w-5 h-3 md:h-8 lg:h-5 cursor-pointer text-gray-medium" />)}
      </main>
      <ErrorMessage name={name} component={"p"} className="text-[8px] text-red-500" />
    </div>
  );
};

AuthInput.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  Icon: PropTypes.elementType.isRequired,
}