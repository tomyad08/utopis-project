import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ENPOINTS } from "../DataStatics/endpoints";
import { Mapel } from "../DataStatics/Menu";

const QuizSNBT = () => {
  const navigate = useNavigate();

  const [datas, setDatas] = useState("");
  const handleSelect = (value) => {
    let data = "";
    datas.filter((x) => {
      if (value.inisial === x.mapel) {
        data = {
          // datasiswa: location.state,
          linkto: x.link,
          select: value.mapel,
          jumlah: value.jumlah,
        };
        navigate("/list-snbt", {
          state: data,
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
        setDatas(data);
      });
  }, []);

  return (
    <div className="px-5 pb-2">
      <h1 className="text-sm font-semibold text-blue-700">Quiz SNBT</h1>
      <div className="flex justify-center bg-blue-100 p-4">
        <div className="columns-7 justify-center w-full xl:w-9/12 bg-blue-100 rounded-lg">
          {datas ? (
            <>
              {Mapel.map((value) => (
                <div key={value.id} onClick={() => handleSelect(value)}>
                  <div className="flex justify-center text-center text-sm mb-3">
                    <img
                      src={value.picture}
                      className="w-60 xl:w-32 rounded-lg border-2 border-blue-300"
                      alt=""
                    />
                  </div>
                  <p
                    className=" text-center text-blue-900 font-semibold"
                    style={{ fontSize: "10px" }}
                  >
                    {value.inisial}
                  </p>
                </div>
              ))}
            </>
          ) : (
            <>Loading ...</>
          )}
        </div>
      </div>
    </div>
  );
};
export default QuizSNBT;
