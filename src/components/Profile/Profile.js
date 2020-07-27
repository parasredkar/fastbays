import React, { Component } from 'react'
import Navbar from '../Home/Navbar'
import ProfileContainer from './ProfileContainer'

export default class Profile extends Component {
    render() {
        return (
            <div className="Profile bg-red w-full h-full ">
                <Navbar />
                <ProfileContainer />
            </div>
        )
    }
}
