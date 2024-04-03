const CatatanBelajar = () => {
  const data = [
    {
      id: 1,
      nama: "PU",
      link: "",
      color: "red",
    },
    {
      id: 2,
      nama: "PM",
      link: "",
      color: "blue",
    },
    {
      id: 3,
      nama: "PK",
      link: "",
      color: "yellow",
    },
    {
      id: 4,
      nama: "PBM",
      link: "",
      color: "grey",
    },
    {
      id: 5,
      nama: "PPU",
      link: "",
      color: "orange",
    },
    {
      id: 6,
      nama: "LBING",
      link: "",
      color: "black",
    },
    {
      id: 7,
      nama: "LBIND",
      link: "",
      color: "green",
    },
  ];
  return (
    <div className="p-5">
      <h1 className="text-sm font-semibold text-blue-700">Catatan Belajar</h1>
      <div className="columns-4 md:columns-7 justify-center gap-1 p-2 bg-blue-100 rounded-lg">
        {data.map((value) => (
          <div className="flex justify-center">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="70"
                fill={value.color}
                class="bi bi-folder-fill"
                viewBox="0 0 16 16"
              >
                <path d="M9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.825a2 2 0 0 1-1.991-1.819l-.637-7a2 2 0 0 1 .342-1.31L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3m-8.322.12q.322-.119.684-.12h5.396l-.707-.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981z" />
              </svg>
              <p className="text-center" style={{ fontSize: "12px" }}>
                {value.nama}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default CatatanBelajar;
