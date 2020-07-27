import React, { Component } from 'react'

export default class Discription extends Component {
  render() {
    return (
      <div className=" discription w-1/5 h-full px-1 my-10 ">
      <img style={{borderRadius: '20px'}}  className="w-full h-40 object-cover " src="https://images.unsplash.com/photo-1576110397661-64a019d88a98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="" />
      <p className="text-2xl font-bold mt-3 text-gray-800">Abiral Jain</p>
      <p className="text-lg font-semibold text-gray-600">Mentor</p>
      <span className="text-sm font-bold text-blue-600">2030 Follower</span>
      <span className="text-sm ml-2 font-bold text-blue-600">231 Following</span>
      <p className="text-lg font-bold mt-3 text-gray-800">Description</p>
      <p className="text-xs text-gray-800">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum quaerat soluta cumque similique doloremque illo enim eaque nihil animi consequuntur, sit voluptate! Suscipit esse placeat natus quisquam impedit, dolorem provident. </p>
      <p className="text-lg mt-3 font-bold text-gray-800">Location</p>
      <i className="fas fa-map-marker-alt"></i>
      <span className="text-sm font-semibold text-gray-600">Bhopal,</span>
      <span className="text-sm font-bold text-gray-700 ">India</span>
      <p className="text-lg mt-3 font-bold text-gray-800">Contact</p>
      <i className="fas fa-envelope-square"></i>
      <span className="text-sm font-semibold text-gray-600">abiraljanabc@gmail.com</span>
      <i className="fas fa-phone-alt"></i>
      <span className="text-sm font-semibold text-gray-600">+91-989889889</span>
  
  </div>
    )
  }
}

