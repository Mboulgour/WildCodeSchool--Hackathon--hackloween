import React from 'react'

import Monster from './Monster'

import './styles/Actions.css'

class Actions extends React.Component {
  state = {
    data: undefined,
    name: undefined,
  }


  getData = () => {
    fetch('https://hackathon-wild-hackoween.herokuapp.com/monsters/15')
      .then(res => res.json())
      .then(res => this.setState({
        data: res
      })
    )
  }

  componentDidMount(){
    this.getData()
    console.log(this.state.data)
  }

  render(){
    return(
      <div className='Actions'>
        {this.state.data === undefined ? 
          <p>Loading...</p>
          :
          <Monster data={this.state.data.monster.id} name={this.state.data.monster.name}/>
        }
      </div>
    )
  }
}

export default Actions