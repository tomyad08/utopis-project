import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ENPOINTS } from "../DataStatics/endpoints";

const Menu = () => {
  const [data, setData] = useState();
  const [pin, setPin] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(ENPOINTS.MERGETO, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  const handleSelect = () => {
    data.filter((value) => {
      if (value.password == pin) {
        const datax = {
          linkto: value.link_to,
        };
        navigate("/menu-deep", {
          state: datax,
        });
      }
    });
  };
  return (
    <div className="px-5 pt-5">
      <h1 className="text-sm font-semibold text-blue-700">Try-out</h1>
      <div className="p-3 rounded-lg bg-blue-100">
        <div className="flex justify-center gap-2">
          <input
            className="bg-white py-1 px-2 rounded-lg focus:outline-none focus:font-bold"
            placeholder="Kode TryOut"
            onChange={(e) => setPin(e.target.value)}
          />
          <button
            className="bg-red-600 py-1 px-3 rounded-lg text-sm font-semibold text-white"
            onClick={handleSelect}
          >
            Let's GO!!
          </button>
        </div>
      </div>
      <div className="flex justify-center md:justify-center gap-2 mt-2">
        <a href="https://sidata-ptn-snpmb.bppp.kemdikbud.go.id/ptn_sb.php">
          <button
            className=" py-2 px-4 text-center text-white rounded-lg bg-blue-500 mt-2"
            style={{ fontSize: "10px" }}
          >
            Daya Tampung Kampus
          </button>
        </a>
        <div>
          {JSON.parse(localStorage.getItem("user")).link_st30 ? (
            <a>
              <button
                className="py-2 px-4 text-center text-white rounded-lg bg-amber-600 mt-2"
                style={{ fontSize: "10px" }}
                onClick={() => navigate("/test-minat")}
              >
                Test ST-30
              </button>
            </a>
          ) : (
            <button
              className="py-2 px-4 text-center text-white rounded-lg bg-amber-500 mt-2"
              style={{ fontSize: "10px" }}
              onClick={() => navigate("/no-link")}
            >
              Test ST-30
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
export default Menu;
