import FormLogin from "../Component/LoginForm";
import TestMinatBakat from "../Component/TestMinatBakat";

const LoginPage = () => {
  return (
    <div className="bg-blue-100 h-screen flex justify-center items-center">
      <div className="w-3/5 xl:w-1/4 p-5">
        <div className="w-32 h-32 rounded-full left-10 bg-blue-800  drop-shadow-xl fixed top-20"></div>
        <div className="w-10 h-10 rounded-full left-10 bg-blue-800 drop-shadow-xl fixed top-10"></div>
        <img
          src="./logo_cerdikia.PNG"
          alt="logo"
          className="w-24 bg-white px-3 py-1 rounded-xl border border-1 border-blue-500"
        />
        {/* <h1 className="font-semibold text-xl xl:text-2xl text-white">
          Cerdikia
        </h1> */}
        <p
          className="mb-3 text-justify text-blue-800"
          style={{ fontSize: "12px" }}
        >
          Sukses Masuk Kampus Impian, Mulai dari Sini!
        </p>
        <FormLogin />

        <div className="w-52 h-52 rounded-full bg-blue-900 fixed drop-shadow-xl border-blue-800 border-2 bottom-5 right-10"></div>
      </div>
    </div>
  );
};
export default LoginPage;
