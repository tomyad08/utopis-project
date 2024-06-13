import { useEffect, useState } from "react";
import { ENPOINTS } from "../DataStatics/endpoints";

const TestMinatBakat = () => {
  const HEAD = [
    "PALING DISUKAI",
    "DISUKAI",
    "TIDAK DISUKAI",
    "PALING TIDAK DISUKAI",
  ];
  const [level, setLevel] = useState(0);
  const [count, setCount] = useState(0);
  const [list, setList] = useState("");
  const [Data, setData] = useState("");

  const FilterLevel = () => {
    if (level === 1) {
    }
  };

  const addField = (datas) => {
    let x = [];
    datas.map((value) => {
      x.push({
        kode: value.kode,
        minat: value.minat,
        statement: value.statement,
        select: "",
      });
    });
    setData(x);
  };

  useEffect(() => {
    fetch(ENPOINTS.TEST_MINAT_BAKAT, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        addField(data);
      });
  });

  const handleClick = () => {
    setLevel(level + 1);
  };

  return (
    <div>
      <div className="bg-blue-800 rounded-lg border border-2 border-white">
        <h1 className="text-xl text-white font-semibold text-center pt-5">{`Silahkan pilih maksimal 7 hal yang ${HEAD[level]}`}</h1>
        <h1 className="text-sm text-center p-2 font-semibold text-blue-100">
          UTOPIS PROJECT
        </h1>
      </div>

      {Data ? (
        <div className="mt-2 bg-blue-300 p-2 rounded-lg">
          {Data.map((value) => (
            <div>
              <tabel>
                <tbody>
                  <tr className="bg-blue-100">
                    <td className="p-3">
                      <input type="checkbox" id={value} className="w-3" />
                    </td>
                    <td className="p-3">
                      <label className=" text-sm" id={value}>
                        {value.statement}
                      </label>
                    </td>
                  </tr>
                </tbody>
              </tabel>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading ...</p>
      )}
      <button
        className="p-3 w-full my-5 font-semibold bg-red-600 rounded-lg text-sm text-white"
        onClick={handleClick}
      >
        OK, Lanjut Cuy.
      </button>
    </div>
  );
};
export default TestMinatBakat;
