import React, { Component } from 'react'
import Story from './Story'
import Events from './Events'
import Suggestedpages from './Suggestedpages'
export default class MostRightSide extends Component {
    state = {
        Stories: [
            {
                id: 0,
                name: 'Sarthak Singh',
                dateTime: '30 june at 01:55pm',
                profile:
                    'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            },
            {
                id: 1,
                name: 'Sarthak Singh',
                dateTime: '30 june at 01:55pm',
                profile:
                    'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            },
            {
                id: 2,
                name: 'Sarthak Singh',
                dateTime: '30 june at 01:55pm',
                profile:
                    'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            },
            {
                id: 3,
                name: 'Sarthak Singh',
                dateTime: '30 june at 01:55pm',
                profile:
                    'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            },
        ],
        Events: {
            EventsInvite: '9 Events Invite',
            EntreprenuerSeminar: '3 Entreprenuer Seminar',
        },
        Suggestedpages: [
            {
                id: 0,
                name: 'ChangeMOD',
                profile:
                    'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                type: 'Investor',
                CreateStory: this.props.CreateStory,
            },
        ],
    }
    render() {
        const stories = this.state.Stories.map(function(story) {
            return <Story url={story} key={story.id} />
        })
        const suggestedpages = this.state.Suggestedpages.map(function(
            suggestedpages
        ) {
            return (
                <Suggestedpages
                    profile={suggestedpages.profile}
                    name={suggestedpages.name}
                    type={suggestedpages.type}
                    key={suggestedpages.id}
                />
            )
        })
        return (
            <div className=" MostRightSide w-2/5 h-full pl-12 pr-16 pb-64 overflow-y-scroll">
                <div className="mt-10 flex justify-between ">
                    <p className="text-xl  font-bold text-gray-800">Stories</p>
                    <i className="fas fa-ellipsis-h cursor-pointer my-auto text-gray-600"></i>
                </div>
                <div className="bg-white rounded-lg mt-3">
                    <div
                        className="flex px-4 py-3 cursor-pointer"
                        onClick={this.props.handleClick}
                    >
                        <i className="fas fa-plus fa-2x cursor-pointer my-auto text-blue-500"></i>
                        <div className=" ml-3">
                            <p className="text-sm font-semibold text-gray-600">
                                Create your own story
                            </p>
                            <p className="text-xs font-semibold text-gray-600">
                                Lorem ipsum dolor sit amet
                            </p>
                        </div>
                    </div>
                    {stories}
                    <div className="px-6 py-2 mt-2 bg-blue-400 hover:bg-blue-500 cursor-pointer rounded-b-lg">
                        <p className="text-sm  font-bold text-white text-center">
                            SEE ALL
                        </p>
                    </div>
                </div>
                <div className="mt-5 flex justify-between ">
                    <p className="text-xl  font-bold text-gray-800">Events</p>
                    <i className="fas fa-ellipsis-h cursor-pointer my-auto text-gray-600"></i>
                </div>
                <Events
                    EventsInvite={this.state.Events.EventsInvite}
                    EntreprenuerSeminar={this.state.Events.EntreprenuerSeminar}
                />
                <div className="mt-5 flex justify-between ">
                    <p className="text-xl  font-bold text-gray-800">
                        Suggested Page
                    </p>
                    <i className="fas fa-ellipsis-h cursor-pointer my-auto text-gray-600"></i>
                </div>
                {suggestedpages}
            </div>
        )
    }
}
