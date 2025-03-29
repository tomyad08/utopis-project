import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const NavigationBar = () => {
  const navigate = useNavigate();
  const [condition, setCondition] = useState(false);

  const handleLogOut = () => {
    navigate("/");
    localStorage.removeItem("user");
    localStorage.removeItem("linkto");
    localStorage.removeItem("answer");
  };

  return (
    <div>
      <div className="p-4 m-2">
        <div className="flex justify-between">
          <div className="text-white font-semibold">
            <img
              src="./logo_cerdikia.PNG"
              alt="logo"
              className="w-24 bg-white px-3 py-1 rounded-xl border border-1 border-blue-500"
            />
          </div>
          <div
            className="font-semibold text-blue-800"
            onClick={() => setCondition(!condition)}
          >
            <p className="text-sm pt-1">
              Hi,{" "}
              {localStorage.getItem("user")
                ? JSON.parse(localStorage.getItem("user")).nama_lengkap
                : "No Name"}
            </p>
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

      <div className="m-2">
        <img
          src={"./cerdikia_banner.PNG"}
          className="w-full border rounded-xl"
        />
      </div>
    </div>
  );
};
export default NavigationBar;
