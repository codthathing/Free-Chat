import { useState, useEffect, useRef } from "react";
import AuthHeadText from "../components/auth/AuthHeadText";
import { useNavigate } from "react-router-dom";

export default function PasswordCodeVerification() {
  const navigate = useNavigate();

  const [confirmInput, setConfirmInput] = useState(Array(6).fill(""));
  const confirmRefs = useRef([]);

  const handleConfirmInput = (e, index) => {
    const value = e.target.value;
    const newConfirmInput = [...confirmInput];
    newConfirmInput[index] = value;
    setConfirmInput(newConfirmInput);

    if (value && index < confirmInput.length - 1) {
      confirmRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !confirmInput[index] && index > 0) {
      confirmRefs.current[index - 1].focus();
    }
  };

  const handleConfirmInputSubmit = (e) => {
    e.preventDefault();
    const confirmCode = Number(confirmInput.join(""));
  };

  useEffect(() => {
    confirmRefs.current[0].focus();
  }, []);

  return (
    <>
      <AuthHeadText head={"Verification Code"} />
      <p className="text-xs text-center">We sent 6 digit code to your email address please check & enter your code</p>
      <form className="flex flex-col gap-y-6 md:gap-y-10 lg:gap-y-8 w-full">
        <div className="flex justify-center items-center gap-x-3">
          {confirmInput.map((value, index) => (
            <input key={index} type="number" value={value} onInput={(e) => (e.target.value = e.target.value.slice(0, 1))} onChange={(e) => handleConfirmInput(e, index)} onKeyDown={(e) => handleKeyDown(e, index)} ref={(el) => (confirmRefs.current[index] = el)} className="text-center bg-[#F3F2ED] rounded-sm outline-none border-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 w-10 h-10 text-xs md:w-14 md:h-14 lg:w-12 lg:h-12 md:text-base" maxLength={1} />
          ))}
        </div>

        <input
          type="submit"
          value={"Verify"}
          onClick={(e) => {
            e.preventDefault();
            navigate("/reset-password");
          }}
          className="border-none outline-none bg-black text-white rounded-md md:rounded-xl lg:rounded-lg py-3 md:py-4 lg:py-3 text-xs md:text-xl lg:text-sm cursor-pointer"
        />
      </form>
      <p className="text-sm">
        Didn't receive the code?{" "}
        <span className="text-green-500 cursor-pointer" onClick={() => navigate("/sign-in")}>
          Resend
        </span>
      </p>
    </>
  );
}
