import { Divider } from "@mui/material";
import PropTypes from "prop-types";
import { IoLocationOutline } from "react-icons/io5";

const Card = ({ data }) => {
  const {
    id,
    estate_title,
    status,
    description,
    image,
    location,
    facilities,
    price,
    area,
  } = data;

  return (
    <div
      data-aos="zoom-in-up"
      data-aos-duration="1000"
      className="w-full p-4 rounded-md bg-white flex flex-col relative"
    >
      <div className="w-full rounded-md h-[250px] overflow-hidden relative">
        <img
          src={image}
          className="w-full h-full object-cover object-center hover:scale-105 duration-1000"
        />
        <div
          data-aos="fade-right"
          data-aos-delay="1000"
          data-aos-duration="1000"
          className="capitalize font-semibold text-slate-600 bg-zinc-300 absolute top-4 -left-1 px-5 py-1 rounded text-sm"
        >
          {status}
        </div>
      </div>

      <div className="mt-4 flex items-center gap-2">
        <IoLocationOutline size={20} /> <p>{location}</p>
      </div>
      <div className="font-mulish font-semibold text-xl mt-2">
        {estate_title}
      </div>
      <div className="font-mulish font-medium text-sm my-4 text-slate-600 flex-1">
        {description}
      </div>
      <Divider />
      <div>
        <span className="font-semibold font-lexend my-2 tracking-tight">
          Facilities:{" "}
        </span>
        {facilities.map((facility, index) => (
          <span
            key={index}
            className="text-slate-600 text-sm font-mulish capitalize"
          >
            {facility}
            {index === facilities.length - 1 ? "" : ", "}
          </span>
        ))}
      </div>
      <Divider />
      <div className="font-mulish flex items-center justify-between mt-4">
        <div className="font-medium text-xl">{price}</div>
        <div>
          {area}{" "}
          <span className="text-slate-600">
            ft<sup>2</sup>
          </span>
        </div>
      </div>

      <div
        data-aos="fade-left"
        data-aos-duration="1500"
        data-aos-anchor={`#card-anchor-${id}`}
        className="flex justify-end overflow-hidden"
      >
        <button className="bg-blue-700 hover:bg-blue-500 text-zinc-50 font-bold py-2 px-4 rounded mt-4">
          View Property
        </button>
      </div>

      <div id={`card-anchor-${id}`} className="card-anchor absolute left-0 bottom-[15%]">

      </div>
    </div>
  );
};

Card.propTypes = {
  data: PropTypes.object,
};

export default Card;
