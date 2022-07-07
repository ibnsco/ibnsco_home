import React, { useState } from 'react'
import './Navbar.css'
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import logo from '../../assets/logo.svg'

function Navbar() {

  const [ toggleMenu, setToggleMenu ] = useState(false)
  const Menu = () => (
    <>
      <p><a href="#home">Home</a></p>
      <p><a href="#wgpt3">Ibnsco</a></p>
      <p><a href="#possibility">Open AI</a></p>
      <p><a href="#features">Case studies</a></p>
      <p><a href="#blog">Libraries</a></p>
    </>
  )

  const Sign = () => (
    <>
      <p>Sign in</p>
      <button type='button'>Sign up</button>
    </>
  )

  return (
    <div className='ibnsco__navbar'>
      <div className='ibnsco__navbar-links'>
        <div className='ibnsco__navbar-links_logo'>
          <img src={logo} alt="logo" />
        </div>
        <div className='ibnsco__navbar-links_container'>
          <Menu />
        </div>
      </div>  
      <div className='ibnsco__navbar-sign'>
        <Sign />
      </div>
      <div className='ibnsco__navbar-menu'>
        {toggleMenu
          ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className='ibnsco__navbar-menu_container scale-up-center'>
            <div className='ibnsco__navbar-menu_container-links'>
              <Menu />
            </div>
            <div className='ibnsco__navbar-menu_container-links-sign'>
              <Sign />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar