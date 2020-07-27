import React, { Component } from 'react'

export default class Events extends Component {
    render() {
        return (
            <div className="bg-white rounded-lg mt-3">
                <div className="flex px-4 py-3">
                    <i className="fas fa-folder cursor-pointer my-auto text-gray-600"></i>
                    <p className=" ml-4 text-sm font-semibold text-gray-600">
                        {this.props.EventsInvite}
                    </p>
                </div>
                <div className="flex px-4 py-3">
                    <i className="fas fa-folder cursor-pointer my-auto text-gray-600"></i>
                    <p className=" ml-4 text-sm font-semibold text-gray-600">
                        {this.props.EntreprenuerSeminar}
                    </p>
                </div>
            </div>
        )
    }
}
