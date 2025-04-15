import { Outlet } from "react-router-dom";
import PageUpdate from "../ui/PageUpdate";

const PageLayout = () => {
  return (
    <>
      <PageUpdate />
      <Outlet />
    </>
  );
};

export default PageLayout;