const Footer = () => {
  return (
    <div className="p-2 w-full bg-blue-500">
      <h1 className="text-center font-semibold text-white">@Utopis Project</h1>
      <div className="flex justify-center my-2">
        <div className="flex justify-center bg-blue-800 p-2 rounded-lg">
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

          <div className="font-semibold text-center text-white m-1">
            Contact Me
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
