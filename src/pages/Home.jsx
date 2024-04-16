import { Helmet } from "react-helmet-async";
import Cards from "../components/Cards/Cards";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const data = useLoaderData()
  return (
    <>
      <Helmet>
        <title>Crestline | Home</title>
      </Helmet>

      <Cards data={data}/>

    </>
  );
};

export default Home;