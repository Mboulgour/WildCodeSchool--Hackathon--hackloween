import React from 'react'
import './styles/Title.css'

class Title extends React.Component {
    render() {
        return (
            <div className="titleBody">
                <p className="titleTitle">PURGE INTO FLAMES</p>
                <img className='titleBg' src={'/transparent-flame-8-bit-4.gif'} /> 
                <span className='start-btn'>START</span>
            </div>

        )

    }

}





export default Title