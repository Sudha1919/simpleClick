import React, {Component} from 'react';

class Arrowfn extends Component{
constructor(){
  super();
  this.state={
    name: 'sudha',
    age: 30,
    designation: 'Front End Developer'
  }
  this.handleClick = () => {
    this.setState(
     { name : 'sandeep'}
    )}
}
render(){
  return(
    <div>
      <h2>Arrow Funtion</h2>
      <p>Name: {this.state.name}</p>
      <button onClick={this.handleClick} >Click Here</button>
     
    </div>
  )
}
}

export default Arrowfn;