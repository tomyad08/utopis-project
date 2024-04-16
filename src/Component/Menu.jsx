import { useLocation, useNavigate } from "react-router-dom";
import { Mapel } from "../DataStatics/Menu";

const Menu = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const handleSelect = (value) => {
    const data = {
      datasiswa: location.state,
      linkto: value.link,
      select: value.time,
      jumlah: value.jumlah,
    };
    navigate("/test", {
      state: data,
    });
  };
  return (
    <div className="px-5 pt-5">
      <h1 className="text-sm font-semibold text-blue-700">Try-out</h1>
      <div className="columns-7 justify-center w-full bg-blue-100 p-4 rounded-lg">
        {Mapel.map((value) => (
          <div key={value.id} onClick={() => handleSelect(value)}>
            <div className="bg-blue-400 text-white rounded-full xl:rounded-lg flex justify-center text-center text-sm p-2 mb-3">
              <img src={value.picture} className="w-16" />
            </div>
            <p className=" text-center" style={{ fontSize: "12px" }}>
              {value.inisial}
            </p>
          </div>
        ))}
      </div>
      <div className="flex justify-between md:justify-center gap-2 mt-2">
        <a href="https://sidata-ptn-snpmb.bppp.kemdikbud.go.id/ptn_sb.php">
          <button
            className=" py-2 px-4 text-center text-white rounded-lg bg-blue-500 mt-2"
            style={{ fontSize: "10px" }}
          >
            Daya Tampung Kampus
          </button>
        </a>
        <div>
          {location.state.link_st30 ? (
            <a href={location.state.link_st30}>
              <button
                className="py-2 px-4 text-center text-white rounded-l-lg bg-blue-800 mt-2"
                style={{ fontSize: "10px" }}
              >
                Test ST-30
              </button>
            </a>
          ) : (
            <button
              className="py-2 px-4 text-center text-white rounded-l-lg bg-blue-500 mt-2"
              style={{ fontSize: "10px" }}
              onClick={() => navigate("/no-link")}
            >
              Test ST-30
            </button>
          )}
          <a href="https://sidata-ptn-snpmb.bppp.kemdikbud.go.id/ptn_sb.php">
            <button
              className=" py-2 px-4 text-center text-white rounded-r-lg bg-red-500 mt-2"
              style={{ fontSize: "10px" }}
            >
              Analisis ST-30
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Menu;
