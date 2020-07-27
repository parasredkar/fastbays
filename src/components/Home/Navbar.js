import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <div>
          <div className="w-full py-6 shadow-lg px-16 bg-white flex justify-between ">
           <p className="font-bold text-3xl cursor-pointer text-black bg-white ">Fastbays</p>
            <div id="loginimg" className="flex rounded-full cursor-pointer px-3 py-2 bg-gray-300"> 
        <input type="text" name="search" placeholder="Search" className="bg-gray-300 px-2 w-64 outline-none" / >
        <i className="fas fa-search text-black w-10 my-auto ml-2 bg-gray-300 " ></i>
    </div>
        <div id="loginimg" className="bg-gray-300 cursor-pointer  rounded-full w-10 h-10 flex justify-center "><i className="fas fa-user my-auto  text-black  bg-gray-300"></i></div>
</div>
</div>
    )
  }
}

