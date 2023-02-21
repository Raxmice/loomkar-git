import React, { useState, useEffect } from 'react'
import $ from 'jquery'



import Discription from './dra/Discription'
import Reviews from './dra/Reviews'
import Anyque from './dra/Anyque' 

export default function Dra() {
  const [tabs, setTabs] = useState(<Discription/>)
  useEffect(()=>{
    $('.dra-discription').click();
  },[])

  let clear = ()=>{
    $('.dra-discription, .dra-reviews, .dra-any-que').css({"background":"#f5f5f5","color":"#232323"})
  }

  let discription = ()=>{
    clear()
    $('.dra-discription').css({"background":"#232323","color":"#f5f5f5"})
    setTabs(<Discription/>)
  }
  let reviews = ()=>{
    clear()
    $('.dra-reviews').css({"background":"#232323","color":"#f5f5f5"})
    setTabs(<Reviews/>)
  }
  let anyque = ()=>{
    clear()
    $('.dra-any-que').css({"background":"#232323","color":"#f5f5f5"})
    setTabs(<Anyque/>)
  }
  return (
    <div>
      <section className='sec-b-space'>
        <div className='container'>
            <div className='dra'>
            <div className='dra-btns'>
                    <button className='dra-discription' onClick={discription}>DISCRIPTION</button>
                    <button className='dra-reviews' onClick={reviews}>REVIEWS</button>
                    <button className='dra-any-que' onClick={anyque}>ANY QUESTIONS?</button>
                </div>
                {tabs}
            </div>
        </div>
      </section>
    </div>
  )
}
