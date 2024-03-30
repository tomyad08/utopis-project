import { useLocation } from "react-router-dom";

const NavigationBar = () => {
  const location = useLocation();
  return (
    <div>
      <div className="p-4 bg-blue-700">
        <div className="flex justify-between">
          <div className="text-white font-semibold">
            <p className="text-lg">UTOPIS</p>
          </div>
          <div className="font-semibold text-white">
            <p>Hi, {location.state.nama_lengkap}</p>
          </div>
        </div>
      </div>
      <div>
        <img src="./Banner.PNG" alt=" " className="w-full" />
      </div>
    </div>
  );
};
export default NavigationBar;
