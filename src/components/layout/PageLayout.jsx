import {Navigate, Outlet, useLocation} from "react-router-dom";
import PageUpdate from "../ui/PageUpdate";
import {useSelector} from "react-redux";

const PROTECTED_ROUTES = ["room", "create-filter", "calls", "status"];

export default function PageLayout() {
  const USER_ID = useSelector(state => state.messageUI.userId);
  const pathname = useLocation().pathname.split("/")[1] || "/";

  if (!USER_ID && PROTECTED_ROUTES.includes(pathname)) {
    return <Navigate to={"/sign-in"} replace />
  }

  if (USER_ID && ![...PROTECTED_ROUTES, "/"].includes(pathname)) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <PageUpdate />
      <Outlet />
    </>
  );
}
