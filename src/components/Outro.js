import React from 'react'
import {Link} from 'react-router-dom'
import './styles/Outro.css'

class Outro extends React.Component {
    render() {
        return (
            <div>
                <main className="outromain-content">
                    <img className="outroBg" src="/4.jpg"></img>
                    {/* BACKGROUND CHATEAU 
                    <img className="outroBg" src="/castle.jpg"></img> */}
                    {/* BACKGROUND CIMETIERRE 
                    <img className="outroBg" src="/cemetery.jpg"></img> */}
                    {/* BACKGROUND ENFER 
                    <img className="outroBg" src="/hell.jpg"></img> */}
                    
                    <span className="outromain-title"> 
                        "Le Roi Démon vous témoigne tout son respect pour tant d'insolence, vous lui avez
                        prouvé votre appartenance au mal.
                       Alors que vous vous rapprochez du tunnel de la Délivrance,
                       celui-ci s'amenuise au rythme de vos pas. Vous comprenez
                       enfin que votre destin est scellé dans les Enfers et que la Mort
                       vous consumera à petit feu. Vous l'avez bien mérité. On n'échappe
                       pas à la Mort.
                       FIN"
                    </span>
                    <canvas className="outronoise outrovignette"></canvas>
                    
                </main>
            </div>
        )
    }
}





export default Outro