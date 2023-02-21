import React, { useState } from 'react'
// import {Link} from 'react-router-dom'
import glass from '../../img/glass.png'
import eye from '../../img/icons/view.svg'
import heart from '../../img/icons/heart.svg'

export default function ProductsCard(props) {

  //finding discount price
  let mprice = props.price;
  let mdisco = props.discount;
  let discountprice = mdisco/100*mprice;
  // let totalprice = mprice-discountprice;
  let totalprice = Math.round(mprice-discountprice);
  // console.log(totalprice)


    const hide = {"display":"none"}
    const show = {"display":"block"}

    // const bgim = {backgroundImage:"url(img/products/sarees/"+props.img1+")"}
    const [bgimg, setBgimg] = useState({backgroundImage:"url(https://loomkar-c2q8v921e-raxmice.vercel.app/img/products/"+props.img1+")"}); 
    let onbg = ()=>{
      setBgimg({backgroundImage:"url(https://loomkar-c2q8v921e-raxmice.vercel.app/img/products/"+props.img2+")"})
    }
    let offbg = ()=>{
      setBgimg({backgroundImage:"url(https://loomkar-c2q8v921e-raxmice.vercel.app/img/products/"+props.img1+")"})
    }

  return (
    <div>
            <div className='products-card'>
                <div className='products-img' onMouseOver={onbg} onMouseOut={offbg} style={bgimg}>
                    <a rel="noreferrer" target={'_blank'} href={`/product/${props.purl}`}><img className='w-100 glass' src={glass} alt='glass' /></a>
                    <div className='sold-out' style={(props.avail === "Sold out" ? show:hide)}>Sold out</div>
                    <div className='sale' style={(props.avail === "Sale" ? show:hide)}>Sale</div>
                    <div className='view'><img className='view-img' src={eye} alt='view' /></div>
                    <div className='like'><img className='heart-img' src={heart} alt='heart' /></div>
                    <div className='pcard-add-to-cart'><a href={props.link}><div>ADD TO CART</div></a></div>
                </div>
                <h3 className='products-card-name'>{props.pname}</h3>
                <p className='prize'><span className='descount'>Rs. {props.price}</span> Rs. {totalprice}</p>
            </div>
        </div>
  )
}
