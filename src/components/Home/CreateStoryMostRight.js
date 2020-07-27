import React, { Component } from 'react'
import Events from './Events'
import Suggestedpages from './Suggestedpages'

export default class Featured extends Component {
    state = {
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
                    <p className="text-xl  font-bold text-gray-800">Featured</p>
                    <i className="fas fa-ellipsis-h cursor-pointer my-auto text-gray-600"></i>
                </div>
                <div className="featuredfeed bg-white rounded-lg mt-3 p-3">
                    <div className="flex justify-between  p-2">
                        <div className="ml-3 flex ">
                            <img
                                className="w-10 h-10 object-cover rounded-full"
                                src="https://images.unsplash.com/photo-1576110397661-64a019d88a98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                                alt=""
                            />
                            <p className="text-sm font-bold text-gray-700  leading-10 pl-2">
                                Abiral Jain
                            </p>
                        </div>

                        <i className="fas fa-ellipsis-h cursor-pointer my-auto text-gray-600"></i>
                    </div>
                    <img
                        className="w-30 h-60 object-cover "
                        src="https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                        alt=""
                    />
                    <h2 className="pt-3  font-semibold ">
                        How to write a tutorial
                    </h2>
                    <p className="text-xs">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Accusamus, quod recusandae pariatur a cumque
                        molestias? <b>ReadMore</b>
                    </p>
                </div>
                <div className="bg-white rounded-lg mt-3"></div>
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
