import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import rpl from "../../assets/rpl.jpg";
import mmd from "../../assets/mmd.jpg";
import bdp from "../../assets/bdp.jpg";
import otkp from "../../assets/otkp.jpg";
import "./Carousel.css";

// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper/core";

// install Swiper modules
SwiperCore.use([Pagination]);
SwiperCore.use([Autoplay]);

export default function Carousel() {
  return (
    <>
      <Swiper
        slidesPerView={3.5}
        spaceBetween={40}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 1500,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={rpl} alt="not found" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={mmd} alt="not found" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={otkp} alt="not found" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={bdp} alt="not found" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
