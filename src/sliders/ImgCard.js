import React from 'react'

export default function ImgCard(props) {
  return (
    <div className='product-slider'>
      <img className='w-100' src={props.img} alt={props.img} onClick={()=>{props.setImg(props.img)}}/>
    </div>
  )
}
