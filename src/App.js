import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'


class App extends React.Component{

  state = {
    display: false,
    toys: []
  }

  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  } 
  deleteAToy = (toyId)=> {
    let updatedToys = this.state.toys.filter(toy => toy.id !== toyId)
    this.setState({toys: updatedToys})
  }
  componentDidMount(){
    fetch('http://localhost:3000/toys')
      .then(rep => rep.json())
      .then(toysObj => this.setState({toys: toysObj}))
  }

  creatAToy = (data) => {
      fetch('http://localhost:3000/toys', {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      .then(resp => resp.json())
      .then(toy => this.setState({
        pets: this.state.toys.push(toy)
      }))
  }
  render(){
    return (
      <>
        <Header/>
        { this.state.display
            ?
          <ToyForm createAToy={this.creatAToy}/>
            :
          null
        }
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer 
            toys={this.state.toys}
            deleteAToy = {this.deleteAToy}/>
      </>
    );
  }

}

export default App;
