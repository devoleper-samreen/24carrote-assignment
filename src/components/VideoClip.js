import React from 'react'
import video from "../assests/24carrtos-home-banner.mp4"
import "../styles/video.css"

const VideoClip = () => {
  return (
    <div className='video-main-div'>
        <video src={video} preload='metadata' autoPlay muted loop playsInline ></video>
        <div className='video-text'>
          simply the finest
          </div>
    </div>
  )
}

export default VideoClip