import HomeMobileFooter from "../components/home/HomeMobileFooter.jsx";
import {ChevronLeftIcon, PhoneCall} from "lucide-react";
import CallSection from "../components/call/CallSection.jsx";
import {useNavigate} from "react-router-dom";

export default function CallPage() {
  const navigate = useNavigate();

  return (
    <section className="h-dvh flex flex-col gap-y-0.5 bg-background-gray">
      <header className={"bg-white p-4 flex justify-between items-center text-heading-black md:hidden"}>
        <div className={"flex gap-x-3 items-center"}>
          <ChevronLeftIcon className={"size-6 font-extrabold"} onClick={() => navigate(-1)} />
          <h1 className={"capitalize font-bold"}>calls</h1>
        </div>
        <PhoneCall className={"size-4 text-periwinkle-purple"} />
      </header>
      <CallSection />
      <HomeMobileFooter />
    </section>
  );
}