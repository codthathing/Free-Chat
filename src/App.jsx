import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageLayout from "./components/layout/PageLayout";
import SignInPage from "./pages/SigInPage";
import SignUpPage from "./pages/SignUpPage";
import PasswordPage from "./pages/PasswordPage";
import MessagePage from "./pages/MessagePage";
import MutualPage from "./pages/MutualPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<PageLayout />}>
          <Route index element={<SignUpPage />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/password" element={<PasswordPage />} />
          <Route path="/messages" element={<MessagePage />} />
          <Route path="/messages/:mutual" element={<MutualPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
