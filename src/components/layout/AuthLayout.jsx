import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="bg-background-gray flex items-end h-dvh md:justify-end">
      <section className="flex items-center justify-center h-[72.5vh] rounded-tl-4xl rounded-tr-4xl bg-white w-full p-8 md:h-full md:w-[70%] md:rounded-none md:[clip-path:polygon(150px_0,100%_0,100%_100%,0_100%)]">
        <main className="flex flex-col items-center gap-y-4.5 w-full md:w-[35%] md:gap-y-7">
          <Outlet />
        </main>
      </section>
    </div>
  );
}
