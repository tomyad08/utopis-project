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
import ListQuizSNBT from "./Pages/Listquiz";
import ListQuizCPNS from "./Pages/ListQuizCPNS";
import TestMINATPage from "./Pages/TestMINAT";

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
          <Route path="/list-cpns" element={<ListQuizCPNS />} />
          <Route path="/list-snbt" element={<ListQuizSNBT />} />
          <Route path="/test-minat" element={<TestMINATPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
