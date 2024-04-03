import { useLocation } from "react-router-dom";

const NavigationBar = () => {
  const data = [
    {
      id: 1,
      gambar: "./Banner.PNG",
    },
    {
      id: 2,
      gambar: "./voucher.PNG",
    },
  ];
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
      <div className="overflow-x-scroll flex">
        {data.map((value) => (
          <img src={value.gambar} className="w-11/12" key={value.id} />
        ))}
      </div>
    </div>
  );
};
export default NavigationBar;
