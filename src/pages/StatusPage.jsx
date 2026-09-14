import {useNavigate} from "react-router-dom";
import {ChevronLeftIcon} from "lucide-react";
import StatusSection from "../components/status/StatusSection.jsx";

export default function StatusPage() {
  const navigate = useNavigate();

  return (
    <section className="h-dvh flex flex-col gap-y-0.5 bg-background-gray">
      <header className={"bg-white p-4 flex gap-x-3 items-center text-heading-black md:hidden"}>
        <ChevronLeftIcon className={"size-6 font-extrabold"} onClick={() => navigate(-1)} />
        <h1 className={"capitalize font-bold"}>status</h1>
      </header>
      <StatusSection />
    </section>
  );
}