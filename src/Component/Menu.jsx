import { useLocation, useNavigate } from "react-router-dom";
import { Mapel } from "../DataStatics/Menu";

const Menu = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const handleSelect = (value) => {
    const data = {
      datasiswa: location.state,
      linkto: value,
    };
    navigate("/test", {
      state: data,
    });
  };
  return (
    <div className="px-5 pt-5">
      <div className="columns-7 justify-center w-full bg-blue-100 p-4 rounded-lg">
        {Mapel.map((value) => (
          <div key={value.id} onClick={() => handleSelect(value.link)}>
            <div className="bg-blue-400 text-white rounded-full text-center text-sm p-2 mb-3">
              <img src={value.picture} className="w-16" />
            </div>
            <p className="text-sm text-center">{value.inisial}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-between">
        <a href="https://sidata-ptn-snpmb.bppp.kemdikbud.go.id/ptn_sb.php?ptn=-3">
          <button
            className=" py-2 px-4 text-center text-white rounded-lg bg-blue-500 mt-2"
            style={{ fontSize: "12px" }}
          >
            Daya Tampung Kampus
          </button>
        </a>
        <a href={location.state.link_st30}>
          <button
            className="py-2 px-4 text-center text-white rounded-lg bg-red-500 mt-2"
            style={{ fontSize: "12px" }}
          >
            Test Strength Typologi 30
          </button>
        </a>
      </div>
    </div>
  );
};
export default Menu;
