import { Form } from "formik";

const AuthForm = ({ children, buttonText, onClick }) => {
  return (
    <Form className="flex flex-col gap-y-6 md:gap-y-10 lg:gap-y-8 w-full">
      <div className="flex flex-col gap-y-3 md:gap-y-4 lg:gap-y-4.5">{children}</div>

      <input type="submit" value={buttonText} onClick={onClick} className="border-none outline-none bg-charcoal-black text-white rounded-md md:rounded-xl lg:rounded-lg py-3 md:py-4 lg:py-3 text-sm md:text-xl lg:text-sm cursor-pointer" />
    </Form>
  );
};

export default AuthForm;
