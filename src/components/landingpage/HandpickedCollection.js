import React from 'react'
import {Link} from 'react-router-dom'

import handloomsarees from '../../img/handpickedcollection/handloom-sarees.webp'
import handloompants from '../../img/handpickedcollection/handloom-pants.webp'
import handloomskirts from '../../img/handpickedcollection/handloom-skirts.webp'
import handloomstoles from '../../img/handpickedcollection/handloom-stoles.webp'

export default function HandpickedCollection() {
  return (
    <div>
      <section className='sec-b-space'>
        <div className='container'>
        <h6 className='center sub-head-p'>Loomkar</h6>
        <h3 className='center sub-head-h3'>Our Handpicked Collection for you!</h3>
        </div>

        <div className='row'>
          <div className='col-md-3 relative'>
            <Link to="/sarees"><img className='w-100 handloom-card' src={handloomsarees} alt="handpicked saree"/></Link>
            <h2 className='absolute handloom-card-name'>Handloom Sarees</h2>
          </div>
          <div className='col-md-3 relative'>
            <Link to="/pants"><img className='w-100 handloom-card' src={handloompants} alt="handpicked saree"/></Link>
            <h2 className='absolute handloom-card-name'>Handloom Pants</h2>
          </div>
          <div className='col-md-3 relative'>
            <Link to="/skirts"><img className='w-100 handloom-card' src={handloomskirts} alt="handpicked saree"/></Link>
            <h2 className='absolute handloom-card-name'>Handloom Skirts</h2>
          </div>
          <div className='col-md-3 relative'>
            <Link to="/stoles"><img className='w-100 handloom-card' src={handloomstoles} alt="handpicked saree"/></Link>
            <h2 className='absolute handloom-card-name'>Handloom Stoles</h2>
          </div>
        </div>
      </section>
    </div>
  )
}
