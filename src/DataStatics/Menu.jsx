const { ENPOINTS } = require("./endpoints");

exports.Mapel = [
  {
    id: 1,
    inisial: "PU",
    picture: "./pu.png",
    mapel: "Penalaran Umum",
    deskripsi:
      "Kemampuan memecahkan masalah berdasarkan valid dan tidak valid.",
    link: ENPOINTS.PU,
  },
  {
    id: 2,
    inisial: "PM",
    picture: "./pm.png",
    mapel: "Penalaran Matematika",
    deskripsi:
      "Kemampuan memecahkan masalah berdasarkan pemodelan matematis sederhana.",
    link: ENPOINTS.PM,
  },
  {
    id: 3,
    inisial: "PK",
    mapel: "Pengetahuan Kuantitatif",
    picture: "./pk.png",
    deskripsi: "Kemampuan memecahkan masalah matematis sederhana.",
    link: ENPOINTS.PK,
  },
  {
    id: 4,
    inisial: "PPU",
    picture: "./ppu.png",
    mapel: "Pengetahuan & Pemahaman Umum",
    deskripsi:
      "Kemampuan untuk mengomunikasikan ide melalui ketrampilan bahasa.",
    link: ENPOINTS.PPU,
  },
  {
    id: 5,
    inisial: "PBM",
    mapel: "Pemahaman Bacaan & Menulis",
    picture: "./pbm.png",
    deskripsi: "Kemampuan dasar untuk memahami bacaan dan menulis.",
    link: ENPOINTS.PBM,
  },
  {
    id: 6,
    inisial: "LBIND",
    picture: "./lbin.png",
    mapel: "Literasi Bahasa Indonesia",
    deskripsi:
      "Kemampuan untuk memahami, menggunakan, mengevaluasi, dan berinteraksi dalam bahasa indonesia.",
    link: ENPOINTS.LBIND,
  },
  {
    id: 7,
    inisial: "LBING",
    picture: "./lbin.png",
    mapel: "Literasi Bahasa Inggris",
    deskripsi:
      "Kemampuan untuk memahami, menggunakan, mengevaluasi, dan berinteraksi dalam bahasa inggris.",
    link: ENPOINTS.LBING,
  },
];
