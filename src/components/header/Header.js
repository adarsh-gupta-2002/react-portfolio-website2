import './header.css'
import React from 'react'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header> 
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Hajia Bintu</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img alt="img" src={ME}/>
        </div>
        
        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header