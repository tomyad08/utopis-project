const NoLink = () => {
  return (
    <div className="flex justify-center h-screen items-center">
      <div className="w-4/5 xl:w-4/12">
        <div className="flex justify-center">
          <img src="./apologize.jpg" alt="" className="w-full xl:w-8/12" />
        </div>
        <h1 className="text-xl font-semibold text-center">
          Mohon maap nih cuy, belum ada akses link testnya. Silahkan hubungi Kak
          Mila dulu ya.
        </h1>
        <a
          href={`https://wa.me/6285712413360?text=Hallo Kak Mila, saya *${
            JSON.parse(localStorage.getItem("user")).nama_lengkap
          }* dari *${
            JSON.parse(localStorage.getItem("user")).sekolah
          }*. Kak mau nanya, kenapa saya belum punya akses link minat-bakat ya?`}
        >
          <div className="flex justify-center bg-blue-600 p-2 rounded-lg mt-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="white"
              className="bi bi-headset"
              viewBox="0 0 16 16"
            >
              <path d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5" />
            </svg>

            <div className="font-semibold text-center text-white">
              Tanya Kak Mila
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};
export default NoLink;
