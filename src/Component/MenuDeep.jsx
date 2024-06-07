import { useLocation, useNavigate } from "react-router-dom";
import { Mapel } from "../DataStatics/Menu";

const MenuDeep = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const handleSelect = (value) => {
    const data = {
      datasiswa: location.state.datasiswa,
      linkto: location.state.linkto,
      select: value.time,
      jumlah: value.jumlah,
      subtest: value.inisial,
    };
    navigate("/test", {
      state: data,
    });
  };

  return (
    <div>
      <div className="px-5 pb-2">
        <h1 className="text-2xl text-center pt-5 font-semibold text-blue-700">
          TryOut UTOPIS Project
        </h1>
        <p className="text-sm text-center mb-5 border-b-2 border-blue-800 rounded-lg drop-shadow-xl">
          Pilih nih cuy, subtest mana yang pengen lu duluin.
        </p>
        <div className="w-full bg-blue-100 rounded-lg p-2">
          {Mapel.map((value) => (
            <div
              className="flex justify-between p-2 m-2 bg-blue-200 rounded-xl"
              key={value.id}
              onClick={() => handleSelect(value)}
            >
              <div className="bg-blue-300 rounded-lg xl:rounded-lg flex justify-center text-center text-sm p-1 mb-3">
                <img src={value.picture} className="w-10" />
              </div>
              <div>
                <p
                  className=" text-center text-blue-900 font-semibold"
                  style={{ fontSize: "12px" }}
                >
                  {value.mapel}
                </p>
                <p
                  className=" text-end text-blue-800"
                  style={{ fontSize: "12px" }}
                >
                  {`${value.jumlah} Soal`}
                </p>
                <p
                  className=" text-end text-blue-800"
                  style={{ fontSize: "12px" }}
                >
                  {`${value.time / 60} Menit`}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default MenuDeep;
