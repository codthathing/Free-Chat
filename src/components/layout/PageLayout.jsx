import { Outlet } from "react-router-dom";
import PageUpdate from "../ui/PageUpdate";
import {useStoreSession} from "../../hooks/useStoreSession.js";

export default function PageLayout(){
  useStoreSession();

  return (
    <>
      <PageUpdate />
      <Outlet />
    </>
  );
};
