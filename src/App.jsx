import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageLayout from "./components/layout/PageLayout";
import SignInPage from "./pages/SigInPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<PageLayout />}>
          <Route index element={<SignInPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;