import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageLayout from "./components/layout/PageLayout";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import PasswordPage from "./pages/PasswordPage";
import MessagePage from "./pages/MessagePage";
import MutualPage from "./pages/MutualPage";
import SplashPage from "./pages/SplashPage";
import AuthLayout from "./components/layout/AuthLayout";
import PasswordCodeVerificationPage from "./pages/PasswordCodeVerificationPage";
import PasswordResetPage from "./pages/PasswordResetPage";
import {useSelector} from "react-redux";

export default function App() {
  const { mobile } = useSelector((state) => state.messageUI);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<PageLayout />}>
          <Route index element={<SplashPage />} />
          <Route element={<AuthLayout />}>
            <Route path="/sign-in" element={<SignInPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/forgot-password" element={<PasswordPage />} />
            <Route path="/otp-verification" element={<PasswordCodeVerificationPage />} />
            <Route path="/reset-password" element={<PasswordResetPage />} />
          </Route>
          <Route path="/messages/*" element={<MessagePage />} />
          {mobile && <Route path="/messages/:mutual" element={<MutualPage className={"h-dvh"} />} />}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
