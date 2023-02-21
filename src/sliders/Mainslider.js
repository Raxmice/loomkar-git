import React from 'react'
import loomkarslider1 from './img/loomkar_slider1.webp'
import loomkarslider2 from './img/loomkar_slider2.webp'
import loomkarslider3 from './img/loomkar_slider3.webp'
import loomkarslider4 from './img/loomkar_slider4.webp'
import loomkarslider5 from './img/loomkar_slider5.webp'
import loomkarslider6 from './img/loomkar_slider6.webp'
import loomkarslider7 from './img/loomkar_slider7.webp'
import loomkarslider8 from './img/loomkar_slider8.webp'
import loomkarslider9 from './img/loomkar_slider9.webp'



// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";
import "./slider.js";

// import required modules
import {Autoplay, Pagination, Navigation } from "swiper";

export default function Mainslider() {
  return (
    <div className='sec-b-space'>
    <Swiper
    pagination={{
      dynamicBullets: true,
    }}
    autoplay={{
      delay: 2500,
      disableOnInteraction: false,
    }}
    loop={true}
    loopFillGroupWithBlank={true}
    navigation={true}
    modules={[Autoplay, Navigation, Pagination]}
    className="mySwiper"
  >
    <SwiperSlide><img className='w-100' src={loomkarslider2} alt='loomkar_slider1' /></SwiperSlide>
    <SwiperSlide><img className='w-100' src={loomkarslider1} alt='loomkar_slider2' /></SwiperSlide>
    <SwiperSlide><img className='w-100' src={loomkarslider3} alt='loomkar_slider3' /></SwiperSlide>
    <SwiperSlide><img className='w-100' src={loomkarslider4} alt='loomkar_slider4' /></SwiperSlide>
    <SwiperSlide><img className='w-100' src={loomkarslider5} alt='loomkar_slider5' /></SwiperSlide>
    <SwiperSlide><img className='w-100' src={loomkarslider6} alt='loomkar_slider6' /></SwiperSlide>
    <SwiperSlide><img className='w-100' src={loomkarslider7} alt='loomkar_slider7' /></SwiperSlide>
    <SwiperSlide><img className='w-100' src={loomkarslider8} alt='loomkar_slider8' /></SwiperSlide>
    <SwiperSlide><img className='w-100' src={loomkarslider9} alt='loomkar_slider9' /></SwiperSlide>
  </Swiper>

    </div>
  )
}
