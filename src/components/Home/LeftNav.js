import React, { Component } from 'react'
import NavOption from './NavOption'
import Internshala from './Internshala.jpg'
import LinkedIn from './LinkedIn.png'
import Swayam from './Swayam.jpg'
import SocialMediaOption from './SocialMediaOption'
export default class Nav extends Component {
    render() {
        const logo1 = `url(${LinkedIn})`
        const logo2 = `url(${Internshala})`
        const logo3 = `url(${Swayam})`
        return (
            <div className="LeftNav w-1/4 h-full   pr-8  mt-10">
                <div
                    className="flex bg-gray-100 px-5 py-3 ml-5 shadow-lg"
                    style={{ borderRadius: '20px' }}
                >
                    <img
                        className="w-16 h-16 object-cover rounded-full"
                        src="https://images.unsplash.com/photo-1576110397661-64a019d88a98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                        alt=""
                    />
                    <div className="mt-1 py-auto w-full h-full ml-5">
                        <p className="text-xl font-bold">Abiral Jain</p>
                        <p className=" font-bold text-gray-700  "> Mentor</p>
                    </div>
                </div>

                <div className=" navOptions mt-6">
                    <NavOption
                        option="HOME"
                        icon="fas fa-home fa-1x pl-12 pr-8"
                        url="/"
                    />
                    <NavOption
                        option="STARTUP"
                        icon="fas fa-search fa-1x pl-12 pr-8"
                        url="home/statup"
                    />
                    <NavOption
                        option="MENTORS"
                        icon="fas fa-user-tie fa-1x pl-12 pr-8"
                        url="/mentors"
                    />
                    <NavOption
                        option="INVESTORS"
                        icon="fas fa-globe-americas fa-1x pl-12 pr-8"
                        url="/investors"
                    />
                    <NavOption
                        option="PROFILE"
                        icon="fas fa-user fa-1x pl-12 pr-8"
                        url="/Profile"
                    />
                </div>

                <div className="my-6 px-10 text-gray-700  ">
                    <p className="text-xl font-medium ">PAGES YOU LIKE</p>
                    <SocialMediaOption option="LinkedIn" logo={logo1} />
                    <SocialMediaOption option="Internsala" logo={logo2} />
                    <SocialMediaOption option="Swayam" logo={logo3} />
                </div>
            </div>
        )
    }
}
