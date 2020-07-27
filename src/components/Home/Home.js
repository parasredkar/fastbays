import Navbar from './Navbar'
import HomeContainer from './HomeContainer'
import React, { Component } from 'react'

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = { createStory: false }
    }
    handleClick = () => {
        this.setState({
            createStory: !this.state.CreateStory,
        })
    }
    render() {
        console.log(this.state.createStory)
        return (
            <div
                className="Home bg-gray-300 w-full h-full "
                onClick={this.state.createStory}
            >
                <Navbar />
                <HomeContainer
                    handleClick={this.handleClick}
                    createStory={this.state.createStory}
                />
            </div>
        )
    }
}
