import React,{useEffect, useState} from "react";
import {YOUTUBE_VIDEOS_API} from '../../../utils/constant'
import  {VideoCard,AddVideoCard}  from "./VideoCard";
import {Link} from "react-router-dom";


export const VideoContainer = () => {
  const[videos,setVideos] = useState([]);

  useEffect(() =>{
    getVideosData();
  },[])
   const getVideosData = async() =>{
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const videosData = await data.json();
    setVideos(videosData.items);
  }
  if (!videos.length) return null
  return(
      <div className="flex flex-wrap justify-start">
        {videos[0] && <AddVideoCard videoInfo={videos[0]}/>} 
        {videos?.map(video =>
       <Link to={'/watch?v='+ video.id} key={video.id}><VideoCard videoInfo={video} /></Link>
      )}
    </div>
  )

};
