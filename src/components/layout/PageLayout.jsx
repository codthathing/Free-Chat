import { Outlet } from "react-router-dom";
import PageUpdate from "../ui/PageUpdate";

export default function PageLayout(){
  return (
    <>
      <PageUpdate />
      <Outlet />
    </>
  );
};
