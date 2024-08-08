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
    <div className=" bg-black flex justify-center items-center h-screen">
      <div className="w-11/12">
        <div className="bg-blue-300 border-4 border-white p-3 rounded-lg">
          <div className="p-5 bg-blue-200 rounded-xl mb-5">
            <h1 className="text-2xl text-blue-900 font-semibold text-center">
              List Materi
            </h1>
            <p className="text-sm font-semibold text-center">
              Silahkan pilih sub-materi yang ingin kamu gass kerjain.
            </p>
          </div>
          <div className="p-5 bg-blue-200 rounded-xl">
            {list ? (
              <div>
                {list.map((value) => (
                  <div
                    key={value.timestamp}
                    className="w-full bg-blue-600 p-2 border-2 border-white rounded-xl my-2 text-white font-semibold"
                    onClick={() => handleSelect(value)}
                  >
                    <h1>{value.kode_soal}</h1>
                  </div>
                ))}
              </div>
            ) : (
              <div className="h-full w-full flex justify-center items-center">
                <div>
                  <img
                    src="./loading.jpg"
                    alt="loading"
                    className="rounded-xl"
                  />
                  <h1 className="text-center font-bold text-lg">
                    Nunggu bentar ya ...
                  </h1>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ListQuizSNBT;
