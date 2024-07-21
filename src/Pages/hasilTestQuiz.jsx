import { useLocation, useNavigate } from "react-router-dom";

const HasilQuiz = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="h-screen bg-blue-200 items-center flex justify-center">
      <div className="w-11/12">
        <div className="flex justify-center">
          <button className="font-bold text-center text-sm p-2 bg-blue-800 text-white rounded-xl">
            Utopis Project
          </button>
        </div>
        <h1 className="text-center font-bold text-xl mb-2">Skor kamu:</h1>
        <h1 className="text-8xl font-bold text-center">
          {location.state.nilai}
        </h1>
        <p className="text-center text-sm font-semibold text-blue-500">
          It's OK. We have been learning.
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
