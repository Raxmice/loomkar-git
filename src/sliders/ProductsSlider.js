import React, { useEffect, useState } from 'react'
import ProductsCard from '../components/landingpage/ProductsCard';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";

export default function ProductsSlider() {

//     const products = [
//       {
//         "product_name":"Red Ajrakh Stole with Triangular Pattern",
//         "product_url":"Red-Ajrakh-Stole-with-Triangular-Pattern",
//         "description":"description...",
//         "vendor":"loomkar",
//         "product_type":"Ajrakh",
//         "cloth_type":"Ajrakh",
//         "avail":"sale",
//         "tag":"best saller",
//         "imgs":[
//             "stole/Red-Ajrakh-Stole-with-Triangular-Pattern/01.jpg",
//             "stole/Red-Ajrakh-Stole-with-Triangular-Pattern/02.jpg",
//             "stole/Red-Ajrakh-Stole-with-Triangular-Pattern/03.jpg",
//             "stole/Red-Ajrakh-Stole-with-Triangular-Pattern/04.jpg"
//           ],
//         "main_price":2200,
//         "discount":20,
//         "quantity":10,
//         "trending":"Bestseller",
//         "category":"stole"
//     },{
//       "product_name":"Red Ajrakh Stole with Triangular Pattern",
//       "product_url":"Red-Ajrakh-Stole-with-Triangular-Pattern",
//       "description":"description...",
//       "vendor":"loomkar",
//       "product_type":"Ajrakh",
//       "cloth_type":"Ajrakh",
//       "avail":"sale",
//       "tag":"best saller",
//       "imgs":[
//           "stole/Red-Ajrakh-Stole-with-Triangular-Pattern/01.jpg",
//           "stole/Red-Ajrakh-Stole-with-Triangular-Pattern/02.jpg",
//           "stole/Red-Ajrakh-Stole-with-Triangular-Pattern/03.jpg",
//           "stole/Red-Ajrakh-Stole-with-Triangular-Pattern/04.jpg"
//         ],
//       "main_price":2200,
//       "discount":20,
//       "quantity":10,
//       "trending":"Bestseller",
//       "category":"stole"
//   },
//   {
//     "product_name":"Red Ajrakh Stole with Triangular Pattern",
//     "product_url":"Red-Ajrakh-Stole-with-Triangular-Pattern",
//     "description":"description...",
//     "vendor":"loomkar",
//     "product_type":"Ajrakh",
//     "cloth_type":"Ajrakh",
//     "avail":"sale",
//     "tag":"best saller",
//     "imgs":[
//         "stole/Red-Ajrakh-Stole-with-Triangular-Pattern/01.jpg",
//         "stole/Red-Ajrakh-Stole-with-Triangular-Pattern/02.jpg",
//         "stole/Red-Ajrakh-Stole-with-Triangular-Pattern/03.jpg",
//         "stole/Red-Ajrakh-Stole-with-Triangular-Pattern/04.jpg"
//       ],
//     "main_price":2200,
//     "discount":20,
//     "quantity":10,
//     "trending":"Bestseller",
//     "category":"stole"
// },
// {
//   "product_name":"Red Ajrakh Stole with Triangular Pattern",
//   "product_url":"Red-Ajrakh-Stole-with-Triangular-Pattern",
//   "description":"description...",
//   "vendor":"loomkar",
//   "product_type":"Ajrakh",
//   "cloth_type":"Ajrakh",
//   "avail":"sale",
//   "tag":"best saller",
//   "imgs":[
//       "stole/Red-Ajrakh-Stole-with-Triangular-Pattern/01.jpg",
//       "stole/Red-Ajrakh-Stole-with-Triangular-Pattern/02.jpg",
//       "stole/Red-Ajrakh-Stole-with-Triangular-Pattern/03.jpg",
//       "stole/Red-Ajrakh-Stole-with-Triangular-Pattern/04.jpg"
//     ],
//   "main_price":2200,
//   "discount":20,
//   "quantity":10,
//   "trending":"Bestseller",
//   "category":"stole"
// },
// {
//   "product_name":"Red Ajrakh Stole with Triangular Pattern",
//   "product_url":"Red-Ajrakh-Stole-with-Triangular-Pattern",
//   "description":"description...",
//   "vendor":"loomkar",
//   "product_type":"Ajrakh",
//   "cloth_type":"Ajrakh",
//   "avail":"sale",
//   "tag":"best saller",
//   "imgs":[
//       "stole/Red-Ajrakh-Stole-with-Triangular-Pattern/01.jpg",
//       "stole/Red-Ajrakh-Stole-with-Triangular-Pattern/02.jpg",
//       "stole/Red-Ajrakh-Stole-with-Triangular-Pattern/03.jpg",
//       "stole/Red-Ajrakh-Stole-with-Triangular-Pattern/04.jpg"
//     ],
//   "main_price":2200,
//   "discount":20,
//   "quantity":10,
//   "trending":"Bestseller",
//   "category":"stole"
// },
// {
//   "product_name":"Red Ajrakh Stole with Triangular Pattern",
//   "product_url":"Red-Ajrakh-Stole-with-Triangular-Pattern",
//   "description":"description...",
//   "vendor":"loomkar",
//   "product_type":"Ajrakh",
//   "cloth_type":"Ajrakh",
//   "avail":"sale",
//   "tag":"best saller",
//   "imgs":[
//       "stole/Red-Ajrakh-Stole-with-Triangular-Pattern/01.jpg",
//       "stole/Red-Ajrakh-Stole-with-Triangular-Pattern/02.jpg",
//       "stole/Red-Ajrakh-Stole-with-Triangular-Pattern/03.jpg",
//       "stole/Red-Ajrakh-Stole-with-Triangular-Pattern/04.jpg"
//     ],
//   "main_price":2200,
//   "discount":20,
//   "quantity":10,
//   "trending":"Bestseller",
//   "category":"stole"
// },
// {
//   "product_name":"Red Ajrakh Stole with Triangular Pattern",
//   "product_url":"Red-Ajrakh-Stole-with-Triangular-Pattern",
//   "description":"description...",
//   "vendor":"loomkar",
//   "product_type":"Ajrakh",
//   "cloth_type":"Ajrakh",
//   "avail":"sale",
//   "tag":"best saller",
//   "imgs":[
//       "stole/Red-Ajrakh-Stole-with-Triangular-Pattern/01.jpg",
//       "stole/Red-Ajrakh-Stole-with-Triangular-Pattern/02.jpg",
//       "stole/Red-Ajrakh-Stole-with-Triangular-Pattern/03.jpg",
//       "stole/Red-Ajrakh-Stole-with-Triangular-Pattern/04.jpg"
//     ],
//   "main_price":2200,
//   "discount":20,
//   "quantity":10,
//   "trending":"Bestseller",
//   "category":"stole"
// },
// {
//   "product_name":"Red Ajrakh Stole with Triangular Pattern",
//   "product_url":"Red-Ajrakh-Stole-with-Triangular-Pattern",
//   "description":"description...",
//   "vendor":"loomkar",
//   "product_type":"Ajrakh",
//   "cloth_type":"Ajrakh",
//   "avail":"sale",
//   "tag":"best saller",
//   "imgs":[
//       "stole/Red-Ajrakh-Stole-with-Triangular-Pattern/01.jpg",
//       "stole/Red-Ajrakh-Stole-with-Triangular-Pattern/02.jpg",
//       "stole/Red-Ajrakh-Stole-with-Triangular-Pattern/03.jpg",
//       "stole/Red-Ajrakh-Stole-with-Triangular-Pattern/04.jpg"
//     ],
//   "main_price":2200,
//   "discount":20,
//   "quantity":10,
//   "trending":"Bestseller",
//   "category":"stole"
// }
//     ];

    const [getproducts, setproducts] = useState([])

    //get all notes
const getallproducts = async (trend)=>{
  const responce = await fetch(`https://loomkar-bk.vercel.app/api/pro/findtrending/${trend}`,{
    method:'GET',
    headers:{
      'content-Type':'application/json',
    }
  })

  const allproduct = await responce.json()
    // console.log(allproduct);
    setproducts(allproduct)

}

useEffect(()=>{
  getallproducts("New Arrivals")
},[])

  return (
    <div>
        <Swiper
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            loopFillGroupWithBlank={true}
            slidesPerView={3}
            spaceBetween={15}
            // navigation={true}
            modules={[Navigation, Pagination, Autoplay]}
            className="mySwiper"
        >
            {
                getproducts.map((element)=>{
                  return <SwiperSlide key={element.product_name}>
                    <ProductsCard id={element._id} purl={element.product_url} avail={element.avail} img1={element.imgs[0]} img2={element.imgs[1]} pname={element.product_name} discount={element.discount} price={element.main_price} link={element.plink}/>
                  </SwiperSlide>
                })
              }
        </Swiper>
    </div>
  )
}
