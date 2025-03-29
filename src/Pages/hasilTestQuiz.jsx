import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const HasilQuiz = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [greeting, setGreeting] = useState(
    location.state.nilai == 5000
      ? "Mantappp, keren parah sih ini"
      : "Gak apa-apa, masih bisa coba lagi"
  );
  return (
    <div className="h-screen bg-blue-200 items-center flex justify-center">
      <div className="w-11/12">
        <div className="flex justify-center">
          <img
            src="./logo_cerdikia.PNG"
            alt="logo"
            className="w-24 bg-white px-3 py-1 rounded-xl border border-1 border-blue-500"
          />
        </div>
        <h1 className="text-center font-bold text-xl mb-2">Skor kamu:</h1>
        <h1 className="text-8xl font-bold text-center">
          {location.state.nilai / 10}
        </h1>
        <p className="text-center text-sm font-semibold text-blue-500">
          {greeting}
        </p>
        <button
          className="bg-blue-400 p-2 rounded-xl text-sm font-bold text-white my-5 w-full"
          onClick={() => navigate("/menu")}
        >
          Home
        </button>
      </div>
    </div>
  );
};
export default HasilQuiz;
