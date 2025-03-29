import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ENPOINTS } from "../DataStatics/endpoints";

const ListQuizSNBT = () => {
  const navigate = useNavigate();
  const [list, setList] = useState("");
  const location = useLocation();

  const FilterTest = (data) => {
    data.filter((value) => {
      if (value.detail === location.state.select) {
        fetch(value.link, {
          method: "GET",
        })
          .then((res) => res.json())
          .then((data) => {
            const resData = data.filter(
              (item, index, self) =>
                index === self.findIndex((t) => t.kode_soal === item.kode_soal)
            );
            setList(resData);
          });
      }
    });
  };

  useEffect(() => {
    fetch(ENPOINTS.LATSOL, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        FilterTest(data);
      });
  }, []);

  const handleSelect = (value) => {
    const dataSelect = {
      linkto: location.state.linkto,
      kode_soal: value.kode_soal,
    };
    navigate("/test-quiz", {
      state: dataSelect,
    });
  };

  return (
    <div>
      <div className="p-6">
        <div className="flex justify-between">
          <div className="text-white font-semibold">
            <img
              src="./logo_cerdikia.PNG"
              alt="logo"
              className="w-24 bg-white px-3 py-1 rounded-xl border border-1 border-blue-500"
            />
          </div>
          <div className="font-semibold text-blue-800">
            <p className="text-sm pt-1">
              Hi,{" "}
              {localStorage.getItem("user")
                ? JSON.parse(localStorage.getItem("user")).nama_lengkap
                : "No Name"}
            </p>
          </div>
        </div>
      </div>
      <div className=" flex justify-center">
        <div className="w-11/12 p-2">
          <h1 className="text-2xl text-blue-900 font-semibold">List Materi</h1>
          <p className="text-sm font-semibold">
            Silahkan pilih sub-materi yang ingin kamu gass kerjain.
          </p>

          {list ? (
            <div>
              {list.map((value) => (
                <div
                  key={value.timestamp}
                  className="w-full p-2 border-2 border-blue-200 rounded-xl my-2 text-blue-800 font-semibold"
                  onClick={() => handleSelect(value)}
                >
                  <h1>{value.kode_soal}</h1>
                </div>
              ))}
            </div>
          ) : (
            <div className="h-full w-full flex justify-center items-center mt-5">
              <div>
                <img
                  src="./cerdikia_logo_512x512.jpg"
                  alt="loading"
                  className="rounded-full drop-shadow-xl animate-pulse"
                />
                <h1 className="text-center mt-2 font-bold text-lg">
                  Loading ...
                </h1>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default ListQuizSNBT;
