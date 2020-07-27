import React, { Component } from 'react'

export default class Post extends Component {
    render() {
        const post = this.props.post
        return (
            <div className="Post mt-5 rounded-lg bg-white w-full  pt-3">
                <div className=" Discription flex justify-between px-6 ">
                    <div className="flex">
                        <img
                            className="w-12 h-12 object-cover rounded-full"
                            src={post.profilePicture}
                            alt=""
                        />
                        <div className="ml-3 my-auto">
                            <p className="text-lg font-bold text-gray-800">
                                {post.name}
                            </p>
                            <p className="text-xs font-medium text-gray-600">
                                {post.dateTime}
                            </p>
                        </div>
                    </div>
                    <i className="fas fa-ellipsis-h cursor-pointer my-auto text-gray-600"></i>
                </div>
                <div className=" PhotoDiv flex mt-3 w-full h-64 bg-contain justify-between px-4">
                    <img
                        id="imgS"
                        className="mt-5 w-full object-cover "
                        src={post.image}
                        alt=""
                    />
                </div>
                <div className="px-6">
                    <div className="flex mt-3 justify-between px-2 py-1">
                        <div>
                            <i className="fas fa-comment-alt cursor-pointer mr-2 my-auto text-gray-600"></i>
                            <span className="text-sm font-semibold text-gray-600">
                                {' '}
                                {post.reviews}
                            </span>
                        </div>
                        <div>
                            <i className="fas fa-share-alt cursor-pointer mr-2 my-auto text-gray-600"></i>
                            <span className="text-sm font-semibold text-gray-600">
                                {' '}
                                {post.shared}
                            </span>
                        </div>
                        <div>
                            <i className="fas fa-bookmark cursor-pointer mr-2 my-auto text-gray-600"></i>
                            <span className="text-sm font-semibold text-gray-600">
                                {' '}
                                {post.saved}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex h-full bg-gray-300 px-6 py-3 mt-2 justify-between rounded-b-lg cursor-pointer">
                    <div className="flex">
                        <img
                            className="rounded-full object-cover w-8 h-8"
                            src="https://images.unsplash.com/photo-1576110397661-64a019d88a98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                            alt=""
                        />
                        <p className="text-sm text-gray-600 ml-3 my-auto font-semibold">
                            Write your review...
                        </p>
                    </div>
                    <div className="my-auto">
                        <i className="fas fa-link   text-gray-600   "></i>
                        <i className="fas fa-smile ml-4  text-gray-600   "></i>
                        <i className="fas fa-image ml-4  text-gray-600   "></i>
                    </div>
                </div>
            </div>
        )
    }
}
