import React from 'react'
// import './Brand.css'
import { google, slack, atlassian, shopify, dropbox} from './import'

const Brand = () => {
  return (
    <div className='ibnsco__brand section__padding'>
      <div>
        <img src={google} alt="google" />
      </div>
      <div>
        <img src={slack} alt="slack" />
      </div>
      <div>
        <img src={atlassian} alt="atlassian" />
      </div>
      <div>
        <img src={dropbox} alt="dropbox" />
      </div>
      <div>
        <img src={shopify} alt="google" />
      </div>
    </div>
  )
}

export default Brand