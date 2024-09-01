const ComponentSoal = ({ input }) => {
  const Data = input;

  return (
    <div>
      <div className="p-5 xl:p-2 mb-1 hover:scale-105 text-center hover:drop-shadow-xl font-semibold rounded-lg hover:bg-blue-600 cursor-pointer">
        {Data.no_soal}
      </div>
    </div>
  );
};
export default ComponentSoal;
