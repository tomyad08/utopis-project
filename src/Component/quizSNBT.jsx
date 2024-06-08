import { useLocation, useNavigate } from "react-router-dom";
import { Mapel } from "../DataStatics/Menu";
import { useEffect, useState } from "react";
import { ENPOINTS } from "../DataStatics/endpoints";

const Quiz = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [datas, setDatas] = useState("");
  const handleSelect = (value) => {
    const data = {
      datasiswa: location.state,
      linkto: value.link,
      select: value.time,
      jumlah: value.jumlah,
    };
    navigate("/test", {
      state: data,
    });
  };

  useEffect(() => {
    fetch(ENPOINTS.LATSOL, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setDatas(data);
      });
  }, []);

  return (
    <div className="px-5 pb-2">
      <h1 className="text-sm font-semibold text-blue-700">Quiz SNBT</h1>
      <div className="columns-7 justify-center w-full bg-blue-100 p-4 rounded-lg">
        {datas ? (
          <>
            {datas.map((value) => (
              <div key={value.id} onClick={() => handleSelect(value)}>
                <div className="flex justify-center text-center text-sm mb-3">
                  <img
                    src={value.picture}
                    className="w-30 rounded-xl border-2 border-blue-300"
                  />
                </div>
                <p
                  className=" text-center text-blue-900 font-semibold"
                  style={{ fontSize: "10px" }}
                >
                  {value.mapel}
                </p>
              </div>
            ))}
          </>
        ) : (
          <p className="text-sm font-semibold text-blue-500 text-center">
            Loading
          </p>
        )}
      </div>
    </div>
  );
};
export default Quiz;
