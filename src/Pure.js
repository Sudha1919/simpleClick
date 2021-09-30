import React, {Component, PureComponent} from 'react'

class Pure extends PureComponent{
  constructor(props){
    super(props);
    this.state={
      val: 10
    }
  }
  ComponentDidMount(){
    
    setInterval(()=>{
      this.setState(()=>{
        val: 11
      })
    }, 2000)
    console.log('Pure val')
    
  }
  render(){
    console.log('rendered val')
    return(<div>{this.state.val}</div>)
  }
}
export default Pure;