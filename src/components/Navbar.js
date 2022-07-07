import React from 'react'
import Logo from '../assets/img/logo.png'

const Navbar = () => {
  return (
    <div style={{ 
        background: 'rgba(0,0,0,0.2)',
        position: 'absolute',
        left:0, right:0,
        top:0,
        padding: '0 2rem'
     }}>
        <img src={Logo} style={{ width: 50, aspectRatio: 1 }} alt="logo"/>
    </div>
  )
}

export default Navbar