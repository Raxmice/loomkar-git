import React from 'react'
import ProductsSlider from '../../sliders/ProductsSlider'

export default function FreshArrivals() {
  return (
    <div>
      <section className='sec-b-space'>
        <div className='container'>
            <div className='row'>
                
                <div className='col-md-8'>
                  <div>
                    <h6 className='center sub-head-p'>Loomkar</h6>
                    <h3 className='center sub-head-h3'>Fresh Arrivals</h3>

                    <ProductsSlider />

                    <div className='all-center'><a href='/'><div className='action-btn'>VIEW ALL</div></a></div>
                  </div>
                </div>

                <div className='col-md-4 scale'>
                    <img className='w-100' src='img/products/AUR04070-Edit_720x.webp' alt='saree' />
                </div>

            </div>
        </div>
      </section>
    </div>
  )
}
