import { useNavigate } from "react-router-dom";
import CatatanBelajar from "../Component/CatatanBelajar";
import Footer from "../Component/Footer";
import NavigationBar from "../Component/Navigation";
import Notes from "../Component/Notes";
import Quiz from "../Component/quizSNBT";
import { useEffect } from "react";
import MenuPage from "./MenuPage";
import Menu from "../Component/Menu";

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
      {/* <QuizCPNS /> */}
      {/* <Report /> */}
      <Notes />
      <Footer />
    </div>
  );
};
export default MainMenuPage;
