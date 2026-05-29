import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="bg-background-gray flex items-end h-dvh">
      <section className="h-[72.5vh] rounded-tl-4xl rounded-tr-4xl bg-white w-full p-8 flex flex-col items-center gap-y-4.5">
        <Outlet />
      </section>
    </div>
  );
}
