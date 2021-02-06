import React, { Component } from 'react';

class ToyForm extends Component {

    state = {
  
      name: "",
      image: "",
      likes: 5
    }
  handleNameChange = (event) => {
    this.setState({
      name: event.target.value
    })
  } 
  handleImageChange = (event) => {
    this.setState({
      image:  event.target.value
    })
  } 
  

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.createAToy(this.state)
  }
  render() {
    // console.log(this.props)
    return (
      <div className="container">
        
        <form onSubmit={event => this.handleSubmit(event)} className="add-toy-form">
          <h3>Create a toy!</h3>
          <input type="text" name="name" placeholder="Enter a toy's name..." className="input-text"  value={this.state.name} onChange={this.handleNameChange}/>
          <br/>
          <input type="text" name="image" placeholder="Enter a toy's image URL..." className="input-text" value={this.state.image} onChange={this.handleImageChange}/>
          <br/>
          <input type="submit" name="submit" value="Create New Toy" className="submit"/>
        </form>
      </div>
    );
  }

}

export default ToyForm;
