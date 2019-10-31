import React from 'react'
import { Link } from 'react-router-dom'

import './styles/Title.css'

class Title extends React.Component {
    render() {
        return (
            <div className="titleBody">
                <p className="titleTitle">PURGE INTO FLAMES</p>
                <img className='titleBg' src={'/transparent-flame-8-bit-4.gif'} alt="Burning flames" /> 
                <Link to="/text-page"><span className='start-btn'>START</span></Link>
            </div>
        )
    }
}





export default Title