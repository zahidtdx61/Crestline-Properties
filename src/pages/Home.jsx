import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Crestline | Home</title>
      </Helmet>
      <div className="bg-green-500">Home</div>
    </>
  );
};

export default Home;