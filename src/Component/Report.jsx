import { useEffect, useState } from "react";
import { ENPOINTS } from "../DataStatics/endpoints";
import { useLocation } from "react-router-dom";

const Report = () => {
  const location = useLocation();
  const [datas, setDatas] = useState("");
  const [filter, setFilter] = useState("2");
  const [rate, setRate] = useState(0);

  const FilterFunction = (data) => {
    setDatas("");
    let y = 0;
    const x = data.filter((value) => {
      if (
        value.nama_lengkap === location.state.nama_lengkap &&
        value.tryout === Number(filter)
      ) {
        y += value.nilai;
        return value;
      }
    });
    setRate(y / 7);
    setDatas(x);
  };
  useEffect(() => {
    fetch(ENPOINTS.REPORT, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        FilterFunction(data);
      });
  }, [filter]);

  return (
    <div className="p-5">
      <h1 className="text-sm font-semibold text-blue-700">{`Rapor TryOut ke-${filter}`}</h1>
      <div className="p-4 bg-blue-100 rounded-lg">
        <div className="flex justify-end">
          <select
            className="p-2 text-sm focus:outline-none text-end rounded-xl"
            onChange={(e) => setFilter(e.target.value)}
          >
            <option>Silahkan Pilih TO</option>
            <option value="1">TryOut-1</option>
            <option value="2">TryOut-2</option>
            <option value="3">TryOut-3</option>
            <option value="4">TryOut-4</option>
            <option value="5">TryOut-5</option>
          </select>
        </div>
        <div className="flex justify-center">
          {datas ? (
            <table style={{ fontSize: "12px" }}>
              <thead>
                <tr>
                  <th className="p-2">Mata Pelajaran</th>
                  <th className="p-2">Nilai</th>
                  <th className="p-2">Target</th>
                  <th className="p-2">Presentase (%)</th>
                </tr>
              </thead>
              {datas.map((value) => (
                <tbody>
                  <tr>
                    <td className="text-center">{value.kode_soal}</td>
                    <td className="text-center">{Math.floor(value.nilai)}</td>
                    <td className="text-center">
                      {location.state.nilai_harapan}
                    </td>
                    <td className="text-center">
                      {Math.floor(
                        (value.nilai * 100) / location.state.nilai_harapan
                      )}
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          ) : (
            <p>Loading...</p>
          )}
        </div>
        <div>
          <h1 className="text-center font-bold text-3xl mt-5">
            Nilai Rata-rata:
          </h1>
          <h1 className="text-center font-bold text-8xl text-blue-800">
            {Math.floor(rate)}
          </h1>
        </div>
      </div>
    </div>
  );
};
export default Report;
