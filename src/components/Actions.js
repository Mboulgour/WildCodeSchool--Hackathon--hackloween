import React from 'react'
import { Link } from 'react-router-dom'

import ActionsHeader from './ActionsHeader'
import MainCharacter from './MainCharacter'
import Monster from './Monster'

import './styles/Actions.css'

const situations = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19] // Array of different monsters/situations
let index = 0 // Index to use when appending a specific monster

class Actions extends React.Component {
  state = {
    data: undefined,
    text: undefined,
    background: undefined,
  }

  
  getData = () => {
    fetch(`https://hackathon-wild-hackoween.herokuapp.com/monsters/${situations[index]}`)
      .then(res => res.json())
      .then(res => this.setState({
        data: res
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

  render(){
    return(
      <div className='Actions'>
        <ActionsHeader num={index}/>
        {this.state.data === undefined ? 
          <p>Loading...</p>
          :
          <Monster data={this.state.data.monster.id} name={this.state.data.monster.name}/>
        }
        <MainCharacter />
        <div className="Choices">
          <button onClick={this.newSituation}>Next Monster</button>
          <Link exact to="/"><button>Bad choice</button></Link>
        </div>
      </div>
    )
  }
}

export default Actions