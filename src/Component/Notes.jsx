const Notes = () => {
  const data = [
    {
      id: 1,
      nama: "AFFAN REFKA RIFIANSYAH & WINIKE NURHALIKA",
      desk: "Konsultasi terkait peran yang tepat berdasarkan minat dan bakat dominan.",
      hastag: "#PejuangHI #PejuangTeknikKebumian",
      gambar: "./review.jpg",
    },
  ];
  return (
    <div className="mx-5 xl:hidden">
      <h1 className="text-sm font-semibold text-blue-700">Aktivitas</h1>
      <div className="columns-1 ">
        {data.map((value) => (
          <div
            className=" bg-blue-200 rounded-lg pb-5 px-1 pt-1 mb-5"
            key={value.id}
          >
            <img src={value.gambar} className="w-full" />
            <h1 className="font-semibold px-2 pt-2">{value.nama}</h1>
            <p
              className="px-2 pt-1 text-sm text-justify"
              style={{ fontSize: "12px" }}
            >
              {value.desk}
            </p>
            <p className="px-2 pt-1 text-sm" style={{ fontSize: "12px" }}>
              {value.hastag}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Notes;
