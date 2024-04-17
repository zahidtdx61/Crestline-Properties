import { Helmet } from "react-helmet-async";
import { BsEye } from "react-icons/bs";
import { useLoaderData, useParams } from "react-router-dom";
import PropertyBanner from "../components/PropertyBanner/PropertyBanner";
import { getRandomInteger } from "../utils";
import { RiBuilding3Line } from "react-icons/ri";

const ViewDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();

  const property = data.find((property) => property.id === parseInt(id));
  const {
    estate_title,
    status,
    segment_name,
    image,
    description,
    detailed_information,
    price,
    location,
    area,
    facilities,
  } = property;
  const viewCount = getRandomInteger(500, 1800);
  return (
    <>
      <Helmet>
        <title>Crestline | View Details</title>
      </Helmet>
      <div className="mt-2 md:mt-4 lg:mt-8 max-w-screen-xl mx-auto font-mulish p-4">
        <div className="flex justify-between flex-col lg:flex-row gap-4">
          <h1 className="text-4xl w-fit font-mulish font-semibold text-slate-700">
            {estate_title}
          </h1>
          <div className="font-bold text-2xl text-slate-600">
            Price: <span className="font-semibold text-slate-600">{price}</span>
          </div>
        </div>

        <div className="mt-4 flex gap-3">
          <button className="capitalize px-3 py-1 text-sm font-medium bg-zinc-200 rounded hover:bg-opacity-60">
            {status}
          </button>
          <button className="capitalize px-3 py-1 text-sm font-medium bg-zinc-200 rounded hover:bg-opacity-60 ml-2">
            {segment_name}
          </button>

          <div className="flex gap-1 items-center text-slate-700">
            <BsEye size={18} /> {viewCount}
          </div>

          <div className="flex gap-1 items-center text-slate-700">
            <RiBuilding3Line size={18} /> {area} ft<sup>2</sup>
          </div>
        </div>

        <div className="capitalize w-fit px-3 py-1 text-sm font-medium bg-zinc-200 rounded hover:bg-opacity-60 mt-4">
          {location}
        </div>

        <PropertyBanner image={image} />

        <div className=" mt-16">
          <h2 className="text-2xl font-mulish font-semibold text-slate-700">
            Description
          </h2>
          <p className="font-mulish text-lg text-slate-600 mt-2">
            {description}
          </p>
          <p className="font-mulish text-lg text-slate-600">
            {detailed_information}
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-mulish font-semibold text-slate-700 mt-8">
            Facilities
          </h2>
          <div className="flex flex-wrap gap-2 mt-2">
            {facilities.map((facility, index) => (
              <div
                key={index}
                className="capitalize px-3 py-1 text-sm font-medium bg-zinc-200 rounded hover:bg-opacity-60"
              >
                {facility}
              </div>
            ))}
          </div>
        </div>


      </div>
    </>
  );
};

export default ViewDetails;
