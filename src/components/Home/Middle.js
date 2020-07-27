import React, { Component } from 'react'
import Post from './Post'
export default class Middle extends Component {
    state = {
        posts: [
            {
                id: 0,
                name: 'Sonali Singh',
                dateTime: '30 june at 01:55pm',
                image:
                    'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
                profilePicture:
                    'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                reviews: 4,
                shared: 20,
                saved: 8,
            },
            {
                id: 1,
                name: 'Rabika ',
                dateTime: '29 june at 10:00am',
                image:
                    'https://images.unsplash.com/photo-1498842812179-c81beecf902c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                profilePicture:
                    'https://images.unsplash.com/photo-1513379733131-47fc74b45fc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                reviews: 5,
                shared: 24,
                saved: 13,
            },
        ],
    }
    render() {
        const PostFeed = this.state.posts.map(function(post) {
            return <Post post={post} key={post.id} />
        })
        return (
            <div className="Middle w-3/5  h-full  px-8 overflow-y-scroll  pb-64">
                <div className="PostBlog mt-10">
                    <p className="text-xl mt-3 font-bold text-gray-800">
                        Post Something
                    </p>
                    <div className="flex mt-3 h-full bg-white px-5 py-3 justify-between rounded-lg cursor-pointer">
                        <div className="flex">
                            <img
                                className="rounded-full object-cover w-8 h-8"
                                src="https://images.unsplash.com/photo-1576110397661-64a019d88a98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                                alt=""
                            />
                            <p className="text-sm text-gray-600 ml-3 my-auto font-semibold">
                                What's on your mind ?
                            </p>
                        </div>
                        <i className="fas fa-image my-auto text-gray-600   "></i>
                    </div>
                </div>
                {PostFeed}
            </div>
        )
    }
}
