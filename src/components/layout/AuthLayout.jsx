import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="bg-gray-light flex items-end h-dvh">
      <Outlet />
    </div>
  );
}
