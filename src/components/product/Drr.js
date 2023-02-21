import React, { useEffect, useState, useContext } from 'react'
import $ from 'jquery'
import Context from '../../context/Context'



import Discription from './drr/Discription'
import Reviews from './drr/Reviews'
import ShippingAndReturns from './drr/ShippingAndReturns'

export default function Drr(props) {
  const context = useContext(Context);
  const { activereviews } = context;
  // console.log(activereviews)
  if(activereviews === ""){console.log("this is line is just for to not show ACTIVEREVIEWS not used")}


  const [tabs, setTabs] = useState(<Discription/>)



  useEffect(()=>{
    setTimeout(() => {
      $('.dra-discription').click();
    }, 4000);
  },[])






  let clear = ()=>{
    $('.dra-discription, .dra-reviews, .dra-any-que').css({"background":"#f5f5f5","color":"#232323"})
  }

  let discription = ()=>{
    clear()
    $('.dra-discription').css({"background":"#232323","color":"#f5f5f5"})
    setTabs(<Discription description={props.description} />)
  }
  let reviews = ()=>{
    clear()
    $('.dra-reviews').css({"background":"#232323","color":"#f5f5f5"})
    setTabs(<Reviews/>)
  }
  let anyque = ()=>{
    clear()
    $('.dra-any-que').css({"background":"#232323","color":"#f5f5f5"})
    setTabs(<ShippingAndReturns/>)
  }
  return (
    <div>
      <section className='sec-b-space'>
        <div className='container'>
            <div className='dra'>
            <div className='dra-btns'>
                    <button className='dra-discription' onClick={discription}>DISCRIPTION</button>
                    <button className='dra-reviews' id='drr-reviews' onClick={reviews}>REVIEWS</button>
                    <button className='dra-any-que' onClick={anyque}>SHIPPING AND RETURN</button>
                </div>
                {tabs}
            </div>
        </div>
      </section>
    </div>
  )
}
