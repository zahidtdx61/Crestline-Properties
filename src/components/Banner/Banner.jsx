
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './swiper.css';

import { Pagination, Navigation } from 'swiper/modules';

const Banner = () => {
  return (
    <div className='max-w-screen-lg mx-auto my-8 h-[500px] rounded-lg overflow-hidden'>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src='https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/></SwiperSlide>
        <SwiperSlide><img src='https://i.postimg.cc/tTM5mggq/9.jpg'/></SwiperSlide>
        <SwiperSlide><img src='https://i.postimg.cc/QxBPD2LY/2.jpg'/></SwiperSlide>
        <SwiperSlide><img src='https://i.postimg.cc/vm8kJcGf/6.jpg'/></SwiperSlide>
        <SwiperSlide><img src='https://i.postimg.cc/YCzTD1Bt/8.jpg'/></SwiperSlide>
        <SwiperSlide><img src='https://i.postimg.cc/sgjh7rVw/5.jpg'/></SwiperSlide>
        <SwiperSlide><img src='https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/></SwiperSlide>
        <SwiperSlide><img src='https://i.postimg.cc/MpqFBvMN/7.jpg'/></SwiperSlide>
        <SwiperSlide><img src='https://i.postimg.cc/qB9fNJGH/3.jpg'/></SwiperSlide>
      </Swiper>

      
    </div>
  );
}

export default Banner