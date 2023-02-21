import $ from 'jquery'
// import {ComponentDidMount, useEffect} from 'react';
import leftarrow from './img/leftarrow.svg'
import rightarrow from './img/rightarrow.svg'

import './styles.css'

let css = "margin:50px;background:#fff;opacity:0.5;padding-top:5px;padding-left:15px;padding-right:15px;padding-bottom:7px;border-radius:50%;"

$( document ).ready(function() {
    $('.swiper-button-prev').html(`<div style=${css} className="arrows left-arrow"><img className='w-100' src=${leftarrow} alt='Left arrow' /></div>`);
    $('.swiper-button-next').html(`<div style=${css} className="arrows left-arrow"><img className='w-100' src=${rightarrow} alt='Left arrow' /></div>`);
});

//   ComponentDidMount(){
//     $('.swiper-button-prev').html(`<div className='arrows left-arrow'><img className='w-100' src=${leftarrow} alt='Left arrow' /></div>`);
//     $('.swiper-button-next').html(`<div className='arrows left-arrow'><img className='w-100' src=${rightarrow} alt='Left arrow' /></div>`);  
//   }

