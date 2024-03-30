import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainMenuPage from "./Pages/MainMenuPage";
import LoginPage from "./Pages/LoginPage";
import TestPage from "./Pages/Test";
import HasilTest from "./Pages/HasilTest";

function App() {
  return (
    <div style={{ fontFamily: "'Varela Round', sans-serif" }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/menu" element={<MainMenuPage />} />
          <Route path="/test" element={<TestPage />} />
          <Route path="/hasil-test" element={<HasilTest />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
