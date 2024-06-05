import React from 'react'
import vid from "../Videos/restaurant.mp4"
// import thumbnail from "../assets/thumbnail.jpg"

const Video = () => {
    return (

        <div className='w-full'>
            <video src={vid}  autoPlay="true"/>
        </div>
    )
}

export default Video
