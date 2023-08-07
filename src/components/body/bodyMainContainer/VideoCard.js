import React from 'react'


export const VideoCard = ({ videoInfo }) => {
  const { snippet } = videoInfo;
  const { channelTitle, title, thumbnails, publishedAt } = snippet;

  return (
    <div className='w-[325px] p-2 ml-2 mt-2'>
      <img className='rounded-lg hover:drop-shadow-xl' alt='thumbnail' src={thumbnails?.medium?.url} />
      <ul className='flex justify-start items-start'>
        <img className='rounded-full w-7 h-7 mt-2 mr-2' alt='thumbnail' src={thumbnails?.default?.url} />
        <div>
          <li className='font-semibold py-2 text-[14px] line-clamp-2 max-h-[50px] leading-5'>{title}</li>
          <li className='text-gray-500 text-[13px]'>{channelTitle}</li>
          <li className='text-gray-500 text-[13px]'>{publishedAt}</li>
        </div>
      </ul>
    </div>
  )
}


 
// This is called higher order function

export const AddVideoCard =({videoInfo}) =>{
  return(
    <div className='p-1 rounded-lg hover:bg-gray-100'>
      <VideoCard videoInfo={videoInfo}/>
    </div>
  )
}

