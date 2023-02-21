import React, { useContext, useEffect } from 'react'
import Context from '../context/Context'
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
export default function About() {
  // const context = useContext(Context)
  const {loading, setLoading, loadingStyle2} = useContext(Context)

  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },500)
  },[setLoading])

    document.title='About'

  return (
    <div>
    {loading ?
      <div className='loader-sec'>
      <ClimbingBoxLoader
      style={loadingStyle2}
      loading={loading}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
    </div>
    :
    <section className='sec-b-space sec-t-30'>
      <div className='container'>
        <h3 className='center sec-heading'>About Us</h3>
        <p className='para'>Starting out with baby steps, Loomkar while taking pride of India's ethnic handloom heritage has nestled its base in Raipur offering all fashionistas authentic handwoven apparels that are unique renditions of various arts. At Loomkar we celebrate our country's rich diversity, traditional expertise of Indian textiles, weavers and the ancient creativity of craftsmen coming from various cultures.</p>
        <p className='para'>We specialise in offering our customers the best ethnic hand-woven sarees, skirts, stoles, pants, ornaments, and other premium fabrics that amp up your 'oomph' factor. Our range of high-quality and rich textured fabrics and garments provide you a divine aura and bring out the beautiful self in you. Explore diverse handwoven and handpicked apparel with Loomkar.</p>
        <br/>
        <p className='para'><strong>Email:</strong> hello@loomkar.com</p>
        <p className='para'><strong>Phone:</strong> +91 96305 60356</p>
        <p className='para'><strong>Address:</strong> Shop no, 359 - B, Main Rd, beside Natural Icecream, Samta Colony, Raipur, Chhattisgarh 492001</p>
      </div>
    </section>
    }
    </div>
  )
}
