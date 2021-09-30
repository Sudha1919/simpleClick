import React,{Component} from "react";
import "./style.css";
import Arrowfn from './Arrowfn';
import Errorboundary from './Errorboundary';
import Error from './Error'
import {connect} from 'react-redux';


class App extends Component{
 // state={
  //  age:21
 // }
  //onAgeUp = () =>{
    //this.setState({
      //...this.state,
      //age:++this.state.age
    //})
  //}
  //onAgeDown = () =>{
    //this.setState({
      //...this.state,
      //age:--this.state.age
   // })
 // }
 
  render(){
   console.log(this.props.age)
    return(
    <div>
      <div> Age:{this.props.age} <span></span> </div>
      <button onClick={this.props.onAgeUp}>Age Up</button>
      <button onClick={this.props.onAgeDown}>Age Down</button>
    </div>
    )
  }
 }
const mapStateToProps =(state)=>{
  return {
    age: state.age
  }
}
const mapDispatchToProps =(dispatch) =>{
  return{
    onAgeUp: () => dispatch({type:'AGE_UP'}),
    onAgeDown :() => dispatch({type:'AGE_DOWN'})
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);