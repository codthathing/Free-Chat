import { Form } from "formik";

const AuthForm = ({ children, buttonText }) => {
  return (
    <Form className="flex flex-col gap-y-4 md:gap-y-6">
      {children}

      <input type="submit" value={buttonText} className="border-none outline-none bg-black text-white rounded-md md:rounded-xl lg:rounded-lg py-3 md:py-4 text-xs md:text-xl lg:text-sm cursor-pointer" />
    </Form>
  );
};

export default AuthForm;
