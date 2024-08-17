import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ENPOINTS } from "../DataStatics/endpoints";

const FormLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    // if (JSON.parse(localStorage.getItem("user")).nama) {
    //   navigate("/menu");
    // }
    fetch(ENPOINTS.LOGIN, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        data.filter((value) => {
          if (
            JSON.parse(localStorage.getItem("user")).nama_lengkap ===
            value.nama_lengkap
          ) {
            navigate("/menu");
          } else {
            setData(data);
          }
        });
      });
  }, []);

  const HandleSubmit = () => {
    data.map((value) => {
      if (value.username === username) {
        if (value.password === password) {
          localStorage.setItem("user", JSON.stringify(value));
          navigate("/menu", {
            state: value,
          });
        }
      }
    });
  };
  return (
    <div>
      <form>
        <label className="text-sm text-white">Username</label>
        <input
          className="p-2 xl:p-1 w-full bg-white rounded-lg focus:font-semibold mb-3 outline-none"
          type="text"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label className="text-sm text-white">Password</label>
        <input
          className="p-2 xl:p-1 w-full bg-white rounded-lg mb-5 outline-none"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="p-2 w-full bg-red-600 rounded-lg font-semibold text-white"
          onClick={HandleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};
export default FormLogin;
