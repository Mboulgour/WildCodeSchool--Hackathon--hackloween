import React from 'react'

import './styles/ActionsHeader.css'

const ActionsHeader = (props) => {
  return(
    <div className="ActionsHeader">
      Niveau {props.num +1 }
    </div>
  )
}

export default ActionsHeader