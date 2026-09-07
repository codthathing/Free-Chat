import FilterSection from "../components/filter/FilterSection.jsx";
import {ChevronLeftIcon} from "lucide-react";
import {useNavigate} from "react-router-dom";

export default function FilterPage() {
  const navigate = useNavigate();

  return (
    <main className={"flex flex-col h-dvh"}>
      <header className={"bg-white p-4 flex gap-x-3 items-center text-heading-black md:hidden"}>
        <ChevronLeftIcon className={"size-6 font-extrabold"} onClick={() => navigate(-1)} />
        <h1 className={"capitalize font-bold"}>new filter</h1>
      </header>
      <FilterSection />
    </main>
  )
}