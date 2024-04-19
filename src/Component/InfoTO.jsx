import { useLocation, useNavigate } from "react-router-dom";

const InfoTO = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/test", {
      state: location.state,
    });
  };

  return (
    <div className="h-screen bg-blue-100 flex justify-center items-center">
      <div className="w-3/4 bg-blue-700 p-5 rounded-lg border border-2 border-white">
        <div className="flex justify-center gap-2">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="yellow"
              class="bi bi-exclamation-triangle-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5m.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
            </svg>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white">Informasi Penting</h1>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="yellow"
              class="bi bi-exclamation-triangle-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5m.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
            </svg>
          </div>
        </div>
        <div>
          <h1 className="text-2xl mt-5 font-semibold text-center text-white">
            {location.state.inisial}
          </h1>
          <p className="text-white text-center my-2">
            {`Jumlah test ini adalah ${
              location.state.jumlah
            } soal dengan waktu ${location.state.select / 60} menit. Apakah kamu
            udah siap?`}
          </p>
          <div className="flex justify-center">
            <button
              className="p-2 w-32 bg-red-500 text-white border-2 border-white rounded-lg"
              onClick={handleClick}
            >
              Ok, siap.
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default InfoTO;
