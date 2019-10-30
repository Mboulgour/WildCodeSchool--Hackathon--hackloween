import React from 'react'

import './styles/Monster.css'
const MainCharacter = () => {
  return(
    <div className="Hero">
      <img src={require(`../images/main.png`)} alt="Our beautiful hero"/>
      <p className="Hero_name">Doggo</p>
    </div>
  )
}

export default MainCharacter