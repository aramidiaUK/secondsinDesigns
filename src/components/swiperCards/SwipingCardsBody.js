import React from "react";
import SwiperCore, { EffectCoverflow, Pagination } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";

import SwipeSlideCardContent from "./SwipeSlideCardContent";

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination]);

const SwipingCardsBody = () => {
  return (
    <section className="floating-cards-component-body">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        loop = {true}
        pagination={false}
        className="mySwiper"
      >
        <SwiperSlide>
          <SwipeSlideCardContent
            icon={"ellipsis-vertical-outline"}
            text={
              "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available."
            }
            img={"./assets/images/chelsea__logo.png"}
            name={"James Jones"}
            title={"Creative Designer"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SwipeSlideCardContent
            icon={"ellipsis-vertical-outline"}
            text={
              "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available."
            }
            img={"./assets/images/gameplay.jpeg"}
            name={"James Jones"}
            title={"Creative Designer"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SwipeSlideCardContent
            icon={"ellipsis-vertical-outline"}
            text={
              "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available."
            }
            img={"./assets/images/splash.jpg"}
            name={"James Jones"}
            title={"Creative Designer"}
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default SwipingCardsBody;
