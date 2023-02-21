import React from 'react'
import Logo from './logo.avif'
import Srarch from './search.svg'
import Kart from './kart.svg'

import {Link} from 'react-router-dom'

export default function Header() {
  // let location = useLocation();
  return (
    <div>
    <nav className="nav-area">
    <div className="container">
    <div className='row'>
      <div className='col-md-3'>
      <Link className="navbar-brand" to="/">
        <img className='main-logo' src={Logo} alt='Loomkar'/>
      </Link>
      </div>

      <div className='col-md-6 all-center'>
      <div className='nav-links flex-align'>
        <Link className="all-center" to='/'><p className='nav-link'>Home</p></Link>
        <Link className="all-center" to='/about'><p className='nav-link'>About Us</p></Link>
        <Link className="all-center" to='/sarees'><p className='nav-link'>Sarees</p></Link>
        <Link className="all-center" to='/skirts'><p className='nav-link'>Skirts</p></Link>
        <Link className="all-center" to='/stoles'><p className='nav-link'>Stoles</p></Link>
        <Link className="all-center" to='/pants'><p className='nav-link'>Pants</p></Link>
        <Link className="all-center" to='/contact'><p className='nav-link'>Contact Us</p></Link>
      </div>
      </div>

      <div className='col-md-3 flex-right'>
      <div className='nav-right flex-align'>
        <img className='header-icons' src={Srarch} alt='search' />
        <img className='header-icons' src={Kart} alt='kart' />
      </div>
      </div>
    </div>
      


      


      

      <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Dark offcanvas</h5>
          <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Link</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <ul className="dropdown-menu dropdown-menu-dark">
                <li><a className="dropdown-item" href="/">Action</a></li>
                <li><a className="dropdown-item" href="/">Another action</a></li>
                <li>
                  <hr className="dropdown-divider"/>
                </li>
                <li><a className="dropdown-item" href="/">Something else here</a></li>
              </ul>
            </li>
          </ul>
          <form className="d-flex mt-3" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </div>
  </nav>
    </div>
  )
}
