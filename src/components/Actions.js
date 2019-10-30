import React from 'react'
import { Link } from 'react-router-dom'

import Monster from './Monster'

import './styles/Actions.css'

const situations = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
let index = 0

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

  newSituation = () =>{
    index += 1
    this.getData()
  }

  componentDidMount(){
    this.getData()
  }

  render(){
    return(
      <div className='Actions'>
        {this.state.data === undefined ? 
          <p>Loading...</p>
          :
          <Monster data={this.state.data.monster.id} name={this.state.data.monster.name}/>
        }
        <button onClick={this.newSituation}>Next Monster</button>
        <Link exact to="/"><button>Bad choice</button></Link>
      </div>
    )
  }
}

export default Actions