import { Form } from "formik";
import {useEffect} from "react";
import PropTypes from "prop-types";

export default function AuthForm({ children, formik, buttonText }) {
  useEffect(() => {
    if (Object.keys(formik.errors).length) console.log(formik.errors);
  }, [formik.errors]);

  return (
    <Form className="flex flex-col gap-y-6 md:gap-y-12 lg:gap-y-8 w-full">
      <div className="flex flex-col gap-y-3 md:gap-y-6 lg:gap-y-4.5">{children}</div>
      <input type="submit" value={buttonText} className="border-none outline-none bg-charcoal-black text-white rounded-md md:rounded-xl lg:rounded-lg py-3 md:py-5 lg:py-3 text-sm md:text-2xl lg:text-sm cursor-pointer" />
    </Form>
  );
};

AuthForm.propTypes = {
  children: PropTypes.node.isRequired,
  formik: PropTypes.object.isRequired,
  buttonText: PropTypes.string.isRequired,
}