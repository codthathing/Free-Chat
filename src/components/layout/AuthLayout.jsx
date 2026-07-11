import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="bg-background-gray flex items-end h-dvh md:items-center md:justify-center">
      <section className="h-[72.5vh] rounded-tl-4xl rounded-tr-4xl bg-white w-full p-8 flex flex-col items-center gap-y-4.5 md:h-fit md:w-[30%] md:rounded-4xl md:px-10 md:py-12 md:gap-y-7">
        <Outlet />
      </section>
    </div>
  );
}
