import {BrowserRouter, Route, Routes} from "react-router-dom";
import PageLayout from "./components/layout/PageLayout";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import PasswordPage from "./pages/PasswordPage";
import AuthLayout from "./components/layout/AuthLayout";
import PasswordCodeVerificationPage from "./pages/PasswordCodeVerificationPage";
import PasswordResetPage from "./pages/PasswordResetPage";
import ProtectRoutesLayout from "./components/layout/ProtectRoutesLayout.jsx";
import {useWindowWidth} from "./hooks/useWindowWidth.js";
import SplashPage from "./pages/SplashPage.jsx";
import FilterPage from "./pages/FilterPage.jsx";
import CallPage from "./pages/CallPage.jsx";
import StatusPage from "./pages/StatusPage.jsx";
import HomeTabletSection from "./components/home/HomeTabletSection.jsx";
import AppDesktopLayout from "./components/layout/AppDesktopLayout.jsx";
import FilterSection from "./components/filter/FilterSection.jsx";
import CallSection from "./components/call/CallSection.jsx";
import StatusSection from "./components/status/StatusSection.jsx";
import HomeMobileSection from "./components/home/HomeMobileSection.jsx";
import RoomPage from "./pages/RoomPage.jsx";
import {useSelector} from "react-redux";

export default function App() {
  const USER_ID = useSelector(state => state.messageUI.userId);
  const width = useWindowWidth();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<PageLayout />}>
          {!USER_ID && <Route index element={<SplashPage />} /> }
          <Route element={<ProtectRoutesLayout />}>
            {width < 768 ? (
              <Route>
                {USER_ID && <Route index element={<HomeMobileSection width={width}/>}/>}
                <Route path="/room/:room_id" element={<RoomPage className={"h-dvh"} />} />
                <Route path="/create-filter" element={<FilterPage />} />
                <Route path="/calls" element={<CallPage />} />
                <Route path={"/status"} element={<StatusPage />} />
              </Route>
            ) : (
              <>
                {USER_ID && <Route index element={<HomeTabletSection width={width} home={true}/>}/>}
                <Route element={<AppDesktopLayout />}>
                  <Route path="/room/:room_id" element={<HomeTabletSection home={false} width={width}><RoomPage /></HomeTabletSection>} />
                  <Route path="/create-filter" element={<FilterSection />} />
                  <Route path="/calls" element={<CallSection />} />
                  <Route path="/status" element={<StatusSection />} />
                </Route>
              </>
            )}
          </Route>
          <Route element={<AuthLayout />}>
            <Route path="/sign-in" element={<SignInPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/forgot-password" element={<PasswordPage />} />
            <Route path="/otp-verification" element={<PasswordCodeVerificationPage />} />
            <Route path="/reset-password" element={<PasswordResetPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
