import CatatanBelajar from "../Component/CatatanBelajar";
import Menu from "../Component/Menu";
import NavigationBar from "../Component/Navigation";
import Notes from "../Component/Notes";

const MainMenuPage = () => {
  return (
    <div>
      <NavigationBar />
      <Menu />
      <CatatanBelajar />
      <Notes />
    </div>
  );
};
export default MainMenuPage;
