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

  useEffect(() => {
    fetch(ENPOINTS.TEST_MINAT_BAKAT, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  const handleClick = () => {
    console.log(level);
    if (level === 4) {
      navigate("/hasil-test-st30", {
        state: selectedItems,
      });
    } else {
      const selected = Object.keys(checkedItems)
        .filter((key) => checkedItems[key])
        .map((key) => ({
          minat: key,
          head: HEAD[level],
        }));

      setSelectedItems([...selectedItems, ...selected]);

      // Hapus item yang sudah dipilih dari Data
      const remainingData = Data.filter(
        (item) => !selected.some((sel) => sel.minat === item.minat)
      );
      setData(remainingData);

      // Reset checkedItems
      setCheckedItems({});
      setLevel(level + 1);
    }
  };

  const handleChange = (event) => {
    const { name, checked } = event.target;
    setCheckedItems({
      ...checkedItems,
      [name]: checked,
    });
  };

  return (
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
      </div>

      {Data.length > 0 ? (
        <div className="mt-2 bg-blue-300 p-2 rounded-lg">
          {Data.map((value) => (
            <div key={value.kode}>
              <table>
                <tbody>
                  <tr className="bg-blue-100">
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
