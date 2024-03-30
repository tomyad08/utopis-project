import FormLogin from "../Component/LoginForm";

const LoginPage = () => {
  return (
    <div className="bg-white h-screen flex justify-center items-center">
      <div className="w-4/5">
        <h1 className="font-bold text-2xl text-blue-600">UTOPIS PROJECT</h1>
        <p className="text-sm mb-3">
          Membangun peradaban manusia ideal melalui penalaran logika dan peran
          yang tepat.
        </p>
        <FormLogin />
      </div>
    </div>
  );
};
export default LoginPage;
