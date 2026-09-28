import {ChevronLeftIcon} from "lucide-react";
import HomeMobileFooter from "../components/home/HomeMobileFooter.jsx";
import {useNavigate} from "react-router-dom";
import NotificationSection from "../components/notification/NotificationSection.jsx";

export default function NotificationPage() {
  const navigate = useNavigate();

  return (
    <section className="h-dvh flex flex-col gap-y-0.5 bg-background-gray">
      <header className={"bg-white p-4 flex gap-x-3 items-center text-heading-black md:hidden"}>
        <ChevronLeftIcon className={"size-6 font-extrabold"} onClick={() => navigate(-1)} />
        <h1 className={"capitalize font-bold"}>notifications</h1>
      </header>
      <NotificationSection />
      <HomeMobileFooter />
    </section>
  )
}