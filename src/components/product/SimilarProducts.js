import React, { useEffect, useState } from 'react'
import ProductsCard from '../landingpage/ProductsCard'


export default function SimilarProducts(props) {

  const trend = [
    {
      "product_name":"Pure Ajrakh Block Print Cotton Saree",
      "product_url":"Pure-Ajrakh-Block-Print-Cotton-Saree",
      "description":"This Pure Cotton Ajrakh saree with a beautiful block print embellishes your sophisticated personality with a subtle classiness. Ajrakh fabrics are superbly gorgeous used mostly in Sindh (Pakistan) & Kutch (India) and are still a major part of Sindhi culture.",
      "vendor":"loomkar",
      "product_type":"Ajrakh",
      "avail":"sale",
      "tag":"best saller",
      "imgs":[
          "sarees/Pure-Ajrakh-Block-Print-Cotton-Saree/107.png",
          "sarees/Pure-Ajrakh-Block-Print-Cotton-Saree/108.png",
          "sarees/Pure-Ajrakh-Block-Print-Cotton-Saree/109.png",
          "sarees/Pure-Ajrakh-Block-Print-Cotton-Saree/110.png"
        ],
      "rating":4,
      "main_price":2500,
      "discount":20,
      "quantity":1
    },
    {
        "product_name":"Blue Khadi Linen Kalamkari With Pink Border",
        "product_url":"Blue-Khadi-Linen-Kalamkari-With-Pink-Border",
        "description":"Pretty. Stunning. Wow! This blue Khadi linen saree with a pink border will just steal your heart away. Added to it, is the awesome feeling that Khadi fabrics provide! Khadi is known to be a proud symbol of our Indian identity. Drape it around and let your confident and independent personality shine.",
        "vendor":"loomkar",
        "product_type":"Ajrakh",
        "avail":"sale",
        "tag":"best saller",
        "imgs":[
            "sarees/Blue-Khadi-Linen-Kalamkari-With-Pink-Border/95.png",
            "sarees/Blue-Khadi-Linen-Kalamkari-With-Pink-Border/96.png",
            "sarees/Blue-Khadi-Linen-Kalamkari-With-Pink-Border/97.png",
            "sarees/Blue-Khadi-Linen-Kalamkari-With-Pink-Border/98.png"
          ],
        "rating":5,
        "main_price":1800,
        "discount":20,
        "quantity":1
    },
    {
        "product_name":"Blue Khadi Linen Saree In Bagh Print",
        "product_url":"Blue-Khadi-Linen-Saree-In-Bagh-Print",
        "description":"Pretty. Stunning. Wow! This blue Khadi linen saree with a pink border will just steal your heart away. Added to it, is the awesome feeling that Khadi fabrics provide! Khadi is known to be a proud symbol of our Indian identity. Drape it around and let your confident and independent personality shine.",
        "vendor":"loomkar",
        "product_type":"Khadi",
        "avail":"sale",
        "tag":"best saller",
        "imgs":[
            "sarees/Blue-Khadi-Linen-Saree-In-Bagh-Print/91.png",
            "sarees/Blue-Khadi-Linen-Saree-In-Bagh-Print/92.png",
            "sarees/Blue-Khadi-Linen-Saree-In-Bagh-Print/93.png",
            "sarees/Blue-Khadi-Linen-Saree-In-Bagh-Print/94.png"
          ],
        "rating":5,
        "main_price":1520,
        "discount":20,
        "quantity":1
    },
    {
        "product_name":"Royal Blue And Green Khadi Zari Floral Border",
        "product_url":"Royal-Blue-And-Green-Khadi-Zari-Floral-Border",
        "description":"Wanna don a saree that perfectly depicts your elegance? This Royal Blue and Green Khadi Floral Zari Saree are the ones for you! Khadi fabrics are primarily used in sarees to improve their temperature resistance. With the touch of silk, it carries elegance with grace.",
        "vendor":"loomkar",
        "product_type":"Khadi",
        "avail":"sale",
        "tag":"best saller",
        "imgs":[
            "sarees/Royal-Blue-And-Green-Khadi-Zari-Floral-Border/75.png",
            "sarees/Royal-Blue-And-Green-Khadi-Zari-Floral-Border/77.png",
            "sarees/Royal-Blue-And-Green-Khadi-Zari-Floral-Border/78.png"
          ],
        "rating":5,
        "main_price":1700,
        "discount":20,
        "quantity":1
    }
  ]

  const similar = props.similar;
  // console.log(similar)
  const [similardata, setSimilardata] = useState(trend)

  const getsimilar = async ()=>{
    const responce = await fetch(`https://loomkar-bk.vercel.app/api/pro/fatchalltype/${similar}`,{
      method:'GET',
      headers:{
        'content-Type':'application/json',
      }
    }
    )

    const onesimilar = await responce.json()
    // console.log(onesimilar)
    setSimilardata(onesimilar)
}


useEffect(()=>{
  getsimilar()
  },[])


    return (
    <div>
      <section className='sec-b-space'>
        <div className='container'>
            <h6 className='center sub-head-p'>Loomkar</h6>
            <h3 className='center sub-head-h3 mr-20'>You May Also Like</h3>

            <div className='trending-cards'>
                <div className='row similar'>
                  {
                    similardata.map((element)=>{
                      return <div className='col-md-3' key={element.product_name}>
                        <ProductsCard avail={element.avail} img1={element.imgs[0]} img2={element.imgs[1]} pname={element.product_name} discount={element.discount} price={element.main_price} link={element.plink} purl={element.product_url}/>
                      </div>
                    })
                  }
                </div>
            </div>

            <div className='frequently-bought-together display-none'>
                  <div className='col-md-6'>
                  <h3 className='fbt-h3'>Frequently Bought Together</h3>
                    <div className='row'>
                        <div className='col-md-6'>
                            <div className='row'>
                                <div className='col-md-5'><img className='w-100' src={`https://loomkar-9zv7275zh-raxmice.vercel.app/img/products/sarees/107_720x.webp`} alt=''/></div>
                                <div className='col-md-2 all-center'>+</div>
                                <div className='col-md-5'><img className='w-100' src={`https://loomkar-9zv7275zh-raxmice.vercel.app/img/products/sarees/140_720x.webp`} alt=''/></div>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <p className='para add-price'><strong>Total price:</strong> <span className='text-line-through'>Rs. 4,500.00</span> <b>Rs. 3,800.00</b></p>
                            <div className='right-align'><div className='action-btn'>ADD SELECTED TO CART</div></div>
                        </div>
                    </div>
                  </div>

                  <div className='check-group'>
                  <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" defaultChecked/>
                  <label className="form-check-label" htmlFor="flexCheckChecked">
                  This item: Multicolour Khadi Linen Saree with Orange Border <span className='text-line-through'>Rs. 2,000.00</span> Rs. 1,800.00
                  </label>
              </div>
                
              <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" defaultChecked/>
                  <label className="form-check-label" htmlFor="flexCheckChecked">
                  Green Khadi Linen Saree with Block Print <span className='text-line-through'>Rs. 2,500.00</span> Rs. 2,000.00
                  </label>
              </div>
                  </div>

            </div>

        </div>
      </section>
    </div>
  )
}
