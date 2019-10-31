import React from 'react'
import { Link } from 'react-router-dom'

import ActionsHeader from './ActionsHeader'
import MainCharacter from './MainCharacter'
import Monster from './Monster'
import TransitionTest from './TransitionTest'

import './styles/Actions.css'

const situations = [
  {
    id: 1,
    text: "Vous faites face a une grande montage et décidez de l'arpenter...Quand alors un étrange humanoïde volant vous fond dessus !",
    bouton1: "Je m'enfuis",
    bouton2: "Je lui tord le bec",
    image: 1,
  },
  {
    id: 2,
    text: "Vous parvenez à vous enfuir de justesse, l\'oiseau s'écrase dans la roche avec fracas. Vous continuez votre ascension, pas de bol une autre créature effrayante vous fait face et se présente à vous comme étant le Roi de la montagne.",
    bouton1: "Je lui donne un coup de poing",
    bouton2: "Je cours de plus belle",
    image: 1,
  },
  {
    id: 3,
    text: "Grâce à vos compétences en arts martiaux, vous parvenez à lui placer un mawashi dans le nez. Vous sortez blessé mais sauf, et aperçevez un château au loin. Vous vous en approchez et aperçevez une femme devant, qui vous explique que des vampires rôdent dans le château. Méfiante, elle finit par vous prendre pour l\'un d\'eux.",
    bouton1: "Je tente de la raisonner",
    bouton2: "Je tente une prise de judo",
    image: 1,
  },
  {
    id: 4,
    text: "Vous réussissez à la convaincre de votre bonne foi, mais toutes ces discussions ainsi qu\'un blizzard soundain vous plonge en hypothermie. Vous courez vous réfugier dans le château, rentrez et tombez nez à nez avec une femme de ménage. Vous lui demandez secours, mais en se rapprochant vous réalisez qu\'elle est blessée au cou. Elle s\'est déjà transformée en vampire.",
    bouton1: "Je tire le tapis",
    bouton2: "Je l'attaque avec son balai dépoussiérant",
    image: 2,
  },
  {
    id: 5,
    text: "Bien vu ! La vampirette glisse et se fracasse le dos sur le lino. Vous avancez dans le grand hall et croisez un vampire arrogant en transition de se regarder dans un miroir.",
    bouton1: "Je l'assomme avec son miroir",
    bouton2: "Je lui dis qu'il est magnifique",
    image: 2,
  },
  {
    id: 6,
    text: "Vous lui avez brisé le nez. Il s\'enfuit en pleurant, bien fait. Soudain des miaulements lugubres résonnent dans l\'obscurité ambiante. Vous vous aventurez au gré des échos vers la mignonne bête, sauf que c\'est un chat démoniaque.",
    bouton1: "Je lui redonne un coup de miroir",
    bouton2: "Je le caresse malgré son regard démoniaque",
    image: 2,
  },
  {
    id: 7,
    text: "Décidément, ce miroir vous est bien utile ! La bête s'enfuit  la queue entre les jambes. Vous commencez a avoir faim avec tout ce tintouin. Vous sentez odeur de viande au loin, vous approchez, et croisez un autre  vampire habitant les lieux. Il tend une baguette de houx vers vous, que vous lui arrachez des mains.",
    bouton1: "Vous criez Alohomora",
    bouton2: "Vous criez Wingardium Leviosa",
    image: 2,
  },
  {
    id: 8,
    text: "La porte de la cuisine s'ouvre et assomme violemment le vampire. Vous rentrez donc affamé dans la cuisine mais une violente odeur de putréfaction vous envahit. Vous tournez la tête, un bouchez monstrueux vous observe avec appétit.",
    bouton1: "Vous lancez votre baguette",
    bouton2: "Vous lancez Avada Kedavra",
    image: 2,
  },
  {
    id: 9,
    text: "Bien visé ! Le boucher est éborgné et se perd dans les confins de la chambre froide. Seulement une autre créature affamée vous a remarqué : c'est un hybride mi vampire mi loup-garou !",
    bouton1: "Vous lui donnez de l'ail",
    bouton2: "Vous lui donnez de la viande putréfiée",
    image: 2,
  },
  {
    id: 10,
    text: "Bravo, vos connaissances en vampires vous ont sauvé la vie. Vous sortez enfin de cette cuisine maudite, la faim vous tord toujours le ventre. Vous empreintez une porte et voyez la lumière au loin. Vous êtes en réalité tombé dans le caveau du château. Une tombe s'ouvre d'elle même, et en sort une terrifiante momie.",
    bouton1: "Vous tirez ses bandelettes",
    bouton2: "Vous vous cachez dans un sarcophage",
    image: 2,
  },
  {
    id: 11,
    text: "Dans un tournoiement frénésique, la momie se décompose. Vous vous rapprochez de la sortie quand vous entendez un rire sinistre. Un énième vampire qui semble être le propriétaire des lieux vous adresse la parole.",
    bouton1: "Vous vous excusez d'être dans son château",
    bouton2: "Vous le poussez vers la lumière",
  },
  {
    id: 12,
    text: "Excuses acceptées ! Vous avez flatté son égo et le noble vampire vous laisse passer. Il ferme la porte bruyamment et comprenez que vous êtes piégé dans son cimetierre. Un mort-vivant affamé s'approche de  vous, bien décidé à vous changer en pature.",
    bouton1: "Vous courez !",
    bouton2: "Vous l'affrontez au poing",
    image: 3,
  },
  {
    id: 13,
    text: "Bravo, c'est bien connu, les morts vivants marchent très lentement. Vous le semez facilement et avancez prudemment entre les tombes. Une horrible goule suturée  de tout son corps s'avance de nouveau vers vous.",
    bouton1: "Vous l'affrontez au poing",
    bouton2: "Vous courez de nouveau !",
    image: 3,
  },
  {
    id: 14,
    text: "Vos techniques de judoka confirmé ont encore fait mouche. Le florilège de morts vivants continue, un mort accablé d'une citrouille en guise de  casque vous menace désormais.",
    bouton1: "Vous continuez à avancer",
    bouton2: "Vous lui arrachez sa citrouille",
    image: 3,
  },
  {
    id: 15,
    text: "Bien vu, il ne vous voit pas à cause de sa citrouille. Vous continuez tranquillement votre périple. Votre sérénité est vite amputée, vous vous retrouvez nez-à-nez avec la terrible Faucheuse.",
    bouton1: "Vous affrontez votre destin",
    bouton2: "Vous rebroussez chemin",
    image: 3,
  },
  {
    id: 16,
    text: "Vous vous battez avec courage, mais la Faucheuse  est determinée et vous entraîne sous terre. Vous vous retrouvez dans un monde calciné s'apparentant aux Enfers. Un démon en gardant l'entrée s'approche curieusement vers vous.",
    bouton1: "Vous lui posez une énigme",
    bouton2: "Vous l'attaquez avec la faux de la Mort",
    image: 4,
  },
  {
    id: 17,
    text: "Il ne s\'y attendait pas ! C\'est au gardien de poser la question fatidique ! Surpris et amusé, il vous laisse passer. Alors que vous affrontez les flammes de l\'enfer, un démon affamé s\'avance dangereusement vers vous.",
    bouton1: "Vous agitez vos bras",
    bouton2: "Vous lui donnez un reste de gousse d'ail",
    image: 4,
  },
  {
    id: 18,
    text: "Bien joué. Vous créez un écran de fumée qui aveugle la bête et se perd dans les confins de flammes. Vous apercevez alors une belle créature devant vous. Affamé vous aussi, vous décidez de l\'aborder avec séduction.",
    bouton1: "Vous la frappez",
    bouton2: "Vous l'enlacez",
    image: 4,
  },
  {
    id: 19,
    text: "Soudain conscient qu\'il s'agit d\'un piège, vous reprenez vos esprits et assomez le démon illusoire. Vous avez alors attisé la fureur d'un nouveau démon, qui se présente à vous comme le Prince des Enfers.",
    bouton1: "Vous exigez à parler au Roi",
    bouton2: "Vous vous excusez de votre maladresse",
    image: 4,
  },
  {
    id: 20,
    text: "Le Démon s'esclaffe, et s\'en va chercher son père. Un Démon cauchemardesque affublé d\'un sceptre royal apparait alors d\'entre les flammes. Vous comprenez que vous faites face à votre dernière épreuve et dernière issue vers la Lumière.",
    bouton1: "Vous lui parlez avec condescendance",
    bouton2: "Vous vous excusez de votre maladresse",
    image: 4,
  },
] // Array of different monsters/situations
let index = 0 // Index to use when appending a specific monster

class Actions extends React.Component {
  state = {
    data: undefined,
    text: undefined,
    background: undefined,
    monster: undefined,
  }

  
  getData = () => {
    fetch(`https://hackathon-wild-hackoween.herokuapp.com/monsters/${situations[index].id}`)
      .then(res => res.json())
      .then(res => this.setState({
        data: res,
        monster: true,
      })
    )
  }

  componentDidMount(){ // Getting data when component is mounted and render the monster thanks to index in situations array
    index = 0 // Resetting index when coming from another component (like home)
    this.getData()
  }

  newSituation = () =>{
    index += 1 // When user is clicking on a good choice, iterating through array of monsters/level/messages
    this.getData()
  }

  newTransition = () =>{
      this.setState({
      monster: false
    })
  }

  render(){
    return(
      <div className='Actions'>
        { this.state.monster ?
        <div>
          <ActionsHeader num={index}/>
          <Monster data={this.state.data.monster.id} name={this.state.data.monster.name}/>
          <MainCharacter />
          <div className="Choices">
            <a onClick={this.newTransition}>Next Monster</a>
            <Link exact to="/">Bad choice</Link>
          </div>
        </div>
        :
          <div>
            <TransitionTest transition={situations[index].text}/>
            <a onClick={this.newSituation}>Next Monster</a>
          </div>
        }
      </div>
    )
  }
}

export default Actions