import React from 'react'
import ServiceQuality from '../ServiceQuality'
import BarMenu from '../BarMenu'
import Reservations from '../Reservations'
import HappyHours from '../HappyHours'
import AboutBanner from '../layer/AboutBanner'
import Newsletter from '../Newsletter'

const Service = () => {
    return (
        <div>
            <div className="bg-home-bg z-10 bg-repeat">
                <AboutBanner text="What We offer" />
                <ServiceQuality/>
                <BarMenu/>
                <Reservations/>
                <HappyHours/>
                <Newsletter/>
            </div>

        </div>
    )
}

export default Service
