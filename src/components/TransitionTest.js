import React from 'react'

import { Link } from 'react-router-dom'

import './styles/Transition.css'

const TransitionTest = (props) => {
  return(
    <div>
      <main className="transitionmain-content">
          <img className="transitionBg" src={`/${props.img}.jpg`}></img>
          <span className="transitionmain-title"> 
              {props.transition}
          </span>
          <canvas className="transitionnoise transitionvignette"></canvas>
      </main>
    </div>
  )
}

export default TransitionTest