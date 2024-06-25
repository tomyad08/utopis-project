import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const NavigationBar = () => {
  const navigate = useNavigate();
  const [condition, setCondition] = useState(false);
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

  const handleLogOut = () => {
    navigate("/");
    localStorage.removeItem("user");
    localStorage.removeItem("linkto");
    localStorage.removeItem("answer");
  };

  return (
    <div>
      <div className="p-4 bg-blue-700">
        <div className="flex justify-between">
          <div className="text-white font-semibold">
            <p className="text-lg">UTOPIS</p>
          </div>
          <div
            className="font-semibold text-white"
            onClick={() => setCondition(!condition)}
          >
            <p>Hi, {JSON.parse(localStorage.getItem("user")).nama_lengkap}</p>
          </div>
        </div>
        {condition && (
          <div className="flex justify-end">
            <div
              className="bg-red-600 w-10 rounded-xl p-2"
              onClick={handleLogOut}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="white"
                class="bi bi-power"
                viewBox="0 0 16 16"
              >
                <path d="M7.5 1v7h1V1z" />
                <path d="M3 8.812a5 5 0 0 1 2.578-4.375l-.485-.874A6 6 0 1 0 11 3.616l-.501.865A5 5 0 1 1 3 8.812" />
              </svg>
            </div>
          </div>
        )}
      </div>
      <div className="overflow-x-scroll flex">
        {data.map((value) => (
          <img src={value.gambar} className="w-9/12" key={value.id} />
        ))}
      </div>
    </div>
  );
};
export default NavigationBar;
