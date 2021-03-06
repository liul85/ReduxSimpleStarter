import React, { Component } from 'react'
import VideoItem from './video-list-item'

const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    return <VideoItem key={video.etag} video={video} onVideoSelect={props.onVideoSelect}/>
  })
  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
    )
}

export default VideoList