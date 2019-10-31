import React from 'react'

import './styles/ActionsHeader.css'

const ActionsHeader = (props) => {
  return(
    <div className="ActionsHeader">
      <p>{props.num === 18 ? "Final stage" : `Niveau ${props.num +1}` }</p>
    </div>
  )
}

export default ActionsHeader