import React from "react";
import SwiperCore, { EffectFade, Navigation, Pagination } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/effect-fade/effect-fade.min.css"
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/pagination/pagination.min.css"

import CarouselItem from "./CarouselItem";

// install Swiper modules
SwiperCore.use([EffectFade, Navigation, Pagination]);

const CarouselBody = () => {
  return (
    <div className="carouselBody">
        <Swiper
        effect={"fade"}
        spaceBetween={30}
        draggable={false}
        mousewheel={{
            invert: false,
        }}
        loop = {true}
        pagination={{ el: '.article_slider__pagination', clickable: true}}
        className="article_slider"
        
      >
        <SwiperSlide className="article_slider__item">
          <CarouselItem
            imageLink={`./assets/images/gameplay.jpeg`}
            date={`Just in`}
            title={`Lorem Ipsum Dolar`}
            textContent={`In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.`}
            linkName={`READ MORE`}
          />
          </SwiperSlide>
          <SwiperSlide className="article_slider__item">
          <CarouselItem
            imageLink={`./assets/images/splash.jpg`}
            date={`1 Day Ago`}
            title={`Lorem Ipsum Dolar`}
            textContent={`In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.`}
            linkName={`READ MORE`}
          />
          </SwiperSlide>
          <SwiperSlide className="article_slider__item">
            <CarouselItem
                imageLink={`./assets/images/d_wade.jpg`}
                date={`2 Days ago`}
                title={`Lorem Ipsum Dolar Lorem Dolar`}
                textContent={`In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.`}
                linkName={`READ MORE`}
            />
          </SwiperSlide>
        <div className="article_slider__pagination" />
        <span className="carousel-brand"><img src="./assets/images/chelsea__logo.png" alt="brand"/></span>
      </Swiper>
        
      </div>
  );
};

export default CarouselBody;
