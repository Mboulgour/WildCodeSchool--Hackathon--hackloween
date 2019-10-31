import React from 'react'
import {Link} from 'react-router-dom'
import './styles/Transition.css'

class Transition extends React.Component {
    render() {
        return (
            <div>
                <main className="transitionmain-content">
                    <img className="transitionBg" src="/mountain.jpg"></img>
                    
                    <span className="transitionmain-title"> 
                        "Vous vous réveillez soudain dans un monde onirique et
                        horrifique, dans lequel la normalité est un paramètre inconnu.
                        Vous vous situez dans un pan du purgatoire et déambulez tel une âme égarée
                        d'épreuve en épreuve, de rencontre
                        en rencontre. Finalement, vous semblez vous-même vous enfoncer     
                        un peu plus profond dans vos propres abysses."
                    </span>
                    <Link to="/actions" className="transition-start-btn">OK</Link>
                    <canvas className="transitionnoise transitionvignette"></canvas>
                    
                </main>
            </div>
        )
    }
}





export default Transition