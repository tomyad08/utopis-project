import { useEffect, useState } from "react";

const TestQuiz = () => {
  // const [data, setData] = useState()
  // const [count, senCount] = useState(0)

  // useEffect(()=>{
  //     fetch("https://script.google.com/macros/s/AKfycbwhXcnhlqPJzMWa3fLe014zBgQyipsYeSyPPxEmDgSrnFwjpi4XZc8ZaB5tmJrH8sQ/exec", {
  //         method: "GET",
  //       })
  //         .then((res) => res.json())
  //         .then((data) => {
  //           setData(data);
  //         })
  // },[])
  const data = {
    text: "sebuah benda dengan massa 5kg berhasil",
    pernyataan1: "aku adalah manusia.",
    pernyataan2: "aku bukan manusia.",
    pernyataan3: "aku adalah kursi.",
    pernyataan4: "aku adalah buaya.",
    pernyataan5: "aku adalah suara.",
    jawaban: "True,True,False,True,False",
  };

  return (
    <div>
      <h1>{data.text}</h1>
      <table>
        <thead>
          <tr>
            <th className="text-sm">Pernyataan</th>
            <th className="text-sm">Memperlemah</th>
            <th className="text-sm">Tidak Memperlemah</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-center">{data.pernyataan1}</td>
            <td>
              <div className="flex justify-center">
                <input type="radio" name="sd" />
              </div>
            </td>
            <td>
              <div className="flex justify-center">
                <input type="radio" name="sd" />
              </div>
            </td>
          </tr>
          <tr>
            <td className="text-center">{data.pernyataan2}</td>
            <td>
              <div className="flex justify-center">
                <input type="radio" name="sd" />
              </div>
            </td>
            <td>
              <div className="flex justify-center">
                <input type="radio" name="sd" />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default TestQuiz;
