import { useLocation, useNavigate } from "react-router-dom";
import { Mapel } from "../DataStatics/Menu";

const Quiz = () => {
  const navigate = useNavigate();
  const location = useLocation();
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
  return (
    <div className="px-5 pb-2">
      <h1 className="text-sm font-semibold text-blue-700">Quiz</h1>
      <div className="columns-7 justify-center w-full bg-blue-100 p-4 rounded-lg">
        {Mapel.map((value) => (
          <div key={value.id} onClick={() => handleSelect(value)}>
            <div className="bg-blue-300 rounded-lg xl:rounded-lg flex justify-center text-center text-sm p-1 mb-3">
              <img src={value.picture} className="w-32" />
            </div>
            <p
              className=" text-center text-blue-900 font-semibold"
              style={{ fontSize: "12px" }}
            >
              {value.inisial}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Quiz;
