import React from 'react'
import vid02 from "../video/restaurant.mp4"

const Video = () => {
    return (

        <div className='w-full object-cover'>
            <video>
                <source src={vid02} type="video/mp4" />
            </video>
        </div>
    )
}

export default Video
