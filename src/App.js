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
import AnalisisPage from "./Pages/AnalisisPage";
import GamePesawat from "./Pages/Game/Game";
import HasilQuiz from "./Pages/hasilTestQuiz";

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
          <Route path="/hasil-test-quiz" element={<HasilQuiz />} />
          {/* <Route path="/list-cpns" element={<ListQuizCPNS />} /> */}
          <Route path="/list-snbt" element={<ListQuizSNBT />} />
          <Route path="/test-minat" element={<TestMINATPage />} />
          <Route path="/hasil-test-st30" element={<AnalisisPage />} />
          <Route path="/game-tembakin" element={<GamePesawat />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
