import React, { useEffect } from "react";
import { useState } from "react";
import harmBurgerIcon from "../../assets/img/hamburger.svg";
import youtubeIcon from "../../assets/img/youtube.svg";
import mickIcon from "../../assets/img/mike.svg";
import createIcon from "../../assets/img/create.svg";
import bellIcon from "../../assets/img/bell.svg";
import searchIcon from "../../assets/img/search.png";
import userIcon from "../../assets/img/userIcon.png";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../../utils/store/appSlice";
import {YOUTUBE_SEARCH_VIDEO_API} from "../../utils/constant"
import { cacheResults } from "../../utils/store/searchSlice";

function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const dispatch = useDispatch();
  const searchCache = useSelector(store => store.searchCacheSlice)

 useEffect(() =>{
  //Debounce example
  //Makes an api call after 200sec
  const timer = setTimeout(() =>{
    if(searchCache[searchQuery]){
      setSuggestions(searchCache[searchQuery])
    }
   else{
    getSearchSuggestions();
   }
  },200)

  //destroy the timer
  //By using this timer wheneever user will try to search new string before 200ms than this timer will expiry and again timer will start for new search query
  return () =>{
    clearTimeout(timer);
  }
 },[searchQuery])

  const getSearchSuggestions = async () =>{
    const data = await fetch(YOUTUBE_SEARCH_VIDEO_API + searchQuery);
    const searchData= await data.json();
    setSuggestions(searchData[1])
    dispatch(cacheResults(
      {
        //[Key] :Value
        [searchQuery] : searchData[1]
      }
    ))
  }
  const handleToggleMenu = () =>{
    dispatch(toggleMenu())
  }
  return (
    <div className="sticky z-50 top-0 bg-white">
      <div className="flex flex-row justify-between items-center py-3 px-4">
        <div className="flex flex-row items-center">
          <div className="w-10 h-10 hover:rounded-full hover:bg-gray-100  cursor-pointer">
            <img className="h-6 mt-2 ml-2" onClick={handleToggleMenu} alt="harmburger-icon" src={harmBurgerIcon}
            />
          </div>
          <a href="">
            <img className="h-6 ml-3 cursor-pointer" alt="youtube-icon" src={youtubeIcon}
            />
          </a>
        </div>
        <div className="relative">
        <div className="flex flex-row relative">
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
            className="border rounded-l-full w-[572px] h-10 pl-5 outline-none"
            type="text"
            placeholder="Search"
          />
          <button className="border rounded-r-full w-16 h-10 bg-gray-100">
            <img className=" h-6 mx-auto" alt="" src={searchIcon} />
          </button>
          <div className="w-10 h-10 hover:rounded-full hover:bg-gray-100 ml-5 cursor-pointer">
            <img className="mt-2 ml-2" alt="mickIcon" src={mickIcon} />
          </div>
        </div>
        { (showSuggestions && suggestions?.length > 0) &&
        <div className='absolute bg-white w-[560px] max-h-[400px] shadow-lg border rounded-lg overflow-y-auto left-3 top-10 z-50'>
          <ul className='py-3'>
            {suggestions.map((suggName) =>{
              return   <li key={suggName} className='my-1 p-1 hover:bg-gray-100 cursor-pointer'>
              <img  className='mr-5 h-4 ml-3 inline-block' alt='search-icon' src='https://cdn-icons-png.flaticon.com/512/482/482631.png' />
              <span>{suggName}</span>
              </li>
            })}
          </ul>
        </div>}
        </div>
        <div className="flex flex-row justify-around">
          <div className="w-10 h-10 hover:rounded-full hover:bg-gray-100 cursor-pointer ml-2">
            <img className="mt-2 ml-2" alt="create-icon " src={createIcon} />
          </div>
          <div className="w-10 h-10 hover:rounded-full hover:bg-gray-100 ml-5 cursor-pointer relative">
            <img className="mt-2 ml-2" alt="bell-icon " src={bellIcon} />
            <div className="absolute bg-red-700 text-white w-6 h-5 rounded-2xl border-2 border-white top-[3px] left-5 text-xs text-center">
              9+
            </div>
          </div>
          <div className="w-10 h-10 ml-5 cursor-pointer">
            <img className="mt-1 ml-2 h-7 rounded-full" alt="user-icon" src={userIcon}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
