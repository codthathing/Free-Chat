import { useState, useEffect, useRef } from "react";
import AuthHeadText from "../components/auth/AuthHeadText";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Formik } from "formik";
import AuthPasswordOTPForm from "../components/auth/AuthPasswordOTPForm.jsx";


const validationSchema = Yup.object().shape({
  otp: Yup.string()
    .required("Please enter the OTP code")
    .length(6, "OTP must be 6 digits")
    .matches(/^\d+$/, "OTP must contain only numbers"),
});

export default function PasswordCodeVerification() {
  const navigate = useNavigate();
  const [confirmInput, setConfirmInput] = useState(Array(6).fill(""));
  const confirmRefs = useRef([]);

  const handleConfirmInput = (e, index, setFieldValue, setFieldTouched) => {
    const value = e.target.value;

    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newConfirmInput = [...confirmInput];
      newConfirmInput[index] = value;
      setConfirmInput(newConfirmInput);

      const otpValue = newConfirmInput.join("");
      setFieldValue("otp", otpValue);

      setFieldTouched("otp", true);

      if (value && index < confirmInput.length - 1) {
        confirmRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (e, index, setFieldValue) => {
    if (e.key === "Backspace") {
      const newConfirmInput = [...confirmInput];

      if (!confirmInput[index] && index > 0) {
        confirmRefs.current[index - 1].focus();
      } else {
        newConfirmInput[index] = "";
        setConfirmInput(newConfirmInput);
        setFieldValue("otp", newConfirmInput.join(""));
      }
    } else if (e.key === "ArrowLeft" && index > 0) {
      confirmRefs.current[index - 1]?.focus();
    } else if (e.key === "ArrowRight" && index < 5) {
      confirmRefs.current[index + 1]?.focus();
    }
  };

  const handlePaste = (e, setFieldValue, setFieldTouched) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, 6);

    if (/^\d+$/.test(pastedData)) {
      const newInput = pastedData.split("").concat(Array(6 - pastedData.length).fill(""));
      setConfirmInput(newInput);
      setFieldValue("otp", pastedData);
      setFieldTouched("otp", true);

      const nextIndex = Math.min(pastedData.length, 5);
      confirmRefs.current[nextIndex]?.focus();
    }
  };

  useEffect(() => {
    confirmRefs.current[0]?.focus();
  }, []);

  return (
    <>
      <AuthHeadText text={"Verification Code"} />
      <p className="text-xs md:text-base lg:text-xs text-center text-charcoal-black">We sent 6 digit code to your email address please check & enter your code</p>
      <Formik 
        initialValues={{ otp: "" }} 
        onSubmit={(values, { setSubmitting, resetForm }) => {
          console.log(values);
          navigate("/reset-password");
          setSubmitting(false);
          resetForm();
        }}
        validationSchema={validationSchema}
        enableReinitialize={false}
        validateOnChange={false}
        validateOnBlur={false}
        validateOnMount={false}
      >
        {({ setFieldValue, setFieldTouched, errors, touched }) => (
          <AuthPasswordOTPForm errors={errors} touched={touched} confirmInput={confirmInput}>
            <div className="flex flex-col w-full gap-y-0.5">
              <main className="flex justify-center items-center gap-x-3">
                {confirmInput.map((value, index) => <input key={index} name={`otp-${index}`} type="text" inputMode="numeric" pattern="\d*" value={value} onInput={(e) => (e.currentTarget.value = e.currentTarget.value.slice(0, 1))} onChange={(e) => handleConfirmInput(e, index, setFieldValue, setFieldTouched)} onKeyDown={(e) => handleKeyDown(e, index, setFieldValue)} onPaste={(e) => handlePaste(e, setFieldValue, setFieldTouched)} ref={(el) => el && (confirmRefs.current[index] = el)} className="text-center bg-light-gray text-sm rounded-sm outline-none border-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 w-10 h-10 md:w-14 md:h-14 lg:w-12 lg:h-12 md:text-base" maxLength={1} autoComplete="off" /> )}
              </main>
              {errors.otp && touched.otp && <p className="text-xs text-red-500 self-center">{errors.otp}</p>}
            </div>

            <input type="submit" value={"Verify"} className="border-none outline-none bg-black text-white rounded-md md:rounded-xl lg:rounded-lg py-3 md:py-5 lg:py-4 text-xs md:text-2xl lg:text-sm cursor-pointer" />
          </AuthPasswordOTPForm>
        )}
      </Formik>
      <p className="text-sm md:text-xl lg:text-xs text-charcoal-black">Didn&#39;t receive the code? <span className="font-bold cursor-pointer" onClick={() => navigate("/sign-in")}>Resend</span></p>
    </>
  );
}
