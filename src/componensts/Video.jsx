import vid02 from "../video/restaurant.mp4"
import ReactPlayer from 'react-player';
import React, { useRef } from 'react';
import thumbnail01 from "../assets/thumbnail01.jpg"
import Image from "./layer/Image";


const Video = () => {
    const playerRef = useRef(null);
    const pic = <Image className="w-full" src={thumbnail01} />


    return (

        <div className='w-full object-cover'>
            <ReactPlayer
                width="100%"
                height="100%"
                playing={true}
                muted={true}
                light= {pic}
                ref={playerRef} url={vid02} controls={true} />
        </div>
    )
}

export default Video
