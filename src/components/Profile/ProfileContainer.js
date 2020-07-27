import LeftNav from '../Home/LeftNav'
import Right from './Right'
import React, { Component } from 'react'

export default class ProfileContainer extends Component {
    render() {
        return (
            <div className="Profilecontainer w-full h-full  flex fixed ">
                <LeftNav />
                <Right />
            </div>
        )
    }
}
