import React, { useState, useContext, useEffect } from 'react'
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import Context from '../context/Context'
import Star from './landingpage/dra/star.svg'
import Stary from './landingpage/dra/stary.svg'
import { useParams } from 'react-router-dom'

import Drr from './product/Drr'
import SimilarProducts from './product/SimilarProducts'
import ProductSlider from '../sliders/ProductSlider'
import Sorry from './product/Sorry';

export default function Product() {

  const params = useParams()
  // console.log(params)//key for serach product from mongodb
  document.title=params.id



  const [product, setProduct] = useState({})
  const [proImg, setProImg] = useState()
  const [callproduct, setCallproduct] = useState(false)
  //get all notes

      //finding discount price
      let mprice = product.main_price;
      let mdisco = product.discount;
      let discountprice = mdisco/100*mprice;
      let totalprice = Math.round(mprice-discountprice);
      // console.log(totalprice)

  const getProduct = async ()=>{
    const responce = await fetch(`https://loomkar-bk.vercel.app/api/pro/findone/${params.id}`,{
      method:'GET',
      headers:{
        'content-Type':'application/json',
      }
    }
    )

    const allproduct = await responce.json()
    // console.log(allproduct)
    setProduct(allproduct)
    setProImg(`https://loomkar-9zv7275zh-raxmice.vercel.app/img/products/${allproduct.imgs[0]}`)
    setLoading(false)
}
// console.log(product)
if(callproduct===true){
  getProduct()
  setCallproduct(false)
}

 

  const context = useContext(Context);
  const { loading, setLoading, loadingStyle2, actreview } = context;

  // const productimg = `http://localhost:3000/img/products/sarees/107_720x.webp`
  
  const setImg = (img)=>{
    // console.log(img)
    setProImg(`${img}`)
  }

  // const [state, setState] = useState({ top: `0%`, left: `0%` })

    
    // setLeft({'opacity':'2','transition':'0.3s'})
    // console.log(left)



    const [item, setItem] = useState(1)

    let increase = ()=>{
      if(item<10){
        setItem(item+1)
      }
    }

    let decrease = ()=>{
      if(item>1){
        setItem(item-1)
      }
    }


    let review = ()=>{
      const element = document.getElementById('drr-reviews');
      if (element) {
        //Will scroll smoothly to the top of the next section
        element.scrollIntoView({ behavior: 'smooth' });
      }
      actreview()
    }

    // useEffect(()=>{
    //   getProduct();
    // },[])

    //useing jquery becouse this never ask for dependency
    // $(document).ready(()=>{
    //   getProduct()
    // })


    useEffect(()=>{
      setLoading(true)
      // getProduct()
      setCallproduct(true)
    },[setLoading,setCallproduct])
    


  return (
    <div>
    {loading? 
      <div className='loader-sec'>
        <ClimbingBoxLoader
        style={loadingStyle2}
        loading={loading}
        aria-label="Loading Spinner"
        data-testid="loader"
        />
        </div>
      : 
      <div>
      <section className='sec-b-space sec-t-30'>
        <div className='container'>
        <div className='row'>


        <div className='col-md-5 product-img-box'>
        <img className='w-100 product-gal-img' src={`${proImg}`} alt="stole" />
        <ProductSlider setImg={setImg} allimg={product}/>
      </div>


      <div className='col-md-7'>
      <div className='sticky-div'>
      <h3 className='product-head-h3'>{product.product_name}</h3>
      <div className='product-rating'>
      <div className='stars-group'>
        <div className='star'><img src={product.rating>=1 || Product.rating<=5 ?Stary:Star} alt="1 star" /></div>
        <div className='star'><img src={product.rating>=2 || Product.rating<=5 ?Stary:Star} alt="2 star" /></div>
        <div className='star'><img src={product.rating>=3 || Product.rating<=5 ?Stary:Star} alt="3 star" /></div>
        <div className='star'><img src={product.rating>=4 || Product.rating<=5 ?Stary:Star} alt="4 star" /></div>
        <div className='star'><img src={product.rating>=5 || Product.rating<=5 ?Stary:Star} alt="5 star" /></div>
        <p className='rating-p product-p'>No review yet. Write Review <img className='review-pen' src='https://loomkar-9zv7275zh-raxmice.vercel.app/img/pen.svg' alt='write a review' onClick={review} /></p>
        </div>
      </div>
      <p className='product-price'><span className='product-price-span'>Rs. {product.main_price}</span> Rs. {totalprice}</p>

        <p className='tax'>Tax included.</p>

        <p className='product-col'><span className='weight-500'>Vendor:</span> {product.vendor}</p>
        <p className='product-col'><span className='weight-500'>Product Type:</span> {product.product_type}</p>

        {product.quantity<=10 && product.quantity>=1?<p className='hurry'>Hurry! Only <span className='red'>{product.quantity}</span> unit left in stock!</p>:<span></span>}
        {product.quantity===0?
        <div>
          <Sorry/>
        </div>
        :
        <div>
        <p className='quantity'>Quantity</p>
        <div className='set-quantity'>
          <div className='set-que all-center decrease' onClick={decrease}>-</div>
          <div className='set-que all-center'>{item}</div>
          <div className='set-que all-center increase' onClick={increase}>+</div>
        </div>

        <div className='order-btn-grp'>
        <div className='right-align'><div className='action-btn'>ADD TO CART</div></div>
        <div className='right-align'><div className='action-btn action-btn-rev'>BUY IT NOW</div></div>
        </div>
        </div>
      }

        
      </div>

      </div>
        </div>
        </div>
      </section>

      <Drr description={product.description}/>

      <SimilarProducts similar={product.product_type}/>
      </div>
    }
      

    </div>
  )
}
