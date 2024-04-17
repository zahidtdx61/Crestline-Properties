import { ClockLoader } from "react-spinners";

const Loader = () => {
  return (
    <div
      className={`min-h-[calc(100vh-80px)] flex flex-col  justify-center  items-center `}
    >
      <ClockLoader size={150} color="#1493ff" />
    </div>
  );
};

export default Loader;
