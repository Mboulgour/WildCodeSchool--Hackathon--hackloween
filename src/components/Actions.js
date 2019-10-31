import React from 'react'
import { Link } from 'react-router-dom'

import ActionsHeader from './ActionsHeader'
import MainCharacter from './MainCharacter'
import Monster from './Monster'
import TransitionTest from './TransitionTest'

import './styles/Actions.css'

const situations = [
  {
    id: 4,
    transition: "blaibfezrfreg",
  }, 
  {
    id: 8,
    transition: "deuxieme trnasition",
  }, 
  {
    id: 9,
    transition: "tamere"
  }, 
  1, 
  10, 
  3, 
  11, 
  6, 
  12, 
  2, 
  13, 
  5, 
  14, 
  7, 
  19, 
  20, 
  16, 
  18, 
  15, 
  17] // Array of different monsters/situations
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
            <button onClick={this.newTransition}>Next Monster</button>
            <Link exact to="/"><button>Bad choice</button></Link>
          </div>
        </div>
        :
          <div>
            <TransitionTest transition={situations[index].transition}/>
            <button onClick={this.newSituation}>Next Monster</button>
          </div>
        }
      </div>
    )
  }
}

export default Actions