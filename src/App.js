import React,{PureComponent, Component} from "react";
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
   
    return(
    <div>
      <div> Age:{this.state.age} <span></span> </div>
      <button onClick={this.onAgeUp}>Age Up</button>
      <button onClick={this.onAgeDown}>Age Down</button>
    </div>
    )
  }
  mapStateToProps =(state)=>{
    return {
      age: state.age
    }
  }
 mapDispatchToProps =(dispatch) =>{
    return{
      onAgeUp: () => dispatch({type:'AGE_UP'}),
      onAgeDown :() => dispatch({type:'AGE_DOWN'})
    }
  }
  

}
export default connect(mapStateToProps,mapDispatchToProps)(App);