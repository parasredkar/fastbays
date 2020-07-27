import Discription from './Discription'
import Frame from './Frame'

import React, { Component } from 'react'

export default class Right extends Component {
    render() {
        return (
            <div className=" Right w-3/4 h-full flex mb-40">
                <Discription />
                <Frame />
            </div>
        )
    }
}
