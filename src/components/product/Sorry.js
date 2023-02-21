import React from 'react'

export default function Sorry() {
  return (
    <div>
        <hr/>
        <p className='product-p'>Sorry! Our Yellow and Black Khadi Linen Saree in Ikat Print is currently sold out.</p>
            <form className='review-form flex-align mail-send-box'>
                <input className='input-box' type='email' placeholder='Your Email'/>
                <div className='right-align'><div className='action-btn'>SEND</div></div>
            </form>
        <p className='product-p'>Want to be notified when it becomes available again? Simply register your interest and we'll send you a message when it does.</p>
        <hr/>
        <div className='order-btn-grp'>
            <div className='right-align'><div className='action-btn-sold'>SOLD OUT</div></div>
        </div>
    </div>
  )
}
