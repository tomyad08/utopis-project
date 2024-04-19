import CatatanBelajar from "../Component/CatatanBelajar";
import Footer from "../Component/Footer";
import InfoTO from "../Component/InfoTO";
import Menu from "../Component/Menu";
import NavigationBar from "../Component/Navigation";
import Notes from "../Component/Notes";
import Report from "../Component/Report";
import Quiz from "../Component/quiz";

const MainMenuPage = () => {
  return (
    <div>
      <NavigationBar />
      <Menu />
      <CatatanBelajar />
      <Quiz />
      <Report />
      <Notes />
      <Footer />
    </div>
  );
};
export default MainMenuPage;
