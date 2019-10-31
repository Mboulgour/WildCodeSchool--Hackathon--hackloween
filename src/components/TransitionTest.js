import React from 'react'

import { Link } from 'react-router-dom'

const TransitionTest = (props) => {
  return(
    <div>
      {props.transition}

      <Link to="/actions"><button >TEST</button></Link>
    </div>
  )
}

export default TransitionTest