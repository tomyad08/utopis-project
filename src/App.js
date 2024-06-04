import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainMenuPage from "./Pages/MainMenuPage";
import LoginPage from "./Pages/LoginPage";
import TestPage from "./Pages/Test";
import HasilTest from "./Pages/HasilTest";
import NoCatatan from "./Pages/NoCatatan";
import NoLink from "./Pages/NoLink";
import InfoTO from "./Component/InfoTO";
import TestQuiz from "./Component/TestQuiz";
import MenuPage from "./Pages/MenuPage";
import SubmitST30Pages from "./Pages/SubmitST30Pages";

function App() {
  return (
    <div style={{ fontFamily: "'Varela Round', sans-serif" }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/menu" element={<MainMenuPage />} />
          <Route path="/test" element={<TestPage />} />
          <Route path="/info-test" element={<InfoTO />} />
          <Route path="/no-catatan" element={<NoCatatan />} />
          <Route path="/no-link" element={<NoLink />} />
          <Route path="/hasil-test" element={<HasilTest />} />
          <Route path="/test-quiz" element={<TestQuiz />} />
          <Route path="/menu-deep" element={<MenuPage />} />
          <Route path="/submit-st30" element={<SubmitST30Pages />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
