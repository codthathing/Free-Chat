import { Form } from "formik";

const AuthForm = ({ children, buttonText }) => {
  return (
    <Form className="flex flex-col gap-y-8 md:gap-y-10 lg:gap-y-8">
      <div className="flex flex-col gap-y-3 md:gap-y-4 lg:gap-y-3">{children}</div>

      <input type="submit" value={buttonText} className="border-none outline-none bg-black text-white rounded-md md:rounded-xl lg:rounded-lg py-3 md:py-4 lg:py-3 text-xs md:text-xl lg:text-sm cursor-pointer" />
    </Form>
  );
};

export default AuthForm;
