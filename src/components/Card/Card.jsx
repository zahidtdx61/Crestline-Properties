import { Divider, IconButton, Tooltip } from "@mui/material";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaRegStar, FaStar } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { RiBuilding3Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useWish from "../../hooks/useWish";

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

  const [bookmark, setBookmark] = useState(false);
  const { markWishlist, removeFromWishlist, wishlist } = useWish();
  const { user } = useAuth();

  const handleWishlist = () => {
    if (!user) {
      toast.error("Please login to add to wishlist");
      return;
    }
    if (bookmark) {
      removeFromWishlist(user.uid, data);
    } else {
      markWishlist(user.uid, data);
    }
    setBookmark((prev) => !prev);
  };

  useEffect(() => {
    // const data = JSON.parse(localStorage.getItem(user?.uid));
    if (wishlist) {
      const found = wishlist.find((item) => item.id === id);
      if (found) {
        // console.log("found", found);
        setBookmark(true);
      }else{
        setBookmark(false);
      }
    }
  }, [user?.uid, id, wishlist]);

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

        <div className="flex justify-end items-center gap-1">
          <div>
            <RiBuilding3Line size={20} />
          </div>

          <div>
            {area}{" "}
            <span className="text-slate-600">
              ft<sup>2</sup>
            </span>
          </div>
        </div>
      </div>

      {/* <div
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-anchor={`#card-anchor-${id}`}
        className="flex justify-between overflow-hidden"
      >
        <button className="bg-blue-700 hover:bg-blue-500 text-zinc-50 font-bold py-2 px-4 rounded mt-4">
          View Property
        </button>
        <button className="bg-red-700 hover:bg-red-500 text-zinc-50 font-bold py-2 px-4 rounded mt-4 ml-2">
          Add to Wishlist
        </button>
      </div> */}

      <div
        data-aos="fade-up"
        data-aos-duration="1500"
        // data-aos-anchor={`#card-anchor-${id}`}
        data-aos-anchor-placement="top-bottom"
        className="flex justify-between items-center overflow-hidden"
      >
        <div className="h-fit w-fit mt-4">
          <Tooltip title={`${bookmark ? "Already Added" : "Add to Wishlist"}`}>
            <IconButton onClick={handleWishlist}>
              {!bookmark ? <FaRegStar size={30} /> : <FaStar size={30} />}
            </IconButton>
          </Tooltip>
        </div>

        <button className="bg-blue-700 hover:bg-blue-500 text-zinc-50 font-bold py-2 px-4 rounded mt-4">
          <Link to={`/view-details/${id}`}>View Property</Link>
        </button>
      </div>

      <div
        id={`card-anchor-${id}`}
        className="card-anchor absolute left-0 bottom-[10%]"
      ></div>
    </div>
  );
};

Card.propTypes = {
  data: PropTypes.object,
};

export default Card;
