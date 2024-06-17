import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ENPOINTS } from "../DataStatics/endpoints";

const Result = () => {
  const [datas, setDatas] = useState([]);
  const [select, setSelect] = useState("");
  const [transit, setTransit] = useState([]);
  const [priority, setPriority] = useState([]);
  const [dataTransit, setDataTransit] = useState([]);
  const location = useLocation();

  const colorMap = {
    "PALING DISUKAI": { color: "red-700", strong: "Very-Strong", value: 5 },
    DISUKAI: { color: "amber-300", strong: "Middle-Strong", value: 3 },
    "TIDAK DISUKAI": { color: "slate-100", strong: "Middle-Weak", value: 0.3 },
    "PALING TIDAK DISUKAI": {
      color: "slate-100",
      strong: "Very-Weak",
      value: 0.2,
    },
  };

  const ChangeData = () => {
    const x = location.state.map((value) => ({
      nilai: value.minat,
      ...colorMap[value.head],
    }));
    setDataTransit(x);
  };

  useEffect(() => {
    ChangeData();
  }, [location.state]);

  const ListNumber = (values) => {
    const rumpunTotals = values.reduce((totals, item) => {
      const nilaiWarna = colorMap[item.color.toUpperCase()]?.value || 0;
      totals[item.rumpun] = (totals[item.rumpun] || 1) * nilaiWarna;
      return totals;
    }, {});

    const sortedRumpun = Object.keys(rumpunTotals).sort(
      (a, b) => rumpunTotals[b] - rumpunTotals[a]
    );
    setPriority(sortedRumpun);
  };

  const ManageFunction = (data) => {
    setTransit(data);
    if (dataTransit.length > 0) {
      const res = [];
      let count = 0;

      dataTransit.forEach((dt) => {
        data.forEach((d) => {
          if (d.strength.includes(dt.nilai.toUpperCase())) {
            count += 1;
            res.push({
              id: count,
              rumpun: d.rumpun,
              branding: dt.nilai,
              color: dt.color.split("-")[0],
              colorbg: `bg-${dt.color}`,
              strong: dt.strong,
            });
          }
        });
      });

      const sortedRes = res.sort((a, b) => a.rumpun.localeCompare(b.rumpun));
      setDatas(sortedRes);
      ListNumber(res);
    }
  };

  useEffect(() => {
    if (dataTransit.length > 0) {
      fetch(ENPOINTS.ANALISIS_MINAT_BAKAT, { method: "GET" })
        .then((res) => res.json())
        .then((data) => ManageFunction(data));
    }
  }, [dataTransit]);

  const filteredDatas = datas.filter(
    (value) => select === "" || value.rumpun.includes(select.toUpperCase())
  );

  return (
    <div className="p-5 h-screen overflow-y-scroll bg-blue-100">
      <h1 className="text-center text-xl font-semibold">
        Hasil Prediksi Analisis
      </h1>
      {datas.length > 0 && (
        <>
          <div>
            <h1 className="font-semibold mt-5 mb-1">
              Rumpun yang di sarankan:
            </h1>
            {priority.slice(0, 6).map((item, index) => (
              <h1 key={index}>
                {index + 1}. {item}
              </h1>
            ))}
          </div>
          <div>
            <h1 className="font-semibold mt-5 mb-1">
              Rumpun yang tidak di sarankan:
            </h1>
            {priority
              .slice(-2)
              .reverse()
              .map((item, index) => (
                <h1 key={index}>
                  {index + 1}. {item}
                </h1>
              ))}
          </div>
          <div className="flex justify-center py-4">
            <div>
              <h1>Silahkan Input Tujuan Rumpun Siswa</h1>
              <input
                className="p-2 w-full rounded-xl text-center bg-white focus:outline-none"
                placeholder="Dokter"
                onChange={(e) => setSelect(e.target.value)}
              />
            </div>
          </div>
          <div>
            <h1 className="text-center font-semibold border-b-2 border-blue-700 my-3">
              Kebutuhan
            </h1>
            {transit ? (
              <>
                {transit
                  .filter(
                    (value) =>
                      select === "" ||
                      value.rumpun.includes(select.toUpperCase())
                  )
                  .map((value) => (
                    <div
                      className="my-2 text-black p-2 rounded-lg"
                      key={value.id}
                    >
                      <div className="font-semibold mb-2">{value.rumpun}</div>
                      <div>{value.strength}</div>
                    </div>
                  ))}
              </>
            ) : (
              "loading..."
            )}
          </div>
          <h1 className="text-center font-semibold border-b-2 border-blue-700 my-3">
            Kemampuan
          </h1>
          {filteredDatas.map((value) => (
            <div
              className={`my-2 flex justify-between ${value.colorbg} text-blue-600 font-semibold p-2 rounded-lg`}
              key={value.id}
            >
              <div>{value.branding}</div>
              <div>{value.strong}</div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Result;
