import React, { useState } from 'react'
import $ from 'jquery'

import Star from './star.svg'
import Stary from './stary.svg'



export default function Reviews() {


  let star1 = ()=>{
    $('.star11').attr({"src":Stary})
  }
  let star2 = ()=>{
    $('.star11,.star22').attr({"src":Stary})
  }
  let star3 = ()=>{
    $('.star11,.star22,.star33').attr({"src":Stary})
  }
  let star4 = ()=>{
    $('.star11,.star22,.star33,.star44').attr({"src":Stary})
  }
  let star5 = ()=>{
    $('.star11,.star22,.star33,.star44,.star55').attr({"src":Stary})
  }

  //rating set start
  let rset = (r)=>{
    switch(r) {
      case "0":
        break;
      case "1":
        star1()
        $('.star22,.star33,.star44,.star55').attr({"src":Star})
        break;
      case "2":
        star2()
        $('.star33,.star44,.star55').attr({"src":Star})
        break;
      case "3":
        star3()
        $('.star44,.star55').attr({"src":Star})
        break;
      case "4":
        star4()
        $('.star55').attr({"src":Star})
        break;
      case "5":
        star5()
        break;
      default:
        console.log("you have to select atleast one star, and plz tell us why");
    }
  }
  let checkvalue = async()=>{
    let r = $('.rate-value').val()
    rset(r)
  }
  //rating set end

  let starout1 = ()=>{
    $('.star11').attr({"src":Star})
    checkvalue()
  }
  let starout2 = ()=>{
    $('.star11,.star22').attr({"src":Star})
    checkvalue()
  }
  let starout3 = ()=>{
    $('.star11,.star22,.star33').attr({"src":Star})
    checkvalue()
  }
  let starout4 = ()=>{
    $('.star11,.star22,.star33,.star44').attr({"src":Star})
    checkvalue()
  }
  let starout5 = ()=>{
    $('.star11,.star22,.star33,.star44,.star55').attr({"src":Star})
    checkvalue()
  }

  const [rate, setRate] = useState(0);
  const set = (r)=>{
    setRate(r)
  }

  const [display , setDisplay] = useState({display:"none"})
  let writecliked = ()=>{
    setDisplay(
      {display: display.display === 'block' ? 'none' : 'block'}
    )
  }
  return (
    <div>
    <div className='reviews-dra'>
        <div className='give-review'>
          <div className='stars-group'>
            <div className='star'><img src={Star} alt="1 star" /></div>
            <div className='star'><img src={Star} alt="2 star" /></div>
            <div className='star'><img src={Star} alt="3 star" /></div>
            <div className='star'><img src={Star} alt="4 star" /></div>
            <div className='star'><img src={Star} alt="5 star" /></div>
            <p className='rating-p'>Based on 1 review</p>
          </div>
          <div className='review-btn'><div className='all-center'><div className='action-btn' onClick={writecliked}>WRITE A REVIEW</div></div></div>
        </div>

        <div className='form-review'  style={display}>
          <h4>Write a review</h4>
          <form className='review-form'>
            <label>Name</label>
            <input className='input-box' type='text' placeholder='Enter your name'/>
            <label>Rating</label>
            <div className='stars-group'>
            <div className='star star1' onMouseOver={star1} onMouseOut={starout1} onClick={()=>{set(1)}}><img className="star11" src={Star} alt="1 star" /></div>
            <div className='star star2' onMouseOver={star2} onMouseOut={starout2} onClick={()=>{set(2)}}><img className="star22" src={Star} alt="2 star" /></div>
            <div className='star star3' onMouseOver={star3} onMouseOut={starout3} onClick={()=>{set(3)}}><img className="star33" src={Star} alt="3 star" /></div>
            <div className='star star4' onMouseOver={star4} onMouseOut={starout4} onClick={()=>{set(4)}}><img className="star44" src={Star} alt="4 star" /></div>
            <div className='star star5' onMouseOver={star5} onMouseOut={starout5} onClick={()=>{set(5)}}><img className="star55" src={Star} alt="5 star" /></div>
          </div>
          <input className='hidden rate-value' name='ratting' type='number' value={rate} readOnly/>
            <label>Title of Review</label>
            <input className='input-box' type='text' placeholder='Enter your name'/>
            <label>Body of Review (1500) characters remaining</label>
            <input className='input-box' type='text' placeholder='Enter your name'/>
            <div className='right-align'><a href='/'><div className='action-btn'>SEND YOUR REVIEW</div></a></div>
          </form>
        </div>
    </div>
    </div>
  )
}
