import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ENPOINTS } from "../DataStatics/endpoints";

const FormLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    fetch(ENPOINTS.LOGIN, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);

        if (localStorage.getItem("user")) {
          data.filter((value) => {
            if (
              JSON.parse(localStorage.getItem("user")).nama_lengkap ===
              value.nama_lengkap
            ) {
              navigate("/menu");
            }
          });
        }
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

  console.log(data);
  return (
    <div>
      <form>
        <label className="text-sm text-blue-800">Username</label>
        <input
          className="p-2 xl:p-1 w-full background-white rounded-lg focus:font-semibold mb-3 outline-none drop-shadow-xl"
          type="text"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label className="text-sm text-blue-800">Password</label>
        <input
          className="p-2 xl:p-1 w-full bg-white rounded-lg mb-5 outline-none drop-shadow-xl"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="p-2 w-full rounded-lg font-semibold text-blue-800"
          onClick={HandleSubmit}
        >
          Log In
        </button>
      </form>
    </div>
  );
};
export default FormLogin;
