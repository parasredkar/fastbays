import React, { Component } from 'react'
import LeftNav from './LeftNav'
import HomeRight from './HomeRight'

export default class HomeContainer extends Component {
    render() {
        return (
            <div className="HomeContainer  w-full h-full  flex fixed">
                <LeftNav />
                <HomeRight
                    handleClick={this.props.handleClick}
                    createStory={this.props.createStory}
                />
            </div>
        )
    }
}
