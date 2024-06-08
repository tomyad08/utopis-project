import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ENPOINTS } from "../DataStatics/endpoints";
import { Mapel } from "../DataStatics/Menu";

const QuizCPNS = ({ input }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [datas, setDatas] = useState("");
  const handleSelect = (value) => {
    const data = {
      datasiswa: location.state,
      linkto: value.link,
      select: value.group,
      jumlah: value.jumlah,
    };
    navigate("/list-cpns", {
      state: data,
    });
  };

  const MapelCPNS = [
    {
      id: 1,
      group: "Tes Intelegensi Umum",
      picture: "./tiu.jpg",
    },
    {
      id: 2,
      group: "Tes Wawasan Kebangsaan",
      picture: "./twk.jpg",
    },
    {
      id: 3,
      group: "Tes Karakteristik Pribadi",
      picture: "./kepribadian.jpg",
    },
  ];

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
      <h1 className="text-sm font-semibold text-blue-700">Quiz CPNS</h1>
      <div className="columns-3 justify-center w-full bg-blue-100 p-4 rounded-lg">
        {MapelCPNS.map((value) => (
          <div key={value.id} onClick={() => handleSelect(value)}>
            <div className="flex justify-center text-center text-sm mb-3 p-2">
              <img
                src={value.picture}
                className="w-30 rounded-xl border-2 border-blue-300"
                alt=""
              />
            </div>
            <p
              className=" text-center text-blue-900 font-semibold"
              style={{ fontSize: "10px" }}
            >
              {value.group}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default QuizCPNS;
