import { ClockLoader } from "react-spinners";

const Loader = () => {
  return (
    <div
      className={`min-h-[calc(100vh-80px)] flex flex-col  justify-center  items-center `}
    >
      <ClockLoader size={50} color="#36d7b7" />
    </div>
  );
};

export default Loader;
