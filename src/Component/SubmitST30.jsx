import { useState } from "react";

const SubmitST30 = () => {
  const [file, setFile] = useState(null);
  const [filename, setFilename] = useState("");
  const [imgSrc, setImgSrc] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file) return;

    const fr = new FileReader();
    fr.readAsArrayBuffer(file);
    fr.onload = (f) => {
      const url =
        "https://script.google.com/macros/s/AKfycbyMap0M_22Kg0jeWPxpedFYu9eJioZ-u1Y-kcsPjcct4qo2LJvOfJsw-98Qmg2igZvZfQ/exec";
      const qs = new URLSearchParams({
        filename: filename || file.name,
        mimeType: file.type,
      });

      fetch(`${url}?${qs}`, {
        method: "POST",

        body: JSON.stringify([...new Int8Array(f.target.result)]),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setImgSrc(
            `https://drive.google.com/thumbnail?id=${data.fileId}&sz=w1000`
          );
        })
        .catch((err) => console.error(err));
    };
  };

  return (
    <div className="w-3/4">
      <h1 className="text-sm font-semibold mb-5">
        Silahkan submit file hasil ST30 di bawah ini.
      </h1>
      <img src={imgSrc} alt="Uploaded" />
      <label className="font-semibold text-sm mt-5">Nama Lengkap</label>
      <input
        className="p-2 rounded-lg w-full background-white mb-3"
        type="text"
        name="filename"
        value={filename}
        onChange={(e) => setFilename(e.target.value)}
      />
      <label className="font-semibold text-sm">Input File</label>
      <div className="bg-white w-full rounded-xl">
        <input
          type="file"
          name="file"
          accept="application/pdf"
          className="p-2 rounded-lg w-full background-white"
          onChange={(e) => setFile(e.target.files[0])}
        />
      </div>
      <button
        className="p-2 rounded-lg bg-blue-700 text-white mt-5 w-full font-bold"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};
export default SubmitST30;
