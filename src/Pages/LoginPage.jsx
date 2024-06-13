import FormLogin from "../Component/LoginForm";
import TestMinatBakat from "../Component/TestMinatBakat";

const LoginPage = () => {
  return (
    <div className="bg-blue-100 h-screen flex justify-center items-center">
      <div className="w-4/5 xl:w-1/4 p-5 bg-blue-800  rounded-lg border border-2 border-white">
        <div className="w-32 h-32 rounded-full left-10 bg-blue-800 fixed top-20"></div>
        <div className="w-10 h-10 rounded-full left-10 bg-blue-800 fixed top-10"></div>
        <h1 className="font-semibold text-xl xl:text-2xl text-white">
          UTOPIS PROJECT
        </h1>
        <p
          className="mb-3 text-justify text-white"
          style={{ fontSize: "12px" }}
        >
          Membangun peradaban manusia ideal melalui penalaran logika dan peran
          yang tepat.
        </p>
        <FormLogin />

        <div className="w-52 h-52 rounded-full bg-blue-900 fixed bottom-5 right-10"></div>
      </div>
    </div>
  );
};
export default LoginPage;
