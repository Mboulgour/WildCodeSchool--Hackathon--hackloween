import React from 'react'

import './styles/Monster.css'

// Use props from Actions component thanks to array of situations

const Monster = (props) =>{
    return(
      <div className="Monster">
        <img src={require(`../images/${props.data}.png`)} alt="An hideous monster"/> 
        <p className="Monster_name">{props.name}</p>
      </div>
    )
  }

export default Monster