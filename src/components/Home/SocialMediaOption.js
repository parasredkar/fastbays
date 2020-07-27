import React, { Component } from 'react'
export default class SocialMediaOption extends Component {
    render() {
        return (
            <div className=" SocialOption flex mt-3">
                <div
                    className="rounded-full w-10 h-10 object-cover"
                    style={{
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundImage: this.props.logo,
                    }}
                ></div>
                <span className="my-auto text-lg  font-bold ml-5">
                    {this.props.option}
                </span>
            </div>
        )
    }
}
