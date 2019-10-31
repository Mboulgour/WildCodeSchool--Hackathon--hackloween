import React from 'react'

import './styles/MainCharacter.css'

const MainCharacter = () => {
  return(
      <div className="Hero">
        <img src={require(`../images/main.png`)} alt="Our beautiful hero"/>
        <p className="Hero_name">A brave hero</p>
      </div>
  )
}

export default MainCharacter