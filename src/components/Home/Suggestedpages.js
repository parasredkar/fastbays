import React, { Component } from 'react'

export default class Suggestedspages extends Component {
    render() {
        const profile = `${this.props.profile}`
        return (
            <div className="bg-white rounded-lg mt-3">
                <div className="flex  px-6 py-4">
                    <img
                        className="w-10 h-10 object-cover rounded-full"
                        src={profile}
                        alt=""
                    />
                    <div className="ml-3 my-auto">
                        <p className="text-sm font-bold text-gray-700">
                            {this.props.name}
                        </p>
                        <p className="text-xs font-medium text-gray-600">
                            {this.props.type}
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}
