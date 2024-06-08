import vid02 from "../video/restaurant.mp4"
import ReactPlayer from 'react-player';
import React, { useRef } from 'react';

const Video = () => {
    const playerRef = useRef(null);

    return (

        <div className='w-full object-cover'>
            <ReactPlayer
                width="100%"
                height="100%"
                playing={true}
                muted={true}
                ref={playerRef} url={vid02} 
                controls={false} />
        </div>
    )
}

export default Video
