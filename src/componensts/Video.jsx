import React from 'react'
import vid01 from "../Videos/restaurant.mp4"
import thumbnail from "../assets/thumbnail.jpg"

import { Player } from 'video-react'
const Video = () => {
    return (

        <div className='!p-0 !m-0'>
            <Player
            playsInline
                poster={thumbnail}
                
            >
                <source src={vid01} />
            </Player>
        </div>
    )
}

export default Video
