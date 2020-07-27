import React, { Component } from 'react'

export default class Story extends Component {
    render() {
        return (
            <div className="Story flex  px-6 py-2">
                <img
                    className="w-10 h-10 object-cover rounded-full"
                    src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                    alt=""
                />
                <div className="ml-3 my-auto">
                    <p className="text-sm font-bold text-gray-700">
                        Sarthak Singh
                    </p>
                    <p className="text-xs font-medium text-gray-600">
                        30 june at 01:55pm
                    </p>
                </div>
            </div>
        )
    }
}
