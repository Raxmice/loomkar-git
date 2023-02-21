import React from 'react'

export default function Anyque() {
  return (
    <div>
    <div className='any-que-dra'>
                    <form className='row'>
                        <div className='col-md-4'><input className='w-100 input-box' type='text' placeholder='Name' /></div>
                        <div className='col-md-4'><input className='w-100 input-box' type='text' placeholder='Email' /></div>
                        <div className='col-md-4'><input className='w-100 input-box' type='text' placeholder='Phone number' /></div>
                        <div className='col-md-12'><textarea className='w-100 input-box' rows={8} placeholder='Comment'></textarea></div>
                        <div className='all-center'><a href='/'><div className='action-btn'>SEND</div></a></div>
                    </form>
                </div>
    </div>
  )
}
