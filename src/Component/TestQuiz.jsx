import "katex/dist/katex.min.css";
import Latex from "react-latex-next";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ENPOINTS } from "../DataStatics/endpoints";

const TestPageQuiz = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [Data, setData] = useState("");
  const [count, setCount] = useState(1);
  const [no, setNo] = useState([]);
  const [notif, setNotif] = useState("");
  const [cond, setCond] = useState(false);
  const [Loading, setLoading] = useState(false);
  const [cond1, setCond1] = useState("");
  const [cond2, setCond2] = useState("");
  const [cond3, setCond3] = useState("");
  const [cond4, setCond4] = useState("");
  const [isian, setIsian] = useState("");

  const getData = async (data) => {
    let setNumber = [];
    let soal = [];

    const filteredData = data.filter(
      (value) => value.kode_soal == location.state.kode_soal
    );

    const selectedData = [];
    while (selectedData.length < 5 && filteredData.length > 0) {
      const randomIndex = Math.floor(Math.random() * filteredData.length);
      selectedData.push(filteredData[randomIndex]);
      filteredData.splice(randomIndex, 1);
    }

    selectedData.forEach((value) => {
      setNumber.push({
        kode_soal: value.kode_soal,
        no_soal: value.no_soal,
        select: "",
      });
      soal.push(value);
    });

    setNo(setNumber);
    setData(soal);
  };

  useEffect(() => {
    if (!location.state) {
      navigate("/");
    } else {
      fetch(location.state.linkto, {
        method: "GET",
      })
        .then((res) => res.json())
        .then((data) => {
          getData(data);
        })
        .catch(() => {
          setNotif(
            "Mohon maap gagal mengunduh data. Silahkan refresh atau reload."
          );
          setCond(true);
        });
    }
  }, []);

  const handleBack = () => {
    if (count > 1) {
      setCount(count - 1);
    } else {
      setCount(Data.length - 1);
    }
  };

  const handleNext = () => {
    if (count <= Data.length - 1) {
      setCount(count + 1);
    } else {
      setCount(1);
    }
  };

  const Change = (select) => {
    let setChange = [];
    no.map((value) => {
      if (value.no_soal === Data[count - 1].no_soal) {
        setChange.push({
          kode_soal: value.kode_soal,
          no_soal: value.no_soal,
          select: select,
        });
      } else {
        setChange.push({
          kode_soal: value.kode_soal,
          no_soal: value.no_soal,
          select: value.select,
        });
      }
    });
    setNo(setChange);
  };

  const handleSelect = (select) => {
    Change(select);
    setCount(count + 1);
    if (count > Data.length - 1) {
      setCount(1);
    }
  };

  const HandlePoint = () => {
    let result = 0;

    for (let i = 0; i < Data.length; i++) {
      if (Data[i].jawaban.toString() === no[i].select) {
        result += 1000;
      }
    }

    const SubData = {
      nama_lengkap: JSON.parse(localStorage.getItem("user")).nama_lengkap,
      asal_sekolah: JSON.parse(localStorage.getItem("user")).asal_sekolah,
      submateri: location.state.kode_soal,
      nilai: result,
    };

    var formData = new FormData();
    for (var key in SubData) {
      if (SubData.hasOwnProperty(key)) {
        formData.append(key, SubData[key]);
      }
    }

    fetch(ENPOINTS.SUBMIT_QUIZ, {
      method: "POST",
      body: formData,
    });

    const data = {
      nilai: result,
      datasiswa: location.state.datasiswa,
    };

    navigate("/hasil-test-quiz", {
      state: data,
    });
  };

  const handleSubmit = () => {
    setLoading(true);
    HandlePoint();
  };

  return (
    <div className="xl:pt-0  xl:overflow-hidden">
      {cond && (
        <div className="w-full absolute h-screen bg-blue-200 rounded-lg text-center">
          <div className="flex justify-center h-screen items-center text-3xl font-semibold">
            <div>
              <div>{notif}</div>
              {Loading ? (
                <button className="drop-shadow-xl text-lg w-full py-2 bg-yellow-200 hover:bg-red-500 my-2 hover:text-white font-semibold rounded-lg">
                  Loading ...
                </button>
              ) : (
                <div className="flex justify-center">
                  <button
                    className="drop-shadow-xl text-lg w-2/4 py-2 bg-blue-600 hover:bg-red-500 my-2 text-white font-semibold rounded-lg"
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
                </div>
              )}{" "}
            </div>
          </div>
        </div>
      )}
      <div className="hidden xl:block xl:absolute xl:top-0">
        <img src="./top-test.png" alt="" className="w-full" />
      </div>
      <div className="xl:flex justify-center xl:mt-5 mb-5">
        <div className="xl:w-9/12 flex justify-center">
          {!cond && (
            <div className="w-11/12 mt-2 bg-blue-800 text-white rounded-lg p-3 drop-shadow-xl">
              {Data ? (
                <div>
                  <div className="flex justify-between">
                    <div className="py-1 text-sm px-2 mb-5  bg-blue-400 w-24 rounded-lg text-black text-center font-semibold">
                      <p
                        className="text-center bg-blue-200 mb-1 rounded-lg"
                        style={{ fontSize: "10px" }}
                      >
                        {Data[count - 1].kode_soal}
                      </p>
                      <p>Soal {count}</p>
                    </div>
                    <div>
                      <p className="p-2 text-sm font-bold">Utopis</p>
                    </div>
                  </div>
                  {Data[count - 1].bacaan || Data[count - 1].soal_gambar ? (
                    <div
                      className=" text-justify bg-blue-100 text-black p-2 rounded-lg"
                      style={{ fontSize: "12px" }}
                    >
                      <div>
                        {Data[count - 1].bacaan ? (
                          <p>
                            <Latex>{Data[count - 1].bacaan}</Latex>
                          </p>
                        ) : (
                          ""
                        )}
                      </div>
                      <div>
                        {Data[count - 1].soal_gambar ? (
                          <div className="flex justify-center">
                            <img
                              src={Data[count - 1].soal_gambar}
                              className="w-10/12 xl:w-4/12"
                            />{" "}
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  ) : (
                    ""
                  )}

                  <div>
                    <p className=" px-2 py-5" style={{ fontSize: "12px" }}>
                      <Latex>{Data[count - 1].soal_text}</Latex>
                    </p>
                  </div>
                  {Data[count - 1].isian_singkat ? (
                    <>
                      <p className="pb-5">
                        <Latex>{Data[count - 1].isian_singkat}</Latex>
                      </p>
                      <input
                        className="p-2 w-full rounded-lg focus:outline-none text-black"
                        type="number"
                        placeholder="Masukkan jawaban di sini ..."
                        onChange={(e) => setIsian(e.target.value)}
                      />
                      <div className="flex justify-center">
                        <button
                          className="p-1 w-52 border border-2 border-white rounded-lg bg-red-500 mt-5"
                          onClick={() => handleSelect(isian)}
                        >
                          Simpan
                        </button>
                      </div>
                    </>
                  ) : (
                    <>
                      {Data[count - 1].pernyataan_1 ? (
                        <>
                          <table
                            className="p-2 bg-blue-100 rounded-lg text-black w-full"
                            style={{ fontSize: "12px" }}
                          >
                            <thead>
                              <tr>
                                <th className="p-1 xl:p-2 border border-1 border-black">
                                  Pernyataan
                                </th>
                                <th className="p-1 xl:p-2 border border-1 border-black">
                                  {Data[count - 1].head_1}
                                </th>
                                <th className="p-1 xl:p-2 border border-1 border-black">
                                  {Data[count - 1].head_2}
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="p-2 rounded-lg border border-1">
                                <td className="text-center p-1 xl:p-2 border border-1 border-black">
                                  {Data[count - 1].pernyataan_1}
                                </td>
                                <td className="p-1 xl:p-2 border border-1 border-black">
                                  <div className="flex justify-center">
                                    <input
                                      type="radio"
                                      name="pernyataan_1"
                                      value={Data[count - 1].head_1}
                                      onChange={(e) => setCond1(e.target.value)}
                                    />
                                  </div>
                                </td>
                                <td className="p-1 xl:p-2 border border-1 border-black">
                                  <div className="flex justify-center">
                                    <input
                                      type="radio"
                                      name="pernyataan_1"
                                      value={Data[count - 1].head_2}
                                      onChange={(e) => setCond1(e.target.value)}
                                    />
                                  </div>
                                </td>
                              </tr>
                              <tr className="p-2">
                                <td className="p-1 xl:p-2 border border-1 border-black text-center">
                                  {Data[count - 1].pernyataan_2}
                                </td>
                                <td className="p-1 xl:p-2 border border-1 border-black">
                                  <div className="flex justify-center">
                                    <input
                                      type="radio"
                                      name="pernyataan_2"
                                      value={Data[count - 1].head_1}
                                      onChange={(e) => setCond2(e.target.value)}
                                    />
                                  </div>
                                </td>
                                <td className="p-1 xl:p-2 border border-1 border-black">
                                  <div className="flex justify-center">
                                    <input
                                      type="radio"
                                      name="pernyataan_2"
                                      value={Data[count - 1].head_2}
                                      onChange={(e) => setCond2(e.target.value)}
                                    />
                                  </div>
                                </td>
                              </tr>
                              <tr className="p-2">
                                <td className="p-1 xl:p-2 border border-1 border-black text-center">
                                  {Data[count - 1].pernyataan_3}
                                </td>
                                <td className="p-1 xl:p-2 border border-1 border-black">
                                  <div className="flex justify-center">
                                    <input
                                      type="radio"
                                      name="pernyataan_3"
                                      value={Data[count - 1].head_1}
                                      onChange={(e) => setCond3(e.target.value)}
                                    />
                                  </div>
                                </td>
                                <td className="p-1 xl:p-2 border border-1 border-black">
                                  <div className="flex justify-center">
                                    <input
                                      type="radio"
                                      name="pernyataan_3"
                                      value={Data[count - 1].head_2}
                                      onChange={(e) => setCond3(e.target.value)}
                                    />
                                  </div>
                                </td>
                              </tr>
                              <tr className="p-2">
                                <td className="p-1 xl:p-2 border border-1 border-black text-center">
                                  {Data[count - 1].pernyataan_4}
                                </td>
                                <td className="p-1 xl:p-2 border border-1 border-black">
                                  <div className="flex justify-center">
                                    <input
                                      type="radio"
                                      name="pernyataan_4"
                                      value={Data[count - 1].head_1}
                                      onChange={(e) => setCond4(e.target.value)}
                                    />
                                  </div>
                                </td>
                                <td className="p-1 xl:p-2 border border-1 border-black">
                                  <div className="flex justify-center">
                                    <input
                                      type="radio"
                                      name="pernyataan_4"
                                      value={Data[count - 1].head_2}
                                      onChange={(e) => setCond4(e.target.value)}
                                    />
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <div className="flex justify-center">
                            <button
                              className="py-1 px-5 border w-52 border-1 border-white rounded-lg bg-red-500 mt-4 text-white"
                              onClick={() =>
                                handleSelect(
                                  `${cond1},${cond2},${cond3},${cond4}`
                                )
                              }
                            >
                              Simpan
                            </button>
                          </div>
                        </>
                      ) : (
                        <>
                          {Data[count - 1].pilihan_a_gambar ? (
                            <div className="columns-1 xl:flex xl:justify-around">
                              <div>
                                <strong>A.</strong>
                                <img
                                  src={Data[count - 1].pilihan_a_gambar}
                                  alt=""
                                  className="w-2/5 xl:w-10/12"
                                  onClick={() => handleSelect("A")}
                                />
                              </div>
                              <div>
                                <strong>B.</strong>
                                <img
                                  src={Data[count - 1].pilihan_b_gambar}
                                  alt=""
                                  className="w-2/5 xl:w-10/12"
                                  onClick={() => handleSelect("B")}
                                />
                              </div>
                              <div>
                                <strong>C.</strong>
                                <img
                                  src={Data[count - 1].pilihan_c_gambar}
                                  alt=""
                                  className="w-2/5 xl:w-10/12"
                                  onClick={() => handleSelect("C")}
                                />
                              </div>
                              <div>
                                <strong>D.</strong>
                                <img
                                  src={Data[count - 1].pilihan_d_gambar}
                                  alt=""
                                  className="w-2/5 xl:w-10/12"
                                  onClick={() => handleSelect("D")}
                                />
                              </div>
                              <div>
                                <strong>E.</strong>
                                <img
                                  src={Data[count - 1].pilihan_e_gambar}
                                  alt=""
                                  className="w-2/5 xl:w-10/12"
                                  onClick={() => handleSelect("E")}
                                />
                              </div>
                            </div>
                          ) : (
                            <div className="pb-10">
                              <div
                                className="w-full p-2 mb-2 border border-2 rounded-lg hover:bg-blue-400 cursor-pointer"
                                style={{ fontSize: "12px" }}
                                onClick={() => handleSelect("A")}
                              >
                                <strong>A.</strong>{" "}
                                <Latex>{Data[count - 1].pilihan_a_text}</Latex>
                              </div>
                              <div
                                className="w-full p-2 mb-2 border border-2 rounded-lg rounded-lg hover:bg-blue-400 cursor-pointer"
                                style={{ fontSize: "12px" }}
                                onClick={() => handleSelect("B")}
                              >
                                <strong>B.</strong>{" "}
                                <Latex>{Data[count - 1].pilihan_b_text}</Latex>
                              </div>
                              <div
                                className="w-full p-2 mb-2 border border-2 rounded-lg rounded-lg hover:bg-blue-400 cursor-pointer"
                                style={{ fontSize: "12px" }}
                                onClick={() => handleSelect("C")}
                              >
                                <strong>C.</strong>{" "}
                                <Latex>{Data[count - 1].pilihan_c_text}</Latex>
                              </div>
                              <div
                                className="w-full p-2 mb-2 border border-2 rounded-lg rounded-lg hover:bg-blue-400 cursor-pointer"
                                style={{ fontSize: "12px" }}
                                onClick={() => handleSelect("D")}
                              >
                                <strong>D.</strong>{" "}
                                <Latex>{Data[count - 1].pilihan_d_text}</Latex>
                              </div>
                              <div
                                className="w-full p-2 mb-2 border border-2 rounded-lg rounded-lg hover:bg-blue-400 cursor-pointer"
                                style={{ fontSize: "12px" }}
                                onClick={() => handleSelect("E")}
                              >
                                <strong>E.</strong>{" "}
                                <Latex>{Data[count - 1].pilihan_e_text}</Latex>
                              </div>
                            </div>
                          )}
                        </>
                      )}
                    </>
                  )}
                  <div className="mt-5">
                    <h1 className="text-bold text-white">{`Jawaban: ${
                      no[count - 1].select
                    }`}</h1>
                  </div>
                  <div className="flex justify-end mt-5">
                    <div
                      className="p-2 bg-blue-300 rounded-full text-orange-600 hover:cursor-pointer hover:scale-105 hover:drop-shadow-xl"
                      onClick={handleBack}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="white"
                        className="bi bi-caret-left-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
                      </svg>
                    </div>

                    <div
                      className="p-2 bg-blue-300 rounded-full text-orange-600 mx-4 hover:cursor-pointer hover:scale-105 hover:drop-shadow-xl "
                      onClick={handleNext}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="white"
                        className="bi bi-caret-right-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                      </svg>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex justify-center">
                  <div className="w-full animate-pulse bg-slate h-96 bg-slate-200"></div>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="flex justify-center">
          <div className="w-11/12 xl:w-72">
            {Loading ? (
              <button className="drop-shadow-xl text-lg w-full py-2 bg-yellow-200 hover:bg-red-500 my-2 hover:text-white font-semibold rounded-lg">
                Loading ...
              </button>
            ) : (
              <button
                className="drop-shadow-xl text-lg w-full py-2 bg-blue-600 hover:bg-red-500 mt-5 mb-2 text-white font-semibold rounded-lg"
                onClick={handleSubmit}
              >
                Submit
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default TestPageQuiz;
