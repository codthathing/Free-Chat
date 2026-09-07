import HomeUserProfile from "../home/HomeUserProfile.jsx";
import PropTypes from "prop-types";

export default function AppLayout({ Header, Footer, children }) {
  return (
    <section className="h-dvh flex flex-col md:gap-y-0.5 md:bg-background-gray md:p-1">
      <header className="relative flex flex-col gap-y-4 px-3 py-6 w-full md:p-6 md:bg-white">
        <div className="flex md:gap-x-10 justify-between items-center">
          <h1 className="text-2xl font-bold tracking-wider text-heading-black">FreeChat</h1>
          <HomeUserProfile />
        </div>
        {Header}
      </header>
      <section className="flex-1 overflow-hidden md:flex md:gap-x-0.5">
        {children}
      </section>
      {Footer}
    </section>
  )
}

AppLayout.propTypes = {
  Header: PropTypes.node,
  Footer: PropTypes.node,
  children: PropTypes.node
}