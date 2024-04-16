import { useEffect, useState } from "react";
import { ENPOINTS } from "../DataStatics/endpoints";
import { useLocation } from "react-router-dom";

const Report = () => {
  const location = useLocation();
  const [datas, setDatas] = useState("");
  let y = [];
  const FilterFunction = (data) => {
    const x = data.filter((value) => {
      if (value.nama_lengkap === location.state.nama_lengkap) {
        return value;
      }
    });

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
  }, []);
  return (
    <div className="p-5">
      <h1 className="text-sm font-semibold text-blue-700">Rapor TryOut ke-2</h1>
      <div className="p-4 bg-blue-100 rounded-lg">
        <div className="flex justify-end">
          <select className="p-2 text-sm focus:outline-none text-end">
            <option>Silahkan Pilih TO</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        <div className="flex justify-center">
          {datas ? (
            <table>
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
      </div>
    </div>
  );
};
export default Report;
