import React from 'react'

import Monster from './Monster'

import './styles/Home.css'

const Home = () => {
  return(
    <div className='Home'>
      <h1 className="Home_title">SISI LA FAMILLE</h1>
      <Monster data= {1} />
    </div>
  )
}

export default Home