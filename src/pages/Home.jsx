import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner/Banner";
import Cards from "../components/Cards/Cards";

const Home = () => {
  const data = useLoaderData();
  return (
    <>
      <Helmet>
        <title>Crestline | Home</title>
      </Helmet>
      <Banner />
      <Cards data={data} />
    </>
  );
};

export default Home;
