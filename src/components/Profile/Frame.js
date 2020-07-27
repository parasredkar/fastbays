import ConnectedPeople from './ConnectedPeople'
import PhotoFeed from './PhotoFeed'

import React, { Component } from 'react'

export default class Frame extends Component {
    render() {
        return (
            <div className="w-4/5 px-12 h-full overflow-y-scroll   ">
                <ConnectedPeople />
                <PhotoFeed />
            </div>
        )
    }
}
