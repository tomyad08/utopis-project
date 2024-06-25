import { useLocation, useNavigate } from "react-router-dom";
import CatatanBelajar from "../Component/CatatanBelajar";
import Footer from "../Component/Footer";
import Menu from "../Component/Menu";
import NavigationBar from "../Component/Navigation";
import Notes from "../Component/Notes";
import Report from "../Component/Report";
import QuizCPNS from "../Component/quizCPNS";
import Quiz from "../Component/quizSNBT";
import { useEffect } from "react";

const MainMenuPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("user")) {
      navigate("/");
    }
  }, []);

  return (
    <div>
      <NavigationBar />
      <Menu />
      <CatatanBelajar />
      <Quiz />
      <QuizCPNS />
      <Report />
      <Notes />
      <Footer />
    </div>
  );
};
export default MainMenuPage;
