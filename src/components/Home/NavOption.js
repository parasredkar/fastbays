import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NavOption extends Component {
    render() {
        return (
            <div className=" NavOption w-full rounded-lg  py-2 ml-1 ">
                <div className=" NavSide border-l-4 py-1">
                    <i className={this.props.icon}></i>
                    <Link to={this.props.url} className="text-lg font-bold  ">
                        {this.props.option}
                    </Link>
                </div>
            </div>
        )
    }
}
