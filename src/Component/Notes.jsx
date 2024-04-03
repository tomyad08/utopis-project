const Notes = () => {
  const data = [
    {
      id: 1,
      nama: "Hani Aliyah",
      desk: "Seenggaknya saya tau kalau saya ternyata punya bakat anlasis, resoterer, dan juga caretaker. Insya Allah makin yakin jadi Dokter.",
      hastag: "#PejuangKedokteran #UI #ITB",
      gambar: "./karantina.jpg",
    },
    {
      id: 2,
      nama: "Hani Aliyah",
      desk: "Seenggaknya saya tau kalau saya ternyata punya bakat anlasis, resoterer, dan juga caretaker. Insya Allah makin yakin jadi Dokter.",
      hastag: "#PejuangKedokteran #UI #ITB",
      gambar: "./karantina.jpg",
    },
    {
      id: 3,
      nama: "Hani Aliyah",
      desk: "Seenggaknya saya tau kalau saya ternyata punya bakat anlasis, resoterer, dan juga caretaker. Insya Allah makin yakin jadi Dokter.",
      hastag: "#PejuangKedokteran #UI #ITB",
      gambar: "./karantina.jpg",
    },
    {
      id: 4,
      nama: "Hani Aliyah",
      desk: "Seenggaknya saya tau kalau saya ternyata punya bakat anlasis, resoterer, dan juga caretaker. Insya Allah makin yakin jadi Dokter.",
      hastag: "#PejuangKedokteran #UI #ITB",
      gambar: "./karantina.jpg",
    },
    {
      id: 5,
      nama: "Hani Aliyah",
      desk: "Seenggaknya saya tau kalau saya ternyata punya bakat anlasis, resoterer, dan juga caretaker. Insya Allah makin yakin jadi Dokter.",
      hastag: "#PejuangKedokteran #UI #ITB",
      gambar: "./karantina.jpg",
    },
    {
      id: 6,
      nama: "Hani Aliyah",
      desk: "Seenggaknya saya tau kalau saya ternyata punya bakat anlasis, resoterer, dan juga caretaker. Insya Allah makin yakin jadi Dokter.",
      hastag: "#PejuangKedokteran #UI #ITB",
      gambar: "./karantina.jpg",
    },
  ];
  return (
    <div className="mx-5">
      <h1 className="text-sm font-semibold text-blue-700">Aktivitas</h1>
      <div className="columns-2 xl:columns-6">
        {data.map((value) => (
          <div className=" bg-blue-200 rounded-lg pb-5 px-1 pt-1 mb-5">
            <img src={value.gambar} className="w-full" />
            <h1 className="font-semibold px-2 pt-2">{value.nama}</h1>
            <p className="px-2 pt-1 text-sm">{value.desk}</p>
            <p className="px-2 pt-1 text-sm">{value.hastag}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Notes;
