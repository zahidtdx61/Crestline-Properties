import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./swiper.css";

import { Navigation, Pagination } from "swiper/modules";
import Slide from "./Slide";

const bannerImages = [
  "https://i.postimg.cc/MpqFBvMN/7.jpg",
  "https://i.postimg.cc/tTM5mggq/9.jpg",
  "https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://i.postimg.cc/QxBPD2LY/2.jpg",
  "https://i.postimg.cc/vm8kJcGf/6.jpg",
  "https://i.postimg.cc/YCzTD1Bt/8.jpg",
  "https://i.postimg.cc/sgjh7rVw/5.jpg",
  "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://i.postimg.cc/qB9fNJGH/3.jpg",
];

const Banner = () => {
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
            <Slide image={image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
