import { useLocation } from "react-router-dom";

const AnalisisST30 = () => {
  const location = useLocation();
  console.log(location.state);
  return (
    <div>
      <h1>Hai</h1>
    </div>
  );
};
export default AnalisisST30;
