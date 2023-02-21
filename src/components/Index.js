import React, { useEffect, useRef } from 'react'
import Mainslider from '../sliders/Mainslider'
import HandpickedCollection from './landingpage/HandpickedCollection'
import TrendingProducts from './landingpage/TrendingProducts'
import Banner from './landingpage/Banner'
import FreshArrivals from './landingpage/FreshArrivals'
// import TrendingNow from '../sliders/TrendingNow'
import Dra from './landingpage/Dra'



export default function Index() {

  document.title='Loomkar'

  const vidRef=useRef() //this function is used for autoplay the given video
  useEffect(() => { vidRef.current.play(); },[]);

  return (
    <div>
        <Mainslider/>
        <HandpickedCollection/>
        <TrendingProducts/>
        <Banner/>
        <FreshArrivals/>
        
        <section className='sec-b-space'>
          <video
                className='vid'
                width="100%"
                height="80%"
                ref={ vidRef }
                muted
                autoPlay
                loop >
            <source src="video/A_Glimpse_of_Our_Store.mp4" type="video/mp4"/>
            Your browser does not support the video tag.
          </video>
        </section>

        <section className='sec-b-space'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-6 scale-poster'>
                <div className='scale'><img className='w-100' src='img/shopping_section_image.webp' alt='shopping_section_image' /></div>
              </div>
              <div className='col-md-6 scale-poster'>
                <div className='scale'><img className='w-100' src='img/shopping_section_image02.webp' alt='shopping_section_image02' /></div>
              </div>
            </div>
          </div>
        </section>

        <Dra/>

    </div>
  )
}
