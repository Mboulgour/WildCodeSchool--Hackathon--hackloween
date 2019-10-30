import React from 'react'

import Monster from './Monster'

import './styles/Home.css'

class Home extends React.Component {
  state = {
    data: undefined,
    name: undefined,
  }


  getData = () => {
    fetch('https://hackathon-wild-hackoween.herokuapp.com/monsters/10')
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
      <div className='Home'>
        <h1 className="Home_title">Home</h1>
        {this.state.data == undefined ? 
          <p>Loading...</p>
          :
          <Monster data={this.state.data.monster.id} name={this.state.data.monster.name}/>
        }
      </div>
    )
  }
}

export default Home