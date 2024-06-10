import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { MenuSNBT } from "../DataStatics/MenuSNBT";
import { MenuCPNS } from "../DataStatics/MenuCPNS";

const ListQuizCPNS = () => {
  const [list, setList] = useState("");
  const [datas, setDatas] = useState("");
  const location = useLocation();

  useEffect(() => {
    const x = MenuCPNS.filter((value) => {
      if (value.group === location.state.select) {
        return value;
      }
    });
    setList(x);
  }, []);
  return (
    <div className=" bg-black flex justify-center items-center h-screen">
      <div className="w-11/12">
        <div className="bg-blue-300 border-4 border-white p-3 rounded-lg">
          <div className="p-5 bg-blue-200 rounded-xl mb-5">
            <h1 className="text-2xl text-blue-900 font-semibold text-center">
              List Materi
            </h1>
            <p className="text-sm font-semibold text-center">
              Silahkan pilih sub-materi yang ingin kamu gass belajarnya.
            </p>
          </div>
          <div className="p-5 bg-blue-200 rounded-xl">
            {list ? (
              <>
                {list.map((value) => (
                  <div
                    key={value.id}
                    className="w-full bg-blue-600 p-2 border-2 border-white rounded-xl my-2 text-white font-semibold"
                  >
                    <h1>{value.subgroup}</h1>
                  </div>
                ))}
              </>
            ) : (
              <p>Loading ...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ListQuizCPNS;
