import React, { Component } from 'react'

export default class Feed extends Component {
  render() {
    const style = {
      width: '23%' ,
     backgroundSize: 'cover' ,
     borderRadius: '20px' ,
     backgroundImage:`${this.props.url}` , 
     backgroundPosition: 'center'} ;
    return (
      <div className=" feed h-40  mt-6  object-cover" style={style}>
       </div>
    )
  }
}


