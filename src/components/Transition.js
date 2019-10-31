import React from 'react'
import {Link} from 'react-router-dom'
import './styles/Transition.css'

class Transition extends React.Component {
    render() {
        return (

 
            <main className="transitionmain-content">
                
                <img className="transitionBg" src="/mountain.jpg"></img>

            
                {/* BACKGROUND CHATEAU 
                <img className="transitionBg" src="/castle.jpg"></img> */}
                {/* BACKGROUND CIMETIERRE 
                <img className="transitionBg" src="/cemetery.jpg"></img> */}
                {/* BACKGROUND ENFER 
                <img className="transitionBg" src="/hell.jpg"></img> */}

                    <span className="transitionmain-title">
                        
                        "Vous vous réveillez soudain dans un monde onirique et
            horrifique, dans lequel la normalité est un paramètre inconnu.
            Vous vous situez dans un pan du purgatoire et déambulez tel une âme égarée
             d'épreuve en épreuve, de rencontre
            en rencontre. Finalement, vous semblez vous-même vous enfoncer     
            un peu plus profond dans vos propres abysses."
                    </span>

                <canvas className="transitionnoise transitionvignette"></canvas>
                {/* <Link to="/actions"><span className='start-btn'>OK</span></Link> */}
            </main>


        )

    }

}





export default Transition