import { useLocation, useNavigate } from "react-router-dom";

const CatatanBelajar = () => {
  const navigate = useNavigate();
  const transitLink = JSON.parse(localStorage.getItem("user"));
  const data = [
    {
      id: 1,
      nama: "PU",
      link: transitLink.pu,
      color: "red",
    },
    {
      id: 2,
      nama: "PM",
      link: transitLink.pm,
      color: "blue",
    },
    {
      id: 3,
      nama: "PK",
      link: transitLink.pk,
      color: "yellow",
    },
    {
      id: 4,
      nama: "PBM",
      link: transitLink.pbm,
      color: "grey",
    },
    {
      id: 5,
      nama: "PPU",
      link: transitLink.ppu,
      color: "orange",
    },
    {
      id: 6,
      nama: "LBING",
      link: transitLink.lbing,
      color: "black",
    },
    {
      id: 7,
      nama: "LBIND",
      link: transitLink.lbind,
      color: "green",
    },
  ];
  return (
    <div className="p-5">
      <h1 className="text-sm font-semibold text-blue-700">Catatan Belajar</h1>
      <div className="columns-4 justify-center gap-1 p-2 rounded-lg">
        {data.map((value) => (
          <div className="flex justify-center" key={value.id}>
            {value.link ? (
              <a href={value.link}>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="60"
                    height="60"
                    fill={value.color}
                    className="bi bi-folder-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.825a2 2 0 0 1-1.991-1.819l-.637-7a2 2 0 0 1 .342-1.31L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3m-8.322.12q.322-.119.684-.12h5.396l-.707-.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981z" />
                  </svg>
                  <p className="text-center" style={{ fontSize: "12px" }}>
                    {value.nama}
                  </p>
                </div>
              </a>
            ) : (
              <div onClick={() => navigate("/no-catatan")}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="60"
                  fill={value.color}
                  className="bi bi-folder-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.825a2 2 0 0 1-1.991-1.819l-.637-7a2 2 0 0 1 .342-1.31L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3m-8.322.12q.322-.119.684-.12h5.396l-.707-.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981z" />
                </svg>
                <p className="text-center text-blue-800 text-sm">
                  {value.nama}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
export default CatatanBelajar;
