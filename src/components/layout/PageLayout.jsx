import { Outlet } from "react-router-dom";
import PageUpdate from "../ui/PageUpdate";

const PageLayout = () => {
  return (
    <>
      <PageUpdate />
      <div className="h-[100dvh]">
        <Outlet />
      </div>
    </>
  );
};

export default PageLayout;
