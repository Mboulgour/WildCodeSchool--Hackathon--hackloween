import React from 'react'

import './styles/Monster.css'

const Monster = (props) =>{
    return(
      <div className="Monster">
        <img src={require(`../images/${props.data}.png`)} />
        <p className="Monster_name">{props.name}</p>
      </div>
    )
  }

export default Monster