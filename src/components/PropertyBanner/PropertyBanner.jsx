import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../Banner/swiper.css";

import { Navigation, Pagination } from "swiper/modules";

import PropTypes from "prop-types";

const PropertyBanner = ({ image }) => {
  let bannerImages = [];
  bannerImages.push(image);
  bannerImages = [
    ...bannerImages,
    "https://i.postimg.cc/QxBPD2LY/2.jpg",
    "https://i.postimg.cc/2jqRjbhx/1.jpg",
    "https://i.postimg.cc/qB9fNJGH/3.jpg",
    "https://i.postimg.cc/MpqFBvMN/7.jpg",
    "https://i.postimg.cc/y84fHWyW/4.jpg",
  ];
  
  return (
    <div className="w-[98%] lg:max-w-screen-lg mx-auto mt-6 mb-10 h-[350px] md:h-[550px] lg:h-[600px] rounded-lg overflow-hidden">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper rounded-lg overflow-hidden w-full h-full"
      >
        {bannerImages.map((image, index) => (
          <SwiperSlide key={index} className="w-full h-full">
            <img
              src={image}
              className="w-full h-full object-cover object-center"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

PropertyBanner.propTypes = {
  image: PropTypes.string,
};

export default PropertyBanner;
