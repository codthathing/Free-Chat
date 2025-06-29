import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageLayout from "./components/layout/PageLayout";
import SignInPage from "./pages/SigInPage";
import SignUpPage from "./pages/SignUpPage";
import PasswordPage from "./pages/PasswordPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<PageLayout />}>
          <Route index element={<SignUpPage />} />
          <Route path="sign-in" element={<SignInPage />} />
          <Route path="password" element={<PasswordPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
