import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import PageLayout from "./components/layout/PageLayout";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import PasswordPage from "./pages/PasswordPage";
import AuthLayout from "./components/layout/AuthLayout";
import PasswordCodeVerificationPage from "./pages/PasswordCodeVerificationPage";
import PasswordResetPage from "./pages/PasswordResetPage";
import ProtectRoutesLayout from "./components/layout/ProtectRoutesLayout.jsx";

export default function App() {
  const USER_ID = sessionStorage.getItem("USER_ID");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<PageLayout />}>
          {ProtectRoutesLayout()}
          <Route element={<AuthLayout />}>
            <Route path="/sign-in" element={USER_ID ? <Navigate to={"/"} replace={true} /> : <SignInPage />} />
            <Route path="/sign-up" element={USER_ID ? <Navigate to={"/"} replace={true} /> : <SignUpPage />} />
            <Route path="/forgot-password" element={USER_ID ? <Navigate to={"/"} replace={true} /> : <PasswordPage />} />
            <Route path="/otp-verification" element={USER_ID ? <Navigate to={"/"} replace={true} /> : <PasswordCodeVerificationPage />} />
            <Route path="/reset-password" element={USER_ID ? <Navigate to={"/"} replace={true} /> : <PasswordResetPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
