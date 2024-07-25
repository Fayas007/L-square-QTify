import React from "react";

import {Swiper,SwiperSlide} from 'swiper/react';
import { Navigation, Pagination ,Scrollbar, A11y  } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import MusicCard from "../Card/Card";
// import styles from "./Carousel.module.css"


const Carousel = ({Albums}) => {

  console.log("carousel called",Albums)
  return (
    <Swiper
     style={{backgroundColor:"black"}} 
    modules={[Navigation, Pagination, Scrollbar, A11y ]}
    spaceBetween={20}
    slidesPerView={7}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    >
      {Albums.map((ele)=><SwiperSlide><MusicCard obj={ele}/></SwiperSlide>)}
    </Swiper>
  );
};

export default Carousel;