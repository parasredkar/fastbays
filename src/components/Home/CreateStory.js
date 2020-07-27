import React, { Component } from 'react'
export default class Create extends Component {
    state = {}
    render() {
        return (
            <div className="Middle w-3/5  h-full  px-8 overflow-y-scroll  pb-64">
                <div className="PostBlog mt-10">
                    <p className="text-xl mt-3 font-bold text-gray-800">
                        Topic
                    </p>
                    <div className=" mt-3 h-full bg-white px-5 py-3  rounded-lg cursor-pointer">
                        <p className="text-sm text-gray-600 ml-3 font-semibold">
                            Write Something
                        </p>
                    </div>
                </div>
                <p className="text-xl mt-3 font-bold text-gray-800">
                    Discription
                </p>
                <div className=" mt-3 h-64 bg-white px-5 py-3  rounded-lg cursor-pointer">
                    <p className="text-sm text-gray-600 ml-3 font-semibold">
                        Write Something
                    </p>
                </div>
                <p className="text-xl mt-3 font-bold text-gray-800">
                    Upload Image
                </p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Upload Image
                </button>
            </div>
        )
    }
}
