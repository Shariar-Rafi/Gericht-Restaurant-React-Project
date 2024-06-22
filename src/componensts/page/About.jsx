import React from 'react'
import AboutBanner from '../layer/AboutBanner'
import History from '../History'
import ChefWord from '../ChefWord'
import Review from '../Review'
import Photogallery from '../Photogallery'
import Newsletter from '../Newsletter'

const About = () => {
    return (
        <>
            <div className="bg-home-bg z-10 bg-repeat">
                <AboutBanner text="Welcome to Gerícht" />
                <History/>
                
                <ChefWord/>
                <Review/>
                <Photogallery/>
                <Newsletter/>
            </div>

        </>
    )
}

export default About
