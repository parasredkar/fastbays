import React, { Component } from 'react'

export default class ConnectedFeed extends Component {
  render() {
      const style ={
        backgroundSize: 'cover' ,
         borderRadius: '20px' ,
         backgroundImage: `${this.props.url}` , 
        backgroundPosition: 'center'
      };
    return (
        <div className="h-40 w-32 mt-6  object-cover" style={style}>
        <div className="px-2 text-white mt-3">
         <span className="text-sm font-bold">Ribaka</span>
         <i className="fas fa-ellipsis-v mt-1 float-right"></i> 
         <p className="bg-white mx-1 text-gray-800  rounded-full  font-semibold py-1 mt-20 text-center cursor-pointer " style={{fontSize: '12px' }} >Send message</p> 
        </div>                                                      
   </div>
    )
  }
}
