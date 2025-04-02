import { useLocation, useNavigate } from "react-router-dom";
import { Mapel } from "../DataStatics/Menu";
import { useEffect, useState } from "react";

const HasilTest = () => {
  const [notif, setNotif] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const MapelDone = JSON.parse(localStorage.getItem("subtest"));

  useEffect(() => {
    if (location.state.nilai <= 700) {
      setNotif("Gak apa-apa, masih ada waktu buat belajar.  Yuk SEMANGATT!!");
    } else {
      setNotif(
        "Wah, udah keren aja nih nilainya. Tapi, tetap ilmu padi abangkuhh!!"
      );
    }
  }, []);

  const handleSelect = (value) => {
    const data = {
      select: value.time,
      jumlah: value.jumlah,
      subtest: value.inisial,
    };
    navigate("/test", {
      state: data,
    });
  };
  return (
    <div className="bg-blue-100 h-screen flex justify-center items-center">
      <div>
        <div
          className="font-semibold absolute top-2 right-4 cursor-pointer"
          onClick={() => navigate("/menu", { state: location.state.datasiswa })}
        >
          <div>
            <img
              src="./logo_cerdikia.PNG"
              alt="logo"
              className="w-32 bg-white px-3 py-1 rounded-xl border border-1 border-blue-500"
            />
          </div>
        </div>
        <div className="bg-blue-700 border-2 border-white p-5 mx-5 rounded-xl text-white text-center">
          <h1 className="text-2xl font-semibold">Cerdikia</h1>
          <h1 className="text-9xl font-bold">{location.state.nilai}</h1>
          <p className="text-2xl font-semibold">{notif}</p>
          <p className="text-end mt-5">Salam,</p>
          <p className="text-end font-semibold">Mila Afiatul Hikmah S.Pd</p>
          <p className="text-end">President of Cerdikia</p>
        </div>
        {MapelDone ? (
          <div className="flex gap-2 xl:mt-5 w-full absolute bottom-0 xl:relative justify-center bg-blue-200 p-4 rounded-lg">
            {Mapel.filter(
              (yItem) =>
                !MapelDone.some((xItem) => xItem.mapel === yItem.inisial)
            ).map((value) => (
              <div
                className="cursor-pointer"
                key={value.id}
                onClick={() => handleSelect(value)}
              >
                <div className="bg-blue-400 text-white flex justify-center rounded-full xl:rounded-lg text-center text-sm p-2 mb-3">
                  <img
                    src={value.picture}
                    className="w-12 xl:w-10 rounded-full"
                  />
                </div>
                <p className="text-sm text-center xl:font-semibold">
                  {value.inisial}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
export default HasilTest;
