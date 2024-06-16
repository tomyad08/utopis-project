import { useLocation } from "react-router-dom";

const AnalisisST30 = () => {
  const location = useLocation();
  console.log(location.state);
  return (
    <div>
      <h1 className="text-center text-blue-700 font-semibold text-3xl">
        Analisis Stength Typology 30
      </h1>
      <p className="text-justify mt-5" style={{ fontSize: "12px" }}>
        Strength Typologi 30 adalah sebuah metode pemetaan minat dan bakat yang
        bertujuan untuk membantu individu menemukan peran yang paling produktif
        dan sesuai dengan potensi mereka.
      </p>
      <div className="mt-5">
        <h1 className="text-blue-700 text-sm border-b-2 border-blue-300">
          Peran Paling Produktif
        </h1>
        <div className="columns-2 mt-3">
          {location.state
            .filter((value) => {
              if (value.head === "PALING DISUKAI") {
                return value;
              }
            })
            .map((value) => (
              <div className="p-1 bg-blue-700 text-white font-semibold text-center text-sm mb-2 rounded-lg">
                {value.minat}
              </div>
            ))}
        </div>
      </div>
      <div className="mt-5">
        <h1 className="text-blue-700 text-sm border-b-2 border-blue-300">
          Peran Paling Tidak Produktif
        </h1>
        <div className="columns-2 mt-3">
          {location.state
            .filter((value) => {
              if (value.head === "PALING TIDAK DISUKAI") {
                return value;
              }
            })
            .map((value) => (
              <div className="p-1 bg-blue-700 text-white font-semibold text-center text-sm mb-2 rounded-lg">
                {value.minat}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
export default AnalisisST30;
