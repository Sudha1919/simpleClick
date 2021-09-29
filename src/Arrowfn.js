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
     { name : 'sandeep',
       designation: 'quality controller'
    }
    )}
}
render(){
  return(
    <div>
      <h2>Arrow Funtion</h2>
      <p>Name: {this.state.name}</p>
      <p>Designation: {this.state.designation}</p>
      <button onClick={this.handleClick} >Click Here</button>
     
    </div>
  )
}
}

export default Arrowfn;