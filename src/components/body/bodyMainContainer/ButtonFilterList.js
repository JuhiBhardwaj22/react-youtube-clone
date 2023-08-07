import React, { useState,useRef, useEffect } from "react";
import { Button } from "./Button";
import letScrollIcon from '../../../assets/img/left-scroll.svg'
import rightScrollIcon from '../../../assets/img/right-scroll.svg';

const buttonList = ['All', 'Gaming', 'Songs', 'Live', 'Cricket', 'News', 'Bollywood', 'Computer', 'Scene', 'Mixes', 'History', 'programming', 'Hollywood'];

export const ButtonFilterList = () => {
  const [ scrollPosition,setScrollPosition] = useState(0);
  const containerRef = useRef(null);

  const handleLeftScrollBtn =() =>{
    const scrollAmout = 100;
    const newScrollPosition = scrollPosition-scrollAmout;
    if(containerRef.current){
      containerRef.current.scrollTo({
        left:newScrollPosition,
        behavior: 'smooth',
      })
    }
    setScrollPosition(newScrollPosition);
  }
   
  const handleRightScrollBtn = () =>{
    const scrollAmout = 100;
    const newScrollPosition = scrollPosition+scrollAmout;
    if(containerRef.current){
      containerRef.current.scrollTo({
        left:newScrollPosition,
        behavior: 'smooth',
      })
    }
    setScrollPosition(newScrollPosition);
  }
  return (
    <div className="flex sticky top-[64px]  bg-white pb-2 z-40">
      <button className='hover:rounded-full w-10 h-10 mr-2 hover:bg-gray-100 fixed z-50' onClick={handleLeftScrollBtn}> <img alt='leftScrollBtn' className='inline-block' src={letScrollIcon} /></button>
      <div ref={containerRef} className="flex w-[86%] overflow-hidden mx-12">
      {buttonList.map((item,index) =>{
        return  <Button key={index} buttonName={item}></Button>
      })}
      </div>
      <button className='hover:rounded-full w-10 h-10 ml-2 right-20 hover:bg-gray-100 fixed z-50' onClick={handleRightScrollBtn}><img alt='rightScrollBtn' className='inline-block' src={rightScrollIcon} /></button>
    </div>
  )
};
