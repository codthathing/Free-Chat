import { X } from "lucide-react";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";

export default function PageUpdate() {
  const { actionState } = useSelector(state => state.messageUI);
  const [status, setStatus] = useState({ status: false, type: "", message: "" });

  useEffect(() => {
    setStatus(actionState);
    const timeout = setTimeout(() => { setStatus({ status: false, type: "", message: "" }) }, 10000);

    return () => clearTimeout(timeout);
  }, [actionState]);

  return (
    <div role={"alert"} className={`z-10 ${status.status ? "flex" : "hidden"} justify-between gap-x-3 md:gap-x-6 lg:gap-x-4 absolute right-6 bottom-8 md:h-fit md:right-6 md:top-6 lg:right-4 lg:top-4 p-3 md:p-6 lg:p-4 w-64 md:w-2/4 lg:w-96 bg-gray-light md:bg-background-gray rounded-tr-md rounded-bl-md rounded-tl-3xl rounded-br-3xl`}>
      <span className={`w-full ${status.type === "error" ? "text-red-500" : ""} ${status.type === "success" ? "text-green-500" : ""} text-[8px] md:text-xl lg:text-base`}>{status.message}</span>
      <X className="w-3 h-3 md:w-8 md:h-8 lg:w-5 lg:h-5 cursor-pointer" onClick={() => setStatus({ status: false, type: "", message: "" })}/>
    </div>
  );
};
