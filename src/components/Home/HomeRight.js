import React, { Component } from 'react'
import Middle from './Middle'
import MostRightSide from './MostRightSide'
import CreateStory from './CreateStory'
import CreateStoryMostRight from './CreateStoryMostRight'
export default class HomeRight extends Component {
    render() {
        return (
            <div className="HomeRight w-3/4 h-full bg-gray-200 flex">
                {this.props.createStory === true ? <CreateStory /> : <Middle />}
                {this.props.createStory === true ? (
                    <CreateStoryMostRight />
                ) : (
                    <MostRightSide handleClick={this.props.handleClick} />
                )}
            </div>
        )
    }
}
