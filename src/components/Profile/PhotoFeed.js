import Feed from './Feed'
import React, { Component } from 'react'

export default class PhotoFeed extends Component {
    state = {
        feed: [
            {
                id: 0,
                url:
                    'url(https://images.unsplash.com/photo-1518550687729-819219298d98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80)',
            },
            {
                id: 1,
                url:
                    'url(https://images.unsplash.com/photo-1556347961-f9521a88cb8a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80) ',
            },
            {
                id: 2,
                url:
                    'url(https://images.unsplash.com/photo-1574719967567-b59da34a037c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=876&q=80) ',
            },
            {
                id: 3,
                url:
                    'url(https://images.unsplash.com/photo-1531891570158-e71b35a485bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1900&q=80) ',
            },
            {
                id: 4,
                url:
                    'url(https://images.unsplash.com/photo-1563765538654-41d961f7db1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80) ',
            },
            {
                id: 5,
                url:
                    'url(https://images.unsplash.com/photo-1525943837837-af668e09139d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80) ',
            },
            {
                id: 6,
                url:
                    'url(https://images.unsplash.com/photo-1518550687729-819219298d98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80) ',
            },
            {
                id: 7,
                url:
                    'url(https://images.unsplash.com/photo-1556347961-f9521a88cb8a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80) ',
            },
            {
                id: 8,
                url:
                    'url(https://images.unsplash.com/photo-1574719967567-b59da34a037c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=876&q=80) ',
            },
            {
                id: 9,
                url:
                    'url(https://images.unsplash.com/photo-1531891570158-e71b35a485bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1900&q=80) ',
            },
            {
                id: 10,
                url:
                    'url(https://images.unsplash.com/photo-1563765538654-41d961f7db1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80) ',
            },
            {
                id: 11,
                url:
                    'url(https://images.unsplash.com/photo-1525943837837-af668e09139d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80) ',
            },
        ],
    }
    render() {
        const feed = this.state.feed.map(function(feed) {
            return <Feed url={feed.url} key={feed.id} />
        })
        return (
            <div className="mt-10">
                <div className="flex justify-between">
                    <p className="text-xl mt-3 font-bold text-gray-800">
                        Photo Feed
                    </p>
                    <p className="bg-white font-bold text-gray-700 rounded-full px-4 py-2 ">
                        See more
                    </p>
                </div>
                <div className="flex flex-wrap w-full justify-between mb-10">
                    {feed}
                </div>
            </div>
        )
    }
}
