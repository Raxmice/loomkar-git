import React from 'react';
import logo from './logo.avif';
import fb from './fb.svg';
import insta from './insta.svg';

export default function footer() {
  return (
    <div>
      <div className='footer'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-3'>
                    <img className='foot-logo' src={logo} alt='Loomkar' />
                    <p className='foot-p'>LOOMKAR brings you a rare collection of ethnic handloom sarees, stoles, jewellery, skirts, and other apparels to add a traditional touch to your elegance!</p>
                    <div className='foot-social'>
                      <a href='/'><img className='social-icon' src={fb} alt="facebook"/></a>
                      <a href='/'><img className='social-icon' src={insta} alt="instagram"/></a>
                    </div>
                </div>
                <div className='col-lg-2'>
                  <h2 className='foot-h2'>Categories</h2>
                  <a href='/'><p className='foot-link'>Sarees</p></a>
                  <a href='/'><p className='foot-link'>Skirts</p></a>
                  <a href='/'><p className='foot-link'>Stoles</p></a>
                  <a href='/'><p className='foot-link'>Pants</p></a>
                </div>
                <div className='col-lg-2'>
                <h2 className='foot-h2'>Quick Links</h2>
                <a href='/'><p className='foot-link'>Home</p></a>
                <a href='/'><p className='foot-link'>About us</p></a>
                <a href='/'><p className='foot-link'>Contact us</p></a>
                <a href='/'><p className='foot-link'>Blog</p></a>
                <a href='/'><p className='foot-link'>Store</p></a>
                </div>
                <div className='col-lg-2'>
                <h2 className='foot-h2'>Support</h2>
                <a href='/'><p className='foot-link'>Search</p></a>
                <a href='/'><p className='foot-link'>Disclaimer</p></a>
                <a href='/'><p className='foot-link'>Privacy Policy</p></a>
                <a href='/'><p className='foot-link'>Terms & Conditions</p></a>
                <a href='/'><p className='foot-link'>Refund & Returns Policy</p></a>
                </div>
                <div className='col-lg-3'>
                <h2 className='foot-h2'>Newsletter</h2>
                <p className='foot-p' style={{"margin":"0 0 15px 0"}}>Subscribe to our Newsletter and Get 10% Off on every product</p>
                <form>
                <input className='input-box' type='text' placeholder='Your Email' />
                <div className='left-align'><a href='/'><div className='action-btn'>Submit</div></a></div>
                </form>
                </div>
            </div>
        </div>
      </div>

      <div className='footer-footer'>
        <div className='container'>
          <div className='foot-left'>&#169; 2022, Loomkar</div>
          <div className='foot-right'></div>
        </div>
      </div>

    </div>
  )
}
