import React, { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import $ from 'jquery';
import ImgCard from './ImgCard';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function ProductSlider(props) {
  const [product, setProduct]=useState([]);

      $(document).ready(function() {
        const product2 = props.allimg.imgs;
        if(product2){
          setProduct(product2)
        }
      });
  
      
      
      
  return (
    <div>
    <Swiper
    autoplay={{
      delay: 2500,
      disableOnInteraction: false,
    }}
    loop={true}
    loopFillGroupWithBlank={true}
    slidesPerView={4}
    spaceBetween={15}
    // navigation={true}
    modules={[Navigation, Pagination ]}
    className="mySwiper"
    >
    {
        product.map((element)=>{
          return <SwiperSlide key={element}>
            <ImgCard img={`https://loomkar-9zv7275zh-raxmice.vercel.app/img/products/${element}`} setImg={props.setImg}/>
          </SwiperSlide>
        })
      }
</Swiper>
    </div>
  )
}
