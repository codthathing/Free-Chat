const AuthDivider = ({ text }) => {
  return (
    <div className="flex items-center gap-x-1 md:gap-x-3 lg:gap-x-2">
      <i className="border-b-0.5px lg:border-b border-gray-light w-full"></i>
      <span className="text-[8px] md:text-base lg:text-xs text-nowrap text-gray-medium">{text}</span>
      <i className="border-b-0.5px lg:border-b border-gray-light w-full"></i>
    </div>
  );
};

export default AuthDivider;
