import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="bg-background-gray flex items-end h-dvh md:justify-end">
      <section className="flex items-center justify-center bg-white w-full h-[72.5vh] rounded-tl-4xl rounded-tr-4xl p-8 md:p-12 md:h-[80vh] lg:h-full lg:w-[70%] lg:rounded-none lg:[clip-path:polygon(150px_0,100%_0,100%_100%,0_100%)]">
        <main className="flex flex-col items-center gap-y-4.5 w-full md:w-3/4 md:gap-y-12 lg:w-[40%] lg:gap-y-7">
          <Outlet />
        </main>
      </section>
    </div>
  );
}
