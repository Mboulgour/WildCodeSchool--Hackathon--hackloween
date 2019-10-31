import React from 'react'

import { Link } from 'react-router-dom'
import { whileStatement } from '@babel/types'

const TransitionTest = (props) => {
  return(
    <div style={{color: "white", fontSize: "2rem"}}>
      {props.transition}

      <button >TEST</button>
    </div>
  )
}

export default TransitionTest