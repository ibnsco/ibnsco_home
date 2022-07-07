import React from 'react'
import './Header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'
const Header = () => {
  return (
    <div className='ibnsco__header section__padding' id='home'>
      <div className='ibnsco__header-content'>
        <h1 className='gradient__text'>Let's Build Something amazing with IBNSCO Open AI</h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. 
          Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. 
          Party we years to order allow asked of.
        </p>
        <div className='ibnsco__header-content__input'>
          <input type="email" placeholder='Your email address' />
          <button type='button'>Get started</button>
        </div>
        <div className='ibnsco__header-content__people'>
          <img src={people} alt="people" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className='ibnsco__header-image'>
          <img src={ai} alt="ai" />
        </div>
    </div>
  )
}

export default Header