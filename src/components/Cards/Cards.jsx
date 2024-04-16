import PropTypes from "prop-types";
import Card from "../Card/Card";

const Cards = ({ data }) => {
  return (
    <div className="w-[95%]  lg:max-w-screen-xl mx-auto bg-zinc-100  rounded-lg  mt-12 mb-8 p-2 md:p-4 lg:p-10">
      <h1 className="mt-4 font-mulish font-semibold text-4xl lg:text-5xl text-center lg:text-left w-full lg:w-[450px] mb-8">
        Our choice of popular <span className="font-bold">real estate</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-full w-full gap-4">
        {data.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

Cards.propTypes = {
  data: PropTypes.array,
};

export default Cards;
