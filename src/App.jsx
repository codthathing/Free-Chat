import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import PageLayout from "./components/layout/PageLayout";
import SignInPage from "./pages/SigInPage";
import SignUpPage from "./pages/SignUpPage";
import PasswordPage from "./pages/PasswordPage";
import MessagePage from "./pages/MessagePage";
import MutualPage from "./pages/MutualPage";

function App() {
  const [windowWidth, setWindowWidth] = useState(false);
  useEffect(() => {
    setWindowWidth(window.innerWidth < 768);
    window.addEventListener("resize", () => (window.innerWidth < 768 ? setWindowWidth(true) : setWindowWidth(false)));
    return () => window.removeEventListener("resize", () => (window.innerWidth < 768 ? setWindowWidth(true) : setWindowWidth(false)));
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<PageLayout />}>
          <Route index element={<SignUpPage />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/password" element={<PasswordPage />} />
          <Route path="/messages/*" element={<MessagePage showMutualPage={windowWidth} />} />
          {windowWidth && <Route path="/messages/:mutual" element={<MutualPage className={"h-[100dvh]"} />} />}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
