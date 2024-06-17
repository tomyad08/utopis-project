import { useEffect, useState } from "react";
import { ENPOINTS } from "../DataStatics/endpoints";
import { useNavigate } from "react-router-dom";

const TestMinatBakat = () => {
  const navigate = useNavigate();
  const HEAD = [
    "PALING DISUKAI",
    "DISUKAI",
    "TIDAK DISUKAI",
    "PALING TIDAK DISUKAI",
  ];

  const [level, setLevel] = useState(0);
  const [Data, setData] = useState([]);
  const [checkedItems, setCheckedItems] = useState({});
  const [selectedItems, setSelectedItems] = useState([]);
  const [count, setCount] = useState(0);
  const [notif, setNotif] = useState(false);

  useEffect(() => {
    fetch(ENPOINTS.TEST_MINAT_BAKAT, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  const SelectMinat = () => {
    const selected = Object.keys(checkedItems)
      .filter((key) => checkedItems[key])
      .map((key) => ({
        minat: key,
        head: HEAD[level],
      }));

    if (selected.length <= 7) {
      setSelectedItems([...selectedItems, ...selected]);
      // Hapus item yang sudah dipilih dari Data
      const remainingData = Data.filter(
        (item) => !selected.some((sel) => sel.minat === item.minat)
      );
      setData(remainingData);

      // Reset checkedItems
      setCheckedItems({});
      setLevel(level + 1);
      setNotif(false);
    } else {
      setNotif(true);
    }
  };

  const handleClick = () => {
    SelectMinat();
    if (level === 3) {
      setData("");
    }
  };

  const handleChange = (event) => {
    const { name, checked } = event.target;
    setCheckedItems({
      ...checkedItems,
      [name]: checked,
    });
  };
  const handleSubmit = () => {
    navigate("/hasil-test-st30", {
      state: selectedItems,
    });
  };
  return (
    <div>
      {Data.length > 0 ? (
        <div>
          <div className="bg-blue-800 rounded-lg border border-2 border-white">
            <h1
              className="text-xl text-white font-semibold text-center pt-5"
              id="head"
            >
              {`Silahkan pilih maksimal 7 hal yang ${HEAD[level]}`}
            </h1>
            <h1 className="text-sm text-center p-2 font-semibold text-blue-100">
              UTOPIS PROJECT
            </h1>
            <div className="flex justify-center">
              {notif && (
                <div className="w-11/12">
                  <p
                    className="text-end font-bold text-white"
                    onClick={() => setNotif(false)}
                  >
                    X
                  </p>
                  <div className="bg-red-500 text-center p-2 rounded-xl text-white animate-pulse">
                    Mohon maap, lebih dari 7 yang dipilih :)
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="mt-2 bg-blue-100 border-4 border border-blue-300 p-2 rounded-lg">
            {Data.map((value) => (
              <div key={value.kode}>
                <table>
                  <tbody>
                    <tr className="">
                      <td className="p-3">
                        <input
                          type="checkbox"
                          id={value.minat}
                          name={value.minat}
                          checked={checkedItems[value.minat] || false}
                          className="w-3"
                          onChange={handleChange}
                        />
                      </td>
                      <td className="p-3">
                        <label className="text-sm" htmlFor={value.minat}>
                          {value.statement}
                        </label>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            ))}
          </div>
          <a href="#head">
            <button
              className="p-3 w-full my-5 font-semibold bg-red-600 rounded-lg text-sm text-white"
              onClick={handleClick}
            >
              OK, Lanjut Cuy.
            </button>
          </a>
        </div>
      ) : (
        <div className="h-screen flex justify-center items-center">
          {selectedItems.length > 0 ? (
            <div className="w-11/12 bg-blue-800 p-5 rounded-lg">
              <h1 className="text-xl font-bold text-center text-white">
                Terima Kasih
              </h1>
              <h1 className="text-sm font-semibold text-center text-white mb-5">
                - UTOPIS PROJECT -
              </h1>
              <p className="text-justify text-sm text-white">
                Terima kasih telah mengisi formulir ST30. Silakan klik tombol
                "Submit" di bawah ini untuk mengetahui hasil analisis peran yang
                tepat untuk Anda.
              </p>
              <p className="text-justify text-sm mt-2 text-white">
                Disclaimer: Rekomendasi ini didasarkan pada informasi yang Anda
                isi di formulir ini. Keputusan akhir tetap berada di tangan
                Anda.
              </p>
              <button
                className="p-3 w-full my-5 font-semibold  border-2 border-white bg-red-600 rounded-lg text-sm text-white"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          ) : (
            <p>Loading ...</p>
          )}
        </div>
      )}
    </div>
  );
};

export default TestMinatBakat;
