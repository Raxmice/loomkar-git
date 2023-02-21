import React, { useEffect, useState } from 'react'
import $ from 'jquery'
import ProductsCard from './ProductsCard';

export default function TrendingProducts() {
//     const products1 = [
//         {
//             'uid':'123',
//             'avail':'Sale',
//             'img1':'sarees/AUR04114-Edit_720x.webp',
//             'img2':'sarees/AUR04126_720x.webp',
//             'Product_name':'Purple Sambalpuri Saree With Border',
//             'discount':'Rs. 2,450.00',
//             'price':'Rs. 1,960.00',
//             'plink':'/'  ,
//             'tag':'featured'
//         },
//         {
//             'uid':'456',
//             'avail':'Sold out',
//             'img1':'sarees/139_720x.webp',
//             'img2':'sarees/140_720x.webp',
//             'Product_name':'Multicolour Khadi Linen Saree With Orange Border Regular price',
//             'discount':'Rs. 2,000.00',
//             'price':'Rs. 1,800.00',
//             'plink':'/'  ,
//             'tag':'featured'
//         },
//         {
//           'uid':'457',
//           'avail':'Sale',
//           'img1':'sarees/107_720x.webp',
//           'img2':'sarees/108_720x.webp',
//           'Product_name':'Pure Ajrakh Block Print Cotton Saree',
//           'discount':'Rs. 2,800.00',
//           'price':'Rs. 2,500.00',
//           'plink':'/'  ,
//           'tag':'featured'
//         },
//         {
//           'uid':'458',
//           'avail':'Sold out',
//           'img1':'sarees/103_720x.webp',
//           'img2':'sarees/104_720x.webp',
//           'Product_name':'Pure Ajrakh Block Print Cotton Saree',
//           'discount':'Rs. 2,800.00',
//           'price':'Rs. 2,500.00',
//           'plink':'/'  ,
//           'tag':'featured'
//         },
//         {
//           'uid':'459',
//           'avail':'Sale',
//           'img1':'sarees/107_720x.webp',
//           'img2':'sarees/108_720x.webp',
//           'Product_name':'Pure Ajrakh Block Print Cotton Saree',
//           'discount':'Rs. 2,800.00',
//           'price':'Rs. 2,500.00',
//           'plink':'/'  ,
//           'tag':'featured'
//         },
//         {
//           'uid':'193',
//           'avail':'Sale',
//           'img1':'sarees/AUR04114-Edit_720x.webp',
//           'img2':'sarees/AUR04126_720x.webp',
//           'Product_name':'Purple Sambalpuri Saree With Border',
//           'discount':'Rs. 2,450.00',
//           'price':'Rs. 1,960.00',
//           'plink':'/'  ,
//           'tag':'featured'
//       },
//       {
//         'uid':'488',
//         'avail':'Sold out',
//         'img1':'sarees/103_720x.webp',
//         'img2':'sarees/104_720x.webp',
//         'Product_name':'Pure Ajrakh Block Print Cotton Saree',
//         'discount':'Rs. 2,800.00',
//         'price':'Rs. 2,500.00',
//         'plink':'/'  ,
//         'tag':'featured'
//       },
//       {
//         'uid':'956',
//         'avail':'Sold out',
//         'img1':'sarees/139_720x.webp',
//         'img2':'sarees/140_720x.webp',
//         'Product_name':'Multicolour Khadi Linen Saree With Orange Border Regular price',
//         'discount':'Rs. 2,000.00',
//         'price':'Rs. 1,800.00',
//         'plink':'/'  ,
//         'tag':'featured'
//       }
//     ];

//     const products2 = [
//       {
//         'uid':'456',
//         'avail':'Sold out',
//         'img1':'sarees/139_720x.webp',
//         'img2':'sarees/140_720x.webp',
//         'Product_name':'Multicolour Khadi Linen Saree With Orange Border Regular price',
//         'discount':'Rs. 2,000.00',
//         'price':'Rs. 1,800.00',
//         'plink':'/'  ,
//         'tag':'featured'
//     },
//     {
//       'uid':'457',
//       'avail':'Sale',
//       'img1':'sarees/107_720x.webp',
//       'img2':'sarees/108_720x.webp',
//       'Product_name':'Pure Ajrakh Block Print Cotton Saree',
//       'discount':'Rs. 2,800.00',
//       'price':'Rs. 2,500.00',
//       'plink':'/'  ,
//       'tag':'featured'
//     },
//     {
//       'uid':'458',
//       'avail':'Sold out',
//       'img1':'sarees/103_720x.webp',
//       'img2':'sarees/104_720x.webp',
//       'Product_name':'Pure Ajrakh Block Print Cotton Saree',
//       'discount':'Rs. 2,800.00',
//       'price':'Rs. 2,500.00',
//       'plink':'/'  ,
//       'tag':'featured'
//     },
//       {
//           'uid':'123',
//           'avail':'Sale',
//           'img1':'sarees/AUR04114-Edit_720x.webp',
//           'img2':'sarees/AUR04126_720x.webp',
//           'Product_name':'Purple Sambalpuri Saree With Border',
//           'discount':'Rs. 2,450.00',
//           'price':'Rs. 1,960.00',
//           'plink':'/'  ,
//           'tag':'featured'
//       },
      
//       {
//         'uid':'459',
//         'avail':'Sale',
//         'img1':'sarees/107_720x.webp',
//         'img2':'sarees/108_720x.webp',
//         'Product_name':'Pure Ajrakh Block Print Cotton Saree',
//         'discount':'Rs. 2,800.00',
//         'price':'Rs. 2,500.00',
//         'plink':'/'  ,
//         'tag':'featured'
//       },
//       {
//         'uid':'193',
//         'avail':'Sale',
//         'img1':'sarees/AUR04114-Edit_720x.webp',
//         'img2':'sarees/AUR04126_720x.webp',
//         'Product_name':'Purple Sambalpuri Saree With Border',
//         'discount':'Rs. 2,450.00',
//         'price':'Rs. 1,960.00',
//         'plink':'/'  ,
//         'tag':'featured'
//     },
//     {
//       'uid':'488',
//       'avail':'Sold out',
//       'img1':'sarees/103_720x.webp',
//       'img2':'sarees/104_720x.webp',
//       'Product_name':'Pure Ajrakh Block Print Cotton Saree',
//       'discount':'Rs. 2,800.00',
//       'price':'Rs. 2,500.00',
//       'plink':'/'  ,
//       'tag':'featured'
//     },
//     {
//       'uid':'956',
//       'avail':'Sold out',
//       'img1':'sarees/139_720x.webp',
//       'img2':'sarees/140_720x.webp',
//       'Product_name':'Multicolour Khadi Linen Saree With Orange Border Regular price',
//       'discount':'Rs. 2,000.00',
//       'price':'Rs. 1,800.00',
//       'plink':'/'  ,
//       'tag':'featured'
//     }
//   ];

//   const products3 = [
//     {
//       'uid':'193',
//       'avail':'Sale',
//       'img1':'sarees/AUR04114-Edit_720x.webp',
//       'img2':'sarees/AUR04126_720x.webp',
//       'Product_name':'Purple Sambalpuri Saree With Border',
//       'discount':'Rs. 2,450.00',
//       'price':'Rs. 1,960.00',
//       'plink':'/'  ,
//       'tag':'featured'
//   },
//   {
//     'uid':'488',
//     'avail':'Sold out',
//     'img1':'sarees/103_720x.webp',
//     'img2':'sarees/104_720x.webp',
//     'Product_name':'Pure Ajrakh Block Print Cotton Saree',
//     'discount':'Rs. 2,800.00',
//     'price':'Rs. 2,500.00',
//     'plink':'/'  ,
//     'tag':'featured'
//   },
//   {
//     'uid':'956',
//     'avail':'Sold out',
//     'img1':'sarees/139_720x.webp',
//     'img2':'sarees/140_720x.webp',
//     'Product_name':'Multicolour Khadi Linen Saree With Orange Border Regular price',
//     'discount':'Rs. 2,000.00',
//     'price':'Rs. 1,800.00',
//     'plink':'/'  ,
//     'tag':'featured'
//   },
//     {
//         'uid':'123',
//         'avail':'Sale',
//         'img1':'sarees/AUR04114-Edit_720x.webp',
//         'img2':'sarees/AUR04126_720x.webp',
//         'Product_name':'Purple Sambalpuri Saree With Border',
//         'discount':'Rs. 2,450.00',
//         'price':'Rs. 1,960.00',
//         'plink':'/'  ,
//         'tag':'featured'
//     },
//     {
//         'uid':'456',
//         'avail':'Sold out',
//         'img1':'sarees/139_720x.webp',
//         'img2':'sarees/140_720x.webp',
//         'Product_name':'Multicolour Khadi Linen Saree With Orange Border Regular price',
//         'discount':'Rs. 2,000.00',
//         'price':'Rs. 1,800.00',
//         'plink':'/'  ,
//         'tag':'featured'
//     },
//     {
//       'uid':'457',
//       'avail':'Sale',
//       'img1':'sarees/107_720x.webp',
//       'img2':'sarees/108_720x.webp',
//       'Product_name':'Pure Ajrakh Block Print Cotton Saree',
//       'discount':'Rs. 2,800.00',
//       'price':'Rs. 2,500.00',
//       'plink':'/' ,
//       'tag':'featured' 
//     },
//     {
//       'uid':'458',
//       'avail':'Sold out',
//       'img1':'sarees/103_720x.webp',
//       'img2':'sarees/104_720x.webp',
//       'Product_name':'Pure Ajrakh Block Print Cotton Saree',
//       'discount':'Rs. 2,800.00',
//       'price':'Rs. 2,500.00',
//       'plink':'/'  ,
//       'tag':'featured'
//     },
//     {
//       'uid':'459',
//       'avail':'Sale',
//       'img1':'sarees/107_720x.webp',
//       'img2':'sarees/108_720x.webp',
//       'Product_name':'Pure Ajrakh Block Print Cotton Saree',
//       'discount':'Rs. 2,800.00',
//       'price':'Rs. 2,500.00',
//       'plink':'/' ,
//       'tag':'featured' 
//     }
// ];

const [getFeatured, setFeatured] = useState([])
const [getNewarrivals, setNewarrivals ] = useState([])
const [getBestseller, setBestseller] = useState([])

//this is for trending projects
const [trendingList, setTrendigList] = useState([])

//get all notes
const getallproducts = async (trend)=>{
  const responce = await fetch(`https://loomkar-bk.vercel.app/api/pro/findtrending/${trend}`,{
    method:'GET',
    headers:{
      'content-Type':'application/json',
    }
  })

  const allproduct = await responce.json()
  switch(trend) {
    case 'featured':
      if(getFeatured.length === 0){
        setFeatured(allproduct)
        setTrendigList(allproduct)
      }
      break;
    case 'New Arrivals':
      if(getNewarrivals.length === 0){
        setNewarrivals(allproduct)
        setTrendigList(allproduct)
      }
      break;
    case 'Bestseller':
      if(getBestseller.length === 0){
        setBestseller(allproduct)
        setTrendigList(allproduct)
      }
      break;
    default:
      // code block
  }
}

    
    //jquery functions for buttons
    let clearbtn = ()=>{
      $(".featured,.newarrivals,.bestseller").css({borderBottom: '1px solid #fafafa'})
    }

    const [onload, setOnload] = useState(0) //onload condition setting

    let featured = ()=>{
        clearbtn()
        $(".featured").css({borderBottom: '2px solid #808080'})
        getallproducts("featured")
        setTrendigList(getFeatured)
        setOnload(1)
    }
    let newarrivals = ()=>{
        clearbtn()
        $(".newarrivals").css({borderBottom: '2px solid #808080'})
        getallproducts("New Arrivals")
        setTrendigList(getNewarrivals)
        setOnload(1)
    }
    let bestseller = ()=>{
        clearbtn()
        $(".bestseller").css({borderBottom: '2px solid #808080'})
        getallproducts("Bestseller")
        setTrendigList(getBestseller)
        setOnload(1)
    }

    //this function run when page loaded for default select featured
    useEffect(() => {
      if(onload === 0){
        featured()
      }
    },)


  return (
    <div>
        <section className='sec-b-space'>
            <div className='container'>
                <h6 className='center sub-head-p'>Loomkar</h6>
                <h3 className='center sub-head-h3 mr-20'>Trending Products</h3>
                <div className='trandingbutton mr-b-40'>
                    <button className='featured' onClick={featured}>Featured</button>
                    <button className='newarrivals' onClick={newarrivals}>New Arrivals</button>
                    <button className='bestseller' onClick={bestseller}>Bestseller</button>
                </div>

                <div className='trending-cards'>
                    <div className='row'>
                      {
                        trendingList.map((element)=>{
                          return <div className='col-md-3' key={element._id}>
                            <ProductsCard id={element._id} purl={element.product_url} avail={element.avail} img1={element.imgs[0]} img2={element.imgs[1]} pname={element.product_name} discount={element.discount} price={element.main_price} link={element.plink}/>
                          </div>
                        })
                      }
                    </div>
                    <div className='all-center'><a href='/sarees'><div className='action-btn'>VIEW ALL</div></a></div>
                </div>
            </div>
        </section>
    </div>
  )
}

