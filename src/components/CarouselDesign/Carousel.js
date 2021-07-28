import React from "react";
import SwiperCore, { EffectFade, Navigation, Pagination } from "swiper/core";
import { Swiper } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/effect-fade/effect-fade.min.css"
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/pagination/pagination.min.css"


import "./CarouselStyles.css";

// install Swiper modules
SwiperCore.use([EffectFade, Navigation, Pagination]);

const Carousel = ({children}) => {
  return (
    <Swiper
      effect={"fade"}
      spaceBetween={30}
      draggable={false}
      mousewheel={{
        invert: false
      }}
      loop={true}
      pagination={{ el: ".article_slider__pagination", clickable: true }}
      className="article_slider"
    >
    </Swiper>
  );
};

export default Carousel;
