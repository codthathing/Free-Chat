import {Form} from "formik";
import {useEffect} from "react";
import PropTypes from "prop-types";

export default function AuthPasswordOTPForm({ errors, children }) {
  useEffect(() => {
    if (Object.keys(errors).length) console.log(errors);
  }, [errors]);

  return <Form className="flex flex-col gap-y-6 md:gap-y-10 lg:gap-y-8 w-full">{children}</Form>
}

AuthPasswordOTPForm.propTypes = {
  errors: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
}