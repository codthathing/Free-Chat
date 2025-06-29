import { X } from "lucide-react";

const PageUpdate = () => {
  return (
    <div className="hidden justify-between gap-x-3 md:gap-x-6 lg:gap-x-4 absolute right-6 bottom-8 md:h-fit md:right-6 md:top-6 lg:right-4 lg:top-4 p-3 md:p-6 lg:p-4 w-64 md:w-2/4 lg:w-96 bg-gray-light md:bg-white rounded-tr-md rounded-bl-md rounded-tl-3xl rounded-br-3xl">
      <span className="w-full text-red-500 text-[8px] md:text-xl lg:text-base">hello world. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, possimus?</span>
      <X className="w-3 h-3 md:w-8 md:h-8 lg:w-5 lg:h-5 cursor-pointer" />
    </div>
  );
};

export default PageUpdate;
