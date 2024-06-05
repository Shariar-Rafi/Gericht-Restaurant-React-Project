import React from 'react'
import vid01 from "../video/restaurant.mp4"
import thumbnail from "../assets/thumbnail.jpg"

import { Player } from 'video-react'
const Video = () => {
    return (

        <div>
            <Player
                poster={thumbnail}

            >
                <source src={vid01} />
            </Player>
        </div>
    )
}

export default Video
